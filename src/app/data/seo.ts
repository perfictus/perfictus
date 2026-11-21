import { BLOG_AUTHOR, BlogPost } from './blog';

// Search-engine text for each page: <title>, meta description and the canonical path.
// Shown in Google results and in link previews (WhatsApp, LinkedIn, Facebook, X).
// Keep titles under ~60 characters and descriptions under ~160.

export const SITE = {
  name: 'Perfictus',
  url: 'https://perfictus.com',
  image: 'https://perfictus.com/assets/img/og/perfictus-og.jpg',
  locale: 'en_US',
};

export interface PageSeo {
  title: string;
  description: string;
  path: string;        // canonical path ('/' for home)
  noindex?: boolean;
  image?: string;      // share image (defaults to SITE.image)
  type?: 'website' | 'article';
  published?: string;  // ISO date for articles
  schema?: object;     // extra structured data (JSON-LD) for this page only
}

export const SEO = {
  home: {
    title: 'Shopify Development Agency | Shopify Experts – Perfictus',
    description:
      'Perfictus is a Shopify development agency building high-converting Shopify & Shopify Plus stores, custom themes, apps and migrations for brands in Kuwait, GCC, India, UK & USA.',
    path: '/',
  },
  service: {
    title: 'Shopify Development, SEO & E-commerce Services | Perfictus',
    description:
      'Shopify development and Shopify SEO first, plus remote developers, digital marketing, marketplace setup, graphic design and video editing for e-commerce brands.',
    path: '/service',
  },
  portfolio: {
    title: 'Shopify Store Portfolio & Mobile Apps | Perfictus',
    description:
      'Shopify stores built by Perfictus for brands in India, the UK and the USA, including Tingle Tots, Boba Tea and The Mom Chic, plus the Yamama Asian Mart app in Kuwait.',
    path: '/portfolio',
  },
  about: {
    title: 'About Perfictus | Shopify Partner & E-commerce Agency',
    description:
      'Perfictus is a Shopify Partner and e-commerce agency helping brands in Kuwait, the GCC, India, the UK and the USA grow with Shopify, SEO and performance marketing.',
    path: '/about',
  },
  contact: {
    title: 'Hire Shopify Developers – Free 30-Min Consultation | Perfictus',
    description:
      'Planning a Shopify store, migration or redesign? Book a free 30-minute consultation, email info@perfictus.com or call +965-60360675 / +91-7708621961.',
    path: '/contact',
  },
  blog: {
    title: 'Shopify Blog – E-commerce Guides, Updates & Tips | Perfictus',
    description:
      'Shopify and e-commerce guides from Perfictus: Shopify Editions, agentic commerce, BFCM, Shopify SEO, speed, Functions, Horizon themes and selling in the GCC.',
    path: '/blog/',
  },
  careers: {
    title: 'Careers – Remote Shopify Developer & Design Jobs | Perfictus',
    description:
      'Join Perfictus. We are hiring a remote Shopify App Developer and a Graphic Designer. We see perfection, not just degrees.',
    path: '/careers',
  },
  notFound: {
    title: 'Page Not Found | Perfictus',
    description: 'The page you are looking for does not exist. Explore Perfictus Shopify services, portfolio and contact details.',
    path: '/',
    noindex: true,
  },
} satisfies Record<string, PageSeo>;


// SEO + Article structured data for one blog post.
export function blogPostSeo(post: BlogPost): PageSeo {
  const url = `${SITE.url}/blog/${post.slug}`;
  const image = `${SITE.url}/assets/img/blog/${post.slug}.jpg`;
  return {
    title: `${post.seoTitle} | Perfictus`,
    description: post.description,
    path: `/blog/${post.slug}`,
    image,
    type: 'article',
    published: post.date,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': url + '#article',
        mainEntityOfPage: url,
        headline: post.title,
        description: post.description,
        image: [image],
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        inLanguage: 'en',
        author: { '@type': 'Organization', name: BLOG_AUTHOR, url: SITE.url + '/' },
        publisher: { '@id': SITE.url + '/#organization' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE.url + '/blog/' },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}
