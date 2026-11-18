import { Component } from '@angular/core';
import { SpotlightDirective } from '../../../../../directives/spotlight.directive';
import { CONTACT } from '../../../../../data/site-content';

@Component({
  selector: 'app-contact',
  imports: [SpotlightDirective],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  contact = CONTACT;
}
