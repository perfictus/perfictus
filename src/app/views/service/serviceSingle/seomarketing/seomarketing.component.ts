import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { SeoBlogComponent } from "./components/seo-blog/seo-blog.component";
import { CtaAreaComponent } from "./components/cta-area/cta-area.component";
import { AnalysisAreaComponent } from "./components/analysis-area/analysis-area.component";
import { ServiceSectionComponent } from "./components/service-section/service-section.component";
import { SeocontactComponent } from "./components/seocontact/seocontact.component";

@Component({
  selector: 'app-seomarketing',
  imports: [BreadcrumbComponent, SeoBlogComponent, CtaAreaComponent, AnalysisAreaComponent, ServiceSectionComponent, SeocontactComponent],
  templateUrl: './seomarketing.component.html',
  styles: ``
})
export class SEOMarketingComponent {

}
