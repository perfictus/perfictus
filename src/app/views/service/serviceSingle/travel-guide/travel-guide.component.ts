import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Service5blogComponent } from "./components/service5blog/service5blog.component";
import { Service5ctaComponent } from "./components/service5cta/service5cta.component";
import { Service5serviceSectionComponent } from "./components/service5service-section/service5service-section.component";
import { Service5ContactAreaComponent } from "./components/service5-contact-area/service5-contact-area.component";

@Component({
  selector: 'app-travel-guide',
  imports: [BreadcrumbComponent, Service5blogComponent, Service5ctaComponent, Service5serviceSectionComponent, Service5ContactAreaComponent],
  templateUrl: './travel-guide.component.html',
  styles: ``
})
export class TravelGuideComponent {

}
