import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Service3detailComponent } from "./components/service3detail/service3detail.component";
import { Service3ctaComponent } from "./components/service3cta/service3cta.component";
import { Service3analysisaAreaComponent } from "./components/service3analysisa-area/service3analysisa-area.component";
import { Service3SectionAreaComponent } from "./components/service3-section-area/service3-section-area.component";
import { Service3ContactAreaComponent } from "./components/service3-contact-area/service3-contact-area.component";

@Component({
  selector: 'app-content-marketing',
  imports: [BreadcrumbComponent, Service3detailComponent, Service3ctaComponent, Service3analysisaAreaComponent, Service3SectionAreaComponent, Service3ContactAreaComponent],
  templateUrl: './content-marketing.component.html',
  styles: ``
})
export class ContentMarketingComponent {

}
