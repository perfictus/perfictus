import { Component, HostListener } from '@angular/core';
import { SearchButtonComponent } from "../../../../../components/search-button/search-button.component";
import { SearchPopupComponent } from "../../../../../components/search-popup/search-popup.component";
import { SingleNavbarComponent } from "../../../../../components/single-navbar/single-navbar.component";
import { MobileMenuComponent } from "../../../../../components/mobile-menu/mobile-menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index6-navbar',
  imports: [SearchButtonComponent, SearchPopupComponent, SingleNavbarComponent, MobileMenuComponent,RouterLink],
  templateUrl: './index6-navbar.component.html',
  styles: ``
})
export class Index6NavbarComponent {
  isSearchOpened = false;
  isSticky: boolean = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 100;
  }
  handleSearchOpened() {
    this.isSearchOpened = true; 
  }

  handleClosePopup() {
    this.isSearchOpened = false; 
  }
}
