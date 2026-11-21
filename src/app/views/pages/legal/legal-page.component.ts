import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { LEGAL_PAGES, LEGAL_UPDATED, LegalPage } from '../../../data/legal';
import { ViewBlock, toViewBlock } from '../blog/blog-utils';

// Privacy Policy, Cookie Policy, Terms of Use and Modern Slavery Statement (route data.slug picks the page).
@Component({
  selector: 'app-legal-page',
  imports: [BreadcrumbComponent, DatePipe],
  templateUrl: './legal-page.component.html',
})
export class LegalPageComponent {
  private route = inject(ActivatedRoute);

  page: LegalPage = LEGAL_PAGES.find((p) => p.slug === this.route.snapshot.data['slug']) ?? LEGAL_PAGES[0];
  blocks: ViewBlock[] = this.page.content.map(toViewBlock);
  updated = LEGAL_UPDATED;
}
