import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-single-navbar',
  imports: [ScrollToModule,CommonModule],
  templateUrl: './single-navbar.component.html',
  styles: ``,
  providers:[ScrollToService]
})
export class SingleNavbarComponent {
  activeLink: string = 'about'

  setActiveLink(link: string): void {
    this.activeLink = link
  }
}
