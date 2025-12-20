import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-area',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './about-area.component.html',
  styles: ``
})
export class AboutAreaComponent {

}
