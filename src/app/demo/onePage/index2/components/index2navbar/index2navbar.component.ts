import { Component, HostListener } from '@angular/core';
import { SearchPopupComponent } from "../../../../../components/search-popup/search-popup.component";
import { SearchButtonComponent } from "../../../../../components/search-button/search-button.component";
import { SingleNavbarComponent } from "../../../../../components/single-navbar/single-navbar.component";
import { MobileMenuComponent } from "../../../../../components/mobile-menu/mobile-menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index2navbar',
  imports: [SearchPopupComponent, SearchButtonComponent, SingleNavbarComponent, MobileMenuComponent,RouterLink],
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
