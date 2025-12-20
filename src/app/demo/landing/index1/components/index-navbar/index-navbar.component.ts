import { Component, HostListener } from '@angular/core';
import { NavbarsComponent } from "../../../../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { SearchButtonComponent } from "../../../../../components/search-button/search-button.component";
import { SearchPopupComponent } from "../../../../../components/search-popup/search-popup.component";
import { LandingMobileMenuComponent } from "../../../../../components/landing-mobile-menu/landing-mobile-menu.component";

@Component({
  selector: 'app-index-navbar',
  imports: [NavbarsComponent, RouterLink, SearchButtonComponent, SearchPopupComponent, LandingMobileMenuComponent],
  templateUrl: './index-navbar.component.html',
  styles: ``
})
export class IndexNavbarComponent {
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
