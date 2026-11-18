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

  private lockedScrollY = 0;

  toggleMenu() {
    this.isMenuOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isMenuOpen = true;
    // Freeze the page behind the menu. iOS Safari ignores overflow:hidden on body,
    // so the body is pinned in place and the scroll position restored on close.
    this.lockedScrollY = window.scrollY;
    const body = document.body.style;
    body.position = 'fixed';
    body.top = `-${this.lockedScrollY}px`;
    body.left = '0';
    body.right = '0';
    body.width = '100%';
    body.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  closeMenu(restoreScroll = true) {
    if (!this.isMenuOpen) return;
    this.isMenuOpen = false;
    const body = document.body.style;
    body.position = body.top = body.left = body.right = body.width = body.overflow = '';
    document.documentElement.style.overflow = '';
    if (restoreScroll) window.scrollTo(0, this.lockedScrollY);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
