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
  activeApp: number | null = null;   // set when a mobile-app tab (e.g. Kuwait) is selected

  get project() {
    return this.projects[this.active];
  }

  select(index: number) {
    this.active = index;
    this.activeApp = null;
  }

  scrollToApp(index: number) {
    this.activeApp = index;
    document.getElementById('app-' + index)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
