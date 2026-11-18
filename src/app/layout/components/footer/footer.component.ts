import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT, NAV_LINKS } from '../../../data/site-content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  links = NAV_LINKS;
  contact = CONTACT;
  year = new Date().getFullYear();
}
