import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Service8blogComponent } from "./components/service8blog/service8blog.component";
import { Service8ctaComponent } from "./components/service8cta/service8cta.component";
import { Service8analysisComponent } from "./components/service8analysis/service8analysis.component";
import { Service8serviceSectionComponent } from "./components/service8service-section/service8service-section.component";
import { Service8ContactAreaComponent } from "./components/service8-contact-area/service8-contact-area.component";

@Component({
  selector: 'app-real-estate',
  imports: [BreadcrumbComponent, Service8blogComponent, Service8ctaComponent, Service8analysisComponent, Service8serviceSectionComponent, Service8ContactAreaComponent],
  templateUrl: './real-estate.component.html',
  styles: ``
})
export class RealEstateComponent {

}
