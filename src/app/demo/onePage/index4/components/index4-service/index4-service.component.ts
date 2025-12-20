import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index4-service',
  imports: [NgbNavModule,GsapRevealDirective,RouterLink],
  templateUrl: './index4-service.component.html',
  styles: ``
})
export class Index4ServiceComponent {

}
