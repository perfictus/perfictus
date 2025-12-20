import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { Service4blogComponent } from "./components/service4blog/service4blog.component";
import { Service4ctaComponent } from "./components/service4cta/service4cta.component";
import { Service4analysisComponent } from "./components/service4analysis/service4analysis.component";
import { Service4serviceSectionComponent } from "./components/service4service-section/service4service-section.component";
import { Service4ContactComponent } from "./components/service4-contact/service4-contact.component";

@Component({
  selector: 'app-pay-per-click',
  imports: [BreadcrumbComponent, Service4blogComponent, Service4ctaComponent, Service4analysisComponent, Service4serviceSectionComponent, Service4ContactComponent],
  templateUrl: './pay-per-click.component.html',
  styles: ``
})
export class PayPerClickComponent {

}
