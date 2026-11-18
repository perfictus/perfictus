import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { TiltDirective } from '../../../directives/tilt.directive';
import { APPS, PROJECTS } from '../../../data/site-content';

@Component({
  selector: 'app-portfolio',
  imports: [BreadcrumbComponent, TiltDirective],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {
  projects = PROJECTS;
  apps = APPS;
  active = 0;

  get project() {
    return this.projects[this.active];
  }

  select(index: number) {
    this.active = index;
  }
}
