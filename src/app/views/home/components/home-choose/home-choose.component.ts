import { Component } from '@angular/core';
import { TESTIMONIALS, WHY_CHOOSE } from '../../../../data/site-content';

@Component({
  selector: 'app-home-choose',
  imports: [],
  templateUrl: './home-choose.component.html',
  styles: ``
})
export class HomeChooseComponent {
  features = WHY_CHOOSE;
  testimonials = TESTIMONIALS;
}
