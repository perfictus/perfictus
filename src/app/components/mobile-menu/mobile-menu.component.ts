import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CONTACT, NAV_LINKS } from '../../data/site-content';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.component.html',
  styles: ``
})
export class MobileMenuComponent {
  @Input() isMenuOpen = false;
  // emits true when closing because a page link was tapped
  @Output() closeMenuEvent = new EventEmitter<boolean>();
  instant = false;

  links = [...NAV_LINKS, { title: 'Contact Us', link: '/contact' }];
  contact = CONTACT;

  close() {
    this.closeMenuEvent.emit(false);
  }

  // A page link was tapped: hide the menu instantly (no fade over the new page)
  navigate() {
    this.instant = true;
    this.closeMenuEvent.emit(true);
    setTimeout(() => (this.instant = false), 50);
  }
}
