import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../../../directives/gsap-reveal.directive';
import { NgSelectComponent } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-seocontact',
  imports: [GsapRevealDirective, NgSelectComponent, FormsModule],
  templateUrl: './seocontact.component.html',
  styles: ``,
})
export class SeocontactComponent {
  selectedOption = 'Select Option'

  options = [
    { id: 0, name: 'Select Option' },
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ]
}
