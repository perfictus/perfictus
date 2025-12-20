import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index8-faq',
  imports: [NgbAccordionModule],
  templateUrl: './index8-faq.component.html',
  styles: ``
})
export class Index8FAQComponent {
  activePanel: string = 'panel-0';

  onPanelShown(panelId: string) {
    this.activePanel = panelId;
  }
}
