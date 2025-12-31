import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  link: string;
  isOpen?: boolean;
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

  closeSidebar() {
    this.closeMenuEvent.emit();
  }

  // ✅ Correct routes
  menu: MenuItem[] = [
    {
      title: 'Home',
      link: '/index7'
    },
    {
      title: 'Services',
      link: '/service'
    },
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Careers',
      link: '/careers'
    }
  ];
}
