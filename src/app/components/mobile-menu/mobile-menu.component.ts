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
  @Output() closeMenuEvent = new EventEmitter<void>();

  links = [...NAV_LINKS, { title: 'Contact Us', link: '/contact' }];
  contact = CONTACT;

  close() {
    this.closeMenuEvent.emit();
  }
}
