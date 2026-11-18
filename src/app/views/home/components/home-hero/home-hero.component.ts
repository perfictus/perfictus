import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TiltDirective } from '../../../../directives/tilt.directive';
import { SERVICES, TAGLINE } from '../../../../data/site-content';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink, TiltDirective],
  templateUrl: './home-hero.component.html',
  styles: ``
})
export class HomeHeroComponent {
  tagline = TAGLINE;
  titleWords = ['Perfection', 'Starts', 'With', 'Us'];
  services = SERVICES;
  chips = [
    { icon: 'fa-brands fa-shopify', label: 'Shopify Partner' },
    { icon: 'fa-solid fa-magnifying-glass-chart', label: 'SEO' },
    { icon: 'fa-solid fa-store', label: 'Marketplaces' },
    { icon: 'fa-solid fa-laptop-code', label: 'Remote Developers' },
  ];
}
