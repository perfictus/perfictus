import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../../../directives/gsap-reveal.directive';
import { NgSelectComponent } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-service4-contact',
  imports: [GsapRevealDirective, NgSelectComponent, FormsModule],
  templateUrl: './service4-contact.component.html',
  styles: ``,
})
export class Service4ContactComponent {
  selectedOption = 'Select Option'

  options = [
    { id: 0, name: 'Select Option' },
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ]
}
