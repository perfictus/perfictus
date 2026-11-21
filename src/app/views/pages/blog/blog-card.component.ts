import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../../data/blog';
import { blogImage, readMinutes } from './blog-utils';

@Component({
  selector: 'app-blog-card',
  imports: [RouterLink, DatePipe],
  template: `
    @let p = post();
    <article class="pf-blog-card">
      <a [routerLink]="'/blog/' + p.slug" class="pf-blog-thumb">
        <img [src]="image(p.slug)" [alt]="p.title" width="1200" height="630"
          [attr.loading]="eager() ? null : 'lazy'">
      </a>
      <div class="pf-blog-card-body">
        <span class="pf-blog-cat">{{ p.category }}</span>
        <h3><a [routerLink]="'/blog/' + p.slug">{{ p.title }}</a></h3>
        <div class="pf-blog-meta">
          <span><i class="fa-regular fa-calendar"></i> {{ p.date | date: 'MMM d, y' }}</span>
          <span><i class="fa-regular fa-clock"></i> {{ minutes(p) }} min read</span>
        </div>
      </div>
    </article>
  `,
})
export class BlogCardComponent {
  post = input.required<BlogPost>();
  eager = input(false);
  image = blogImage;
  minutes = readMinutes;
}
