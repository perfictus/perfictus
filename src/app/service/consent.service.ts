import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ANALYTICS } from '../data/site-content';

type Choice = 'granted' | 'denied';
const KEY = 'pf-consent';

/**
 * Cookie consent + Google Analytics.
 * gtag.js is only downloaded after the visitor accepts, so nothing is tracked before consent.
 * GA4's enhanced measurement records the page views of in-app navigation by itself.
 */
@Injectable({ providedIn: 'root' })
export class ConsentService {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private loaded = false;

  readonly enabled = !!ANALYTICS.measurementId;
  /** true while the banner should be shown */
  readonly open = signal(false);

  init() {
    if (!this.isBrowser || !this.enabled) return;
    const saved = this.read();
    if (saved === 'granted') this.load();
    else if (!saved) this.open.set(true);
  }

  accept() { this.save('granted'); this.open.set(false); this.load(); }

  decline() {
    this.save('denied');
    this.open.set(false);
    if (this.loaded) {
      (window as any).gtag?.('consent', 'update', { analytics_storage: 'denied' });
      // remove GA cookies set earlier
      document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n.startsWith('_ga'))
        .forEach((n) => { document.cookie = `${n}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, '')}`; document.cookie = `${n}=; Max-Age=0; path=/`; });
    }
  }

  /** "Cookie settings" link: show the banner again */
  reopen() { if (this.enabled) this.open.set(true); }

  private load() {
    const w = window as any;
    if (this.loaded) { w.gtag?.('consent', 'update', { analytics_storage: 'granted' }); return; }
    this.loaded = true;
    const id = ANALYTICS.measurementId;
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () { w.dataLayer.push(arguments); };
    w.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    w.gtag('js', new Date());
    w.gtag('config', id, { anonymize_ip: true });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);
  }

  private read(): Choice | null {
    try { const v = localStorage.getItem(KEY); return v === 'granted' || v === 'denied' ? v : null; } catch { return null; }
  }
  private save(v: Choice) { try { localStorage.setItem(KEY, v); } catch {} }
}
