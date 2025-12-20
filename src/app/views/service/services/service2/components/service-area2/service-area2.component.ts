import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-area2',
  imports: [CommonModule, GsapRevealDirective, RouterLink],
  templateUrl: './service-area2.component.html',
  styles: ``
})
export class ServiceArea2Component {
}