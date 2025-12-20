import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  imports: [BreadcrumbComponent, NgbAccordionModule,RouterLink],
  templateUrl: './pricing.component.html',
  styles: ``
})
export class PricingComponent {
  activeAccordion: string = 'panel-0';

  onPanelShow(panelId: string) {
    this.activeAccordion = panelId;
  }
}
