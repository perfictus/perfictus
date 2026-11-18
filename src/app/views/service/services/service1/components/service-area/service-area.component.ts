import { Component } from '@angular/core';
import { SpotlightDirective } from '../../../../../../directives/spotlight.directive';
import { TiltDirective } from '../../../../../../directives/tilt.directive';
import { PROBLEMS, SERVICES } from '../../../../../../data/site-content';

@Component({
  selector: 'app-service-area',
  imports: [SpotlightDirective, TiltDirective],
  templateUrl: './service-area.component.html',
  styles: ``
})
export class ServiceAreaComponent {
  services = SERVICES;
  problems = PROBLEMS;
}
