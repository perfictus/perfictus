import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { CONSULTATION } from '../../../data/site-content';

@Component({
  selector: 'app-contact-us',
  imports: [BreadcrumbComponent, ContactComponent, ContactFormComponent],
  templateUrl: './contact-us.component.html',
  styles: ``
})
export class ContactUsComponent {
  consultation = CONSULTATION;
  bookingLink = CONSULTATION.bookingUrl || this.googleCalendarLink();

  /**
   * Builds a Google Calendar "new event" link, pre-filled with a 30-min consultation
   * at the next free slot inside business hours (in the business time zone).
   */
  private googleCalendarLink(): string {
    const c = CONSULTATION;
    const { date, minutes } = this.nextSlot();
    const pad = (n: number) => String(n).padStart(2, '0');
    const fmt = (mins: number) =>
      `${date}T${pad(Math.floor(mins / 60))}${pad(mins % 60)}00`;

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: c.title,
      details: c.details,
      dates: `${fmt(minutes)}/${fmt(minutes + c.durationMinutes)}`,
      ctz: c.timeZone,
      add: c.guestEmail,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  /** Next half-hour slot within opening hours, as YYYYMMDD + minutes-from-midnight in the business time zone. */
  private nextSlot(): { date: string; minutes: number } {
    const c = CONSULTATION;
    const open = c.startHour * 60 + c.startMinute;
    const lastStart = c.endHour * 60 + c.endMinute - c.durationMinutes;

    // current date/time in the business time zone
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: c.timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(new Date());
    const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
    const day = new Date(Date.UTC(get('year'), get('month') - 1, get('day')));

    // round up to the next half hour, with at least one hour's notice
    let minutes = Math.ceil((get('hour') * 60 + get('minute') + 60) / 30) * 30;
    if (minutes < open) minutes = open;
    if (minutes > lastStart) {
      day.setUTCDate(day.getUTCDate() + 1);
      minutes = open;
    }
    const date = day.toISOString().slice(0, 10).replace(/-/g, '');
    return { date, minutes };
  }
}
