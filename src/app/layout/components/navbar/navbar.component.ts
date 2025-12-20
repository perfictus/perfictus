import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarsComponent } from '../../../components/navbar/navbar.component';
import { LandingMobileMenuComponent } from "../../../components/landing-mobile-menu/landing-mobile-menu.component";


@Component({
  selector: 'app-navbar',
  imports: [NavbarsComponent, RouterLink, LandingMobileMenuComponent],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

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