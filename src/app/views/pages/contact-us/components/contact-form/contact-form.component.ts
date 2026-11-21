import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AsYouType, CountryCode, getCountries, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js';
import { CONTACT, CONTACT_FORM, SERVICES } from '../../../../../data/site-content';
import { ConsentService } from '../../../../../service/consent.service';

interface Country { code: CountryCode; name: string; dial: string; flag: string; }

// Several countries share a calling code (+1, +44, +7 …); pick the main one until the number says otherwise.
const MAIN_COUNTRY: Record<string, CountryCode> = {
  '1': 'US', '7': 'RU', '44': 'GB', '47': 'NO', '61': 'AU', '212': 'MA', '262': 'RE', '290': 'SH', '358': 'FI', '590': 'GP', '599': 'CW',
};

const flag = (cc: string) => String.fromCodePoint(...[...cc].map((c) => 127397 + c.charCodeAt(0)));

// Best guess of the visitor's country from their time zone (no network request needed).
const TZ_COUNTRY: Record<string, CountryCode> = {
  'Asia/Kuwait': 'KW', 'Asia/Kolkata': 'IN', 'Asia/Calcutta': 'IN', 'Asia/Dubai': 'AE', 'Asia/Riyadh': 'SA',
  'Asia/Qatar': 'QA', 'Asia/Bahrain': 'BH', 'Asia/Muscat': 'OM', 'Europe/London': 'GB',
};

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  services = [...SERVICES.map((s) => s.title), ...CONTACT_FORM.extraServices];
  countries = this.buildCountries();
  topCountries = this.countries.filter((c) => CONTACT_FORM.topCountries.includes(c.code));
  otherCountries = this.countries.filter((c) => !CONTACT_FORM.topCountries.includes(c.code));
  email = CONTACT.email;

  sending = signal(false);
  sent = signal(false);
  private consent = inject(ConsentService);
  error = signal('');

  form = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
      country: ['KW' as CountryCode, Validators.required],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      message: ['', Validators.maxLength(2000)],
      company: [''], // hidden honeypot: real visitors never fill it in
    },
    { validators: (g: AbstractControl): ValidationErrors | null => {
        const { phone, country } = g.value;
        if (!phone) return null;
        const parsed = parsePhoneNumberFromString(phone, country);
        return parsed?.isValid() ? null : { phone: true };
      } },
  );

  constructor() {
    if (this.isBrowser) {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
      const guess = TZ_COUNTRY[tz] ?? (tz.startsWith('America/') ? 'US' : undefined);
      if (guess) this.form.controls.country.setValue(guess);
    }
  }

  get dial() {
    return getCountryCallingCode(this.form.controls.country.value);
  }

  get phoneInvalid() {
    const c = this.form.controls.phone;
    return c.touched && !!c.value && this.form.hasError('phone');
  }

  invalid(name: 'name' | 'email' | 'service' | 'phone') {
    const c = this.form.controls[name];
    return c.touched && c.invalid;
  }

  /** Typing or pasting "+965 6036 0675" (or "00965…") picks Kuwait and keeps just the local number. */
  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^\d+]/g, '');
    if (value.startsWith('00')) value = '+' + value.slice(2);
    if (!value.startsWith('+')) {
      if (input.value !== input.value.trimStart()) this.form.controls.phone.setValue(input.value.trimStart());
      return;
    }

    const typer = new AsYouType();
    typer.input(value);
    const code = typer.getCallingCode();
    if (!code) return;
    const country = typer.getCountry() ?? MAIN_COUNTRY[code] ?? this.countries.find((c) => c.dial === code)?.code;
    if (!country) return;
    this.form.patchValue({ country, phone: typer.getNationalNumber() });
  }

  async submit() {
    if (this.form.invalid || this.sending()) return;
    const v = this.form.getRawValue();
    if (v.company) { this.sent.set(true); return; } // bot

    const phone = parsePhoneNumberFromString(v.phone, v.country)!;
    const countryName = this.countries.find((c) => c.code === v.country)?.name ?? v.country;
    this.sending.set(true);
    this.error.set('');
    const timeout = new AbortController();
    const timer = setTimeout(() => timeout.abort(), 25000);
    try {
      if (!CONTACT_FORM.endpoint) throw new Error('Contact form endpoint is not set (CONTACT_FORM.endpoint)');
      // text/plain keeps this a "simple" request, which Google Apps Script accepts from any website.
      const res = await fetch(CONTACT_FORM.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: v.name.trim(),
          email: v.email.trim(),
          phone: `${phone.formatInternational()} (${countryName})`,
          service: v.service,
          message: v.message.trim(),
          page: location.href,
          company: v.company,
        }),
        signal: timeout.signal,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok !== true) throw new Error(data.error || res.statusText);
      this.sent.set(true);
      this.consent.track('generate_lead', { method: 'contact_form', service: v.service, country: v.country, page_path: location.pathname });
      this.form.reset({ country: v.country });
    } catch (e) {
      console.error('Contact form failed', e);
      this.error.set('Sorry, your message could not be sent right now. Please try again, or email us directly.');
    } finally {
      clearTimeout(timer);
      this.sending.set(false);
    }
  }

  again() {
    this.sent.set(false);
  }

  private buildCountries(): Country[] {
    const names = new Intl.DisplayNames(['en'], { type: 'region' });
    return getCountries()
      .map((code) => ({ code, name: names.of(code) ?? code, dial: getCountryCallingCode(code), flag: flag(code) }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
