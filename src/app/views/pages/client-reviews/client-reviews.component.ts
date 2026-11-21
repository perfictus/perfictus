import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { GOOGLE_REVIEWS, REVIEWS } from '../../../data/reviews';

// Written reviews from the Perfictus Google Business Profile.
@Component({
  selector: 'app-client-reviews',
  imports: [BreadcrumbComponent, RouterLink],
  templateUrl: './client-reviews.component.html',
})
export class ClientReviewsComponent {
  google = GOOGLE_REVIEWS;
  reviews = REVIEWS;
  stars = [1, 2, 3, 4, 5];

  initials(name: string): string {
    return name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  }
}
