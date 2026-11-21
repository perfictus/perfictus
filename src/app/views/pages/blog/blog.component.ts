import { Component } from '@angular/core';
import { BLOG_POSTS } from '../../../data/blog';
import { BlogCardComponent } from './blog-card.component';

@Component({
  selector: 'app-blog',
  imports: [BlogCardComponent],
  template: `
    <section class="pf-section pf-blog pf-blog--top">
      <div class="container">
        <div class="pf-section-head is-center">
          <span class="pf-eyebrow">Perfictus Blog &middot; Insights</span>
          <h1 class="pf-title">Ideas &amp; Insights to <span class="pf-gradient-text">Grow Your Business Online</span></h1>
          <p class="pf-lead mx-auto">Practical guides on e-commerce, web development, SEO and digital growth, written by the Perfictus team.</p>
        </div>
        <div class="row g-4">
          @for (post of posts; track post.slug) {
          <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" [attr.data-aos-delay]="($index % 4) * 80">
            <app-blog-card [post]="post" [eager]="$index < 4" />
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
