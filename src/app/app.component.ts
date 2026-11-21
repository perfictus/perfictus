import { Component, ElementRef, HostListener, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { SeoService } from './service/seo.service';
import { ConsentService } from './service/consent.service';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CookieBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public el: ElementRef,
  ) {}
  private seo = inject(SeoService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private router = inject(Router);
  private consent = inject(ConsentService);

  isActive = false;

  progress = 0;

  @ViewChild('progressPath') progressPath!: ElementRef;

  offset = 50;
  duration = 550;
  ngOnInit() {

    this.seo.init();

    // Everything below needs a real browser (skipped while pre-rendering pages)
    if (!this.isBrowser) return;

    // Open every page at the top without a flicker. Angular's built-in scroll restoration
    // waits a frame after the new page is drawn, so you briefly see it at the old position.
    // Jumping on NavigationEnd happens before the browser paints the new page.
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        // let the scroll animations pick up the new page straight away
        requestAnimationFrame(() => AOS.refreshHard());
      }
    });
    this.consent.init();
    AOS.init({ duration: 900, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.updateProgress();
    const progressWrap = this.el.nativeElement.querySelector('.progress-wrap');
    if (window.scrollY > this.offset) {
      progressWrap.classList.add('active-progress');
    } else {
      progressWrap.classList.remove('active-progress');
    }
  }

  updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.progress = (scrollTop / docHeight) * 100;
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
