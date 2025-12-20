import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Service6blogComponent } from "./components/service6blog/service6blog.component";
import { Service6ctaComponent } from "./components/service6cta/service6cta.component";
import { Service6ContactAreaComponent } from "./components/service6-contact-area/service6-contact-area.component";
import { Service6analysisComponent } from "./components/service6analysis/service6analysis.component";
import { Service6serviceSectionComponent } from "./components/service6service-section/service6service-section.component";

@Component({
  selector: 'app-hrstaffing-agency',
  imports: [BreadcrumbComponent, Service6blogComponent, Service6ctaComponent, Service6ContactAreaComponent, Service6analysisComponent, Service6serviceSectionComponent],
  templateUrl: './hrstaffing-agency.component.html',
  styles: ``
})
export class HRStaffingAgencyComponent {

}
