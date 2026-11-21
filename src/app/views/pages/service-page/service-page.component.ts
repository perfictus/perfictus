import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { SpotlightDirective } from '../../../directives/spotlight.directive';
import { APPS, PROJECTS } from '../../../data/site-content';
import { SERVICE_PAGES, ServicePage } from '../../../data/service-pages';

// One template for every dedicated service page; the route's data.slug picks the content.
@Component({
  selector: 'app-service-page',
  imports: [BreadcrumbComponent, RouterLink, SpotlightDirective],
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent {
  private route = inject(ActivatedRoute);

  page: ServicePage = SERVICE_PAGES.find((p) => p.slug === this.route.snapshot.data['slug']) ?? SERVICE_PAGES[0];
  projects = PROJECTS;
  apps = APPS;
  openIndex: number | null = 0;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
