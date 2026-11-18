import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileMenuComponent } from '../../../components/mobile-menu/mobile-menu.component';
import { NAV_LINKS } from '../../../data/site-content';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MobileMenuComponent],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  links = NAV_LINKS;
  isSticky = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 40;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
