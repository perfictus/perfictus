import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { BLOG_POSTS } from '../../../data/blog';
import { LEGAL_PAGES } from '../../../data/legal';
import { SERVICE_PAGES } from '../../../data/service-pages';

// Human-readable sitemap: every page on the site, grouped.
@Component({
  selector: 'app-sitemap-page',
  imports: [BreadcrumbComponent, RouterLink],
  templateUrl: './sitemap-page.component.html',
})
export class SitemapPageComponent {
  groups = [
    {
      title: 'Main Pages',
      icon: 'fa-solid fa-house',
      links: [
        { title: 'Home', link: '/' },
        { title: 'Services', link: '/service' },
        { title: 'Portfolio', link: '/portfolio' },
        { title: 'About Us', link: '/about' },
        { title: 'Blog', link: '/blog' },
        { title: 'Careers', link: '/careers' },
        { title: 'Contact Us', link: '/contact' },
        { title: 'Client Reviews', link: '/client-reviews' },
      ],
    },
    {
      title: 'Services',
      icon: 'fa-solid fa-layer-group',
      links: SERVICE_PAGES.map((p) => ({ title: p.name, link: '/' + p.slug })),
    },
    {
      title: 'Blog Articles',
      icon: 'fa-solid fa-newspaper',
      links: BLOG_POSTS.map((p) => ({ title: p.title, link: '/blog/' + p.slug })),
    },
    {
      title: 'Legal',
      icon: 'fa-solid fa-scale-balanced',
      links: [...LEGAL_PAGES.map((p) => ({ title: p.name, link: '/' + p.slug })), { title: 'Sitemap', link: '/sitemap' }],
    },
  ];
}
