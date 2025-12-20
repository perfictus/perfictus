import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [BreadcrumbComponent,NgbNavModule,RouterLink],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {

}
