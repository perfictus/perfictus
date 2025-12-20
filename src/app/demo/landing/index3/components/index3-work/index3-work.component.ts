import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';

@Component({
  selector: 'app-index3-work',
  imports: [NgbAccordionModule,GsapRevealDirective],
  templateUrl: './index3-work.component.html',
  styles: ``
})
export class Index3WorkComponent {
  activePanel: string = 'panel-0';

  onPanelShown(panelId: string) {
    this.activePanel = panelId;
  }
}
