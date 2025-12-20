import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MagnificPopupDirective } from '../../../../../directives/popup.directive';

@Component({
  selector: 'app-index10-hero',
  imports: [RouterLink,MagnificPopupDirective],
  templateUrl: './index10-hero.component.html',
  styles: ``
})
export class Index10HeroComponent {

}
