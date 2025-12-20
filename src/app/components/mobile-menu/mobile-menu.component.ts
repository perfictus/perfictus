import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule,ScrollToModule,RouterLink],
  templateUrl: './mobile-menu.component.html',
  styles: ``,
  providers:[ScrollToService]
})
export class MobileMenuComponent {
  @Input() isMenuOpen = false;
  @Output() closeMenuEvent = new EventEmitter<void>();
  activeLink: string = 'about'

  setActiveLink(link: string): void {
    this.activeLink = link
  }
  closeSidebar() {
    this.closeMenuEvent.emit();
  }
}
