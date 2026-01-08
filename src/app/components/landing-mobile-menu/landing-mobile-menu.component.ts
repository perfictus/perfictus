import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-landing-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-mobile-menu.component.html',
})
export class LandingMobileMenuComponent {

  @Input() isMenuOpen = false;
  @Output() closeMenuEvent = new EventEmitter<void>();

  constructor(private viewportScroller: ViewportScroller) {}

  // 🔥 Scroll to top + close menu
  onMenuClick() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.closeMenuEvent.emit();
  }

  menu: MenuItem[] = [
    { title: 'Home', link: '/index7' },
    { title: 'Services', link: '/service' },
    { title: 'Portfolio', link: '/portfolio' },
    { title: 'About Us', link: '/about' },
    { title: 'Careers', link: '/careers' }
  ];
}
