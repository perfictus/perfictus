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
}

export const SEO = {
  home: {
    title: 'Perfictus | Shopify Development & E-commerce Agency',
    description:
      'Perfictus engineers high-performance Shopify stores and mobile apps, and offers remote developers, SEO and digital marketing for brands in the GCC, India and worldwide.',
    path: '/',
  },
  service: {
    title: 'Services – Shopify, SEO & Digital Marketing | Perfictus',
    description:
      'Shopify development, remote developer outsourcing, graphic design, video editing, SEO, digital marketing, marketplace setup and interior design from Perfictus.',
    path: '/service',
  },
  portfolio: {
    title: 'Portfolio – Shopify Stores & Mobile Apps | Perfictus',
    description:
      'Shopify stores and mobile apps built by Perfictus for brands in India, the UK, the USA and Kuwait, including Tingle Tots, Boba Tea and Yamama Asian Mart.',
    path: '/portfolio',
  },
  about: {
    title: 'About Us | Perfictus – Perfection Starts With Us',
    description:
      'Perfictus is a strategic digital and e-commerce partner helping businesses grow through technology, performance marketing and impactful digital connections.',
    path: '/about',
  },
  contact: {
    title: 'Contact Us – Free 30-Min Consultation | Perfictus',
    description:
      'Talk to Perfictus about your Shopify or e-commerce project. Email info@perfictus.com, call +965-60360675 or +91-7708621961, or book a free 30-minute consultation.',
    path: '/contact',
  },
  careers: {
    title: 'Careers – Remote Shopify & Design Jobs | Perfictus',
    description:
      'Join Perfictus. We are hiring a remote Shopify App Developer and a Graphic Designer. We see perfection, not just degrees.',
    path: '/careers',
  },
  notFound: {
    title: 'Page Not Found | Perfictus',
    description: 'The page you are looking for does not exist. Explore Perfictus services, portfolio and contact details.',
    path: '/',
    noindex: true,
  },
} satisfies Record<string, PageSeo>;
