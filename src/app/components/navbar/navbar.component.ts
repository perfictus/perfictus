import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface MenuItem {
  title: string;
  link: string;
  subMenu?: MenuItem[]; // Optional submenu
  nestedMenu?: MenuItem[]; // Optional nested menu
}
@Component({
  selector: 'app-navbars',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarsComponent {
  @Input() btnColor: string = ''
  @Input() Arrow: boolean = true
  isSearchOpened = false;
  isSticky: boolean = false;

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
  

  menu: MenuItem[] = [
  {
    title: "Services",
    link: "/service"
  },
  {
    title: "Portfolio",
    link: "/portfolio"
  },
  {
    title: "About us",
    link: "/about"
  },
  {
    title: "Careers",
    link: "/careers"
  }
];

}
