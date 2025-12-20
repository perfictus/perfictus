import { Component, HostListener } from '@angular/core';
import { NavbarsComponent } from "../../../../../components/navbar/navbar.component";
import { SearchPopupComponent } from "../../../../../components/search-popup/search-popup.component";
import { SearchButtonComponent } from "../../../../../components/search-button/search-button.component";
import { LandingMobileMenuComponent } from "../../../../../components/landing-mobile-menu/landing-mobile-menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index2navbar',
  imports: [NavbarsComponent, SearchPopupComponent, SearchButtonComponent, LandingMobileMenuComponent,RouterLink],
  templateUrl: './index2navbar.component.html',
  styleUrl: './index2navbar.component.scss'
})
export class Index2navbarComponent {
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
