import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-service',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './index-service.component.html',
  styles: ``
})
export class IndexServiceComponent {

}
