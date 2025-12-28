import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index7-service',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './index7-service.component.html',
  styles: ``
})
export class Index7ServiceComponent {
scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
