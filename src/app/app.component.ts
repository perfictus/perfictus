import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  isActive = false;

  progress = 0;

  @ViewChild('progressPath') progressPath!: ElementRef;

  offset = 50;
  duration = 550;
  ngOnInit() {

    this.titleService.init();
    AOS.init();
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
