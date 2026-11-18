import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TiltDirective } from '../../../../directives/tilt.directive';
import { EDGE_POINTS } from '../../../../data/site-content';

@Component({
  selector: 'app-home-about',
  imports: [RouterLink, TiltDirective],
  templateUrl: './home-about.component.html',
  styles: ``
})
export class HomeAboutComponent {
  points = EDGE_POINTS;
}
