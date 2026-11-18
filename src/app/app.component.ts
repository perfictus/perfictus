import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { TitleService } from './service/title.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public el: ElementRef,
  ) {}
  private titleService = inject(TitleService);
  private router = inject(Router);

  isActive = false;

  progress = 0;

  @ViewChild('progressPath') progressPath!: ElementRef;

  offset = 50;
  duration = 550;
  ngOnInit() {

    this.titleService.init();

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
