import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';
import { NgSelectComponent } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-index5contact',
  imports: [GsapRevealDirective, NgSelectComponent, FormsModule],
  templateUrl: './index5contact.component.html',
  styles: ``,
})
export class Index5contactComponent {
  selectedOption = 'Select Option'

  options = [
    { id: 0, name: 'Select Option' },
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ]
}
