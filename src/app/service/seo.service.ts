import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageSeo, SEO, SITE } from '../data/seo';

/**
 * Sets the title, description, canonical URL, robots and social-share tags for each page.
 * Runs during pre-rendering too, so the tags are baked into each page's HTML.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private doc = inject(DOCUMENT);

  init(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.apply(this.currentPageSeo()));
  }

  private currentPageSeo(): PageSeo {
    let r = this.route;
    while (r.firstChild) r = r.firstChild;
    return (r.snapshot.data as PageSeo)?.title ? (r.snapshot.data as PageSeo) : SEO.home;
  }

  private apply(page: PageSeo): void {
    const url = SITE.url + page.path;
    const image = page.image ?? SITE.image;

    this.title.setTitle(page.title);
    this.setName('description', page.description);
    this.setName('robots', page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    this.setProperty('og:type', page.type ?? 'website');
    this.setProperty('og:site_name', SITE.name);
    this.setProperty('og:locale', SITE.locale);
    this.setProperty('og:title', page.title);
    this.setProperty('og:description', page.description);
    this.setProperty('og:url', url);
    this.setProperty('og:image', image);
    this.setProperty('og:image:width', '1200');
    this.setProperty('og:image:height', '630');
    this.setProperty('og:image:alt', page.image ? page.title : 'Perfictus – Perfection Starts With Us');

    // X / Twitter
    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', page.title);
    this.setName('twitter:description', page.description);
    this.setName('twitter:image', image);

    if (page.published) this.setProperty('article:published_time', page.published);
    else this.meta.removeTag('property="article:published_time"');

    this.setCanonical(url);
    this.setPageSchema(page.schema);
  }

  // Page-specific JSON-LD (the site-wide Organization data stays in index.html)
  private setPageSchema(schema?: object) {
    let script = this.doc.getElementById('pf-page-schema');
    if (!schema) {
      script?.remove();
      return;
    }
    if (!script) {
      script = this.doc.createElement('script');
      script.id = 'pf-page-schema';
      script.setAttribute('type', 'application/ld+json');
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  private setName(name: string, content: string) {
    this.meta.updateTag({ name, content }, `name="${name}"`);
  }

  private setProperty(property: string, content: string) {
    this.meta.updateTag({ property, content }, `property="${property}"`);
  }

  private setCanonical(href: string) {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
