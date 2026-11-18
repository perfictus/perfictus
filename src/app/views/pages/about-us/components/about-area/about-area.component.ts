import { Component } from '@angular/core';
import { EDGE_POINTS } from '../../../../../data/site-content';

@Component({
  selector: 'app-about-area',
  imports: [],
  templateUrl: './about-area.component.html',
  styles: ``
})
export class AboutAreaComponent {
  points = EDGE_POINTS;
}
