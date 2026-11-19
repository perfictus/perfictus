import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Counts from 0 to the target the first time the element scrolls into view.
@Directive({
  selector: '[pfCountUp]',
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input('pfCountUp') target = 0;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() duration = 1800;

  private observer?: IntersectionObserver;

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    // Pre-rendered HTML (what search engines read) shows the real number
    if (!this.isBrowser) {
      this.render(this.target);
      return;
    }
    this.render(0);
    this.observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        this.observer?.disconnect();
        this.animate();
      }
    }, { threshold: 0.4 });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animate() {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.render(Math.round(this.target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  private render(value: number) {
    this.el.nativeElement.textContent = `${this.prefix}${value}${this.suffix}`;
  }
}
