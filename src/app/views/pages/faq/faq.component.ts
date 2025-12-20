import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  imports: [BreadcrumbComponent, NgbAccordionModule],
  templateUrl: './faq.component.html',
  styles: ``
})
export class FAQComponent {
  activePanel: string = 'panel-0';
  activeAccordion: string = 'panel-0';

  onPanelShown(panelId: string) {
    this.activePanel = panelId;
  }
   onPanelShow(panelId: string) {
    this.activeAccordion = panelId;
  }
}
