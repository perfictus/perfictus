import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-portfolio-detail',
  imports: [BreadcrumbComponent],
  templateUrl: './portfolio-detail.component.html',
  styles: ``
})
export class PortfolioDetailComponent {
  counterBox = [
    {
      number: 90,
      name: "Organic Traffic"
    },
    {
      number: 80,
      name: "Faster Page Load"
    },
    {
      number: 25,
      name: "Higher Engagement"
    },
    {
      number: 100,
      name: "Improved ROI"
    },
  ]
}
