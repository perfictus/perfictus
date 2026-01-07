import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../../../../components/breadcrumb/breadcrumb.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-area',
  imports: [BreadcrumbComponent, NgbAccordionModule,RouterLink],
  templateUrl: './service-area.component.html',
  styles: ``
})
export class ServiceAreaComponent {
  scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
activeAccordion: string = 'panel-0';

  onPanelShow(panelId: string) {
    this.activeAccordion = panelId;
  }
}
