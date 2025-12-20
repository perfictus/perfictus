import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index10-faq',
  imports: [NgbAccordionModule],
  templateUrl: './index10-faq.component.html',
  styles: ``
})
export class Index10FaqComponent {
  activePanel: string = 'panel-0';

  onPanelShown(panelId: string) {
    this.activePanel = panelId;
  }
}
