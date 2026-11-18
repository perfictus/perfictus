import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpotlightDirective } from '../../../../directives/spotlight.directive';
import { SERVICES } from '../../../../data/site-content';

@Component({
  selector: 'app-home-service',
  imports: [RouterLink, SpotlightDirective],
  templateUrl: './home-service.component.html',
  styles: ``
})
export class HomeServiceComponent {
  services = SERVICES;

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
