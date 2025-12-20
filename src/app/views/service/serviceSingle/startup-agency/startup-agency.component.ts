import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Service9blogComponent } from "./components/service9blog/service9blog.component";
import { Service9ctaComponent } from "./components/service9cta/service9cta.component";
import { Service9analysisComponent } from "./components/service9analysis/service9analysis.component";
import { Service9serviceSectionComponent } from "./components/service9service-section/service9service-section.component";
import { Service9ContactAreaComponent } from "./components/service9-contact-area/service9-contact-area.component";

@Component({
  selector: 'app-startup-agency',
  imports: [BreadcrumbComponent, Service9blogComponent, Service9ctaComponent, Service9analysisComponent, Service9serviceSectionComponent, Service9ContactAreaComponent],
  templateUrl: './startup-agency.component.html',
  styles: ``
})
export class StartupAgencyComponent {

}
