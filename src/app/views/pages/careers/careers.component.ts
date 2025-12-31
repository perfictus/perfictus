import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  imports: [BreadcrumbComponent, NgbAccordionModule,RouterLink],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
activeAccordion: string = 'panel-0';

  onPanelShow(panelId: string) {
    this.activeAccordion = panelId;
  }
}
