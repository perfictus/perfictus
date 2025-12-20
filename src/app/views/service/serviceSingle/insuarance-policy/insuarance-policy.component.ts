import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Service7blogComponent } from "./components/service7blog/service7blog.component";
import { Service7ctaComponent } from "./components/service7cta/service7cta.component";
import { Service7analysisComponent } from "./components/service7analysis/service7analysis.component";
import { Service7serviceSectionComponent } from "./components/service7service-section/service7service-section.component";
import { Service7ContactAreaComponent } from "./components/service7-contact-area/service7-contact-area.component";

@Component({
  selector: 'app-insuarance-policy',
  imports: [BreadcrumbComponent, Service7blogComponent, Service7ctaComponent, Service7analysisComponent, Service7serviceSectionComponent, Service7ContactAreaComponent],
  templateUrl: './insuarance-policy.component.html',
  styles: ``
})
export class InsuarancePolicyComponent {

}
