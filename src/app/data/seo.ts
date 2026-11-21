import { BLOG_AUTHOR, BlogPost } from './blog';
import { ServicePage } from './service-pages';
import { LegalPage } from './legal';

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
  crumb?: string;      // breadcrumb name (Home › crumb) added to the page's structured data
}

export const SEO = {
  home: {
    title: 'Shopify Development Agency | Shopify Experts – Perfictus',
    description:
      'Perfictus is a Shopify development agency building high-converting Shopify & Shopify Plus stores, custom themes, apps and migrations for brands in Kuwait, GCC, India, UK & USA.',
    path: '/',
  },
  service: {
    crumb: 'Services',
    title: 'Services – Shopify Development, SEO & E-commerce | Perfictus',
    description:
      'Shopify development and Shopify SEO first, plus remote developers, digital marketing, marketplace setup, graphic design and video editing for e-commerce brands.',
    path: '/service',
  },
  portfolio: {
    crumb: 'Portfolio',
    title: 'Portfolio – Shopify Stores & Mobile Apps | Perfictus',
    description:
      'Shopify stores built by Perfictus for brands in India, the UK and the USA, including Tingle Tots, Boba Tea and The Mom Chic, plus the Yamama Asian Mart app in Kuwait.',
    path: '/portfolio',
  },
  about: {
    crumb: 'About Us',
    title: 'About Perfictus | Shopify Partner & E-commerce Agency',
    description:
      'Perfictus is a Shopify Partner and e-commerce agency helping brands in Kuwait, the GCC, India, the UK and the USA grow with Shopify, SEO and performance marketing.',
    path: '/about',
  },
  contact: {
    crumb: 'Contact Us',
    title: 'Contact Us – Free 30-Min Shopify Consultation | Perfictus',
    description:
      'Planning a Shopify store, migration or redesign? Book a free 30-minute consultation, email info@perfictus.com or call +91-7708621961 / +965-60360675.',
    path: '/contact',
  },
  blog: {
    crumb: 'Blog',
    title: 'Blog – Shopify & E-commerce Guides | Perfictus',
    description:
      'Shopify and e-commerce guides from Perfictus: Shopify Editions, agentic commerce, BFCM, Shopify SEO, speed, Functions, Horizon themes and selling in the GCC.',
    path: '/blog/',
  },
  careers: {
    crumb: 'Careers',
    title: 'Careers – Remote Mobile App Developer & Design Jobs | Perfictus',
    description:
      'Join Perfictus. We are hiring a remote Mobile App Developer (iOS & Android, cross-platform) and a Graphic Designer. We see perfection, not just degrees.',
    path: '/careers',
  },
  shopify: {
    title: 'Shopify Development Services – Shopify Experts | Perfictus',
    description:
      'Shopify development agency for custom Shopify & Shopify Plus stores, themes, apps, migrations and Shopify SEO. Serving Kuwait, the GCC, India, the UK and the USA.',
    path: '/shopify-development',
  },
  mobileApp: {
    title: 'Mobile App Development – iOS & Android Apps | Perfictus',
    description:
      'iOS and Android app development for e-commerce, grocery and delivery businesses. Secure payments, order tracking and App Store & Google Play publishing.',
    path: '/mobile-app-development',
  },
  sitemap: {
    crumb: 'Sitemap',
    title: 'Sitemap – All Pages | Perfictus',
    description: 'All pages on perfictus.com: Shopify and mobile app development services, portfolio, blog articles, careers, contact and legal pages.',
    path: '/sitemap',
  },
  reviews: {
    crumb: 'Client Reviews',
    title: 'Client Reviews – Rated 5.0 on Google | Perfictus',
    description: 'Read what clients say about Perfictus. Rated 5.0 from 16 Google reviews for Shopify store development, e-commerce websites and customer service.',
    path: '/client-reviews',
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


// SEO + Service, Breadcrumb and FAQ structured data for a dedicated service page.
export function servicePageSeo(page: ServicePage, seo: PageSeo): PageSeo {
  const url = SITE.url + seo.path;
  return {
    ...seo,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': url + '#service',
        name: page.name,
        serviceType: page.name,
        description: seo.description,
        url,
        provider: { '@id': SITE.url + '/#organization' },
        areaServed: ['Kuwait', 'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Bahrain', 'Oman', 'India', 'United Kingdom', 'United States'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: page.name,
          itemListElement: page.offers.map((o) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o.title, description: o.desc } })),
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: SITE.url + '/service' },
          { '@type': 'ListItem', position: 3, name: page.name, item: url },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };
}


// SEO for a legal page (Privacy, Cookies, Terms, Modern Slavery).
export function legalPageSeo(page: LegalPage): PageSeo {
  return { title: page.seoTitle, description: page.description, path: '/' + page.slug, crumb: page.name };
}
