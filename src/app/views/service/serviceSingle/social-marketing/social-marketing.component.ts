import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { RouterLink } from '@angular/router';
import { GsapRevealDirective } from '../../../../directives/gsap-reveal.directive';
import { NgSelectComponent } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-social-marketing',
  imports: [
    BreadcrumbComponent,
    RouterLink,
    GsapRevealDirective,
    NgSelectComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './social-marketing.component.html',
  styles: ``,
})
export class SocialMarketingComponent {
  selectedOption = 'Select Option'

  options = [
    { id: 0, name: 'Select Option' },
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ]
}
