// Content for the dedicated service pages (/shopify-development, /mobile-app-development).
// These pages are not in the menus; they are listed in the sitemap and structured data
// so Google can show them as sitelinks under "Perfictus".

export interface ServicePage {
  slug: string;              // URL path without the leading slash
  name: string;              // service name (breadcrumb, schema)
  eyebrow: string;
  title: string;             // H1 first part
  highlight: string;         // H1 gradient part
  lead: string;
  intro: { title: string; highlight: string; paragraphs: string[]; points: string[] };
  offers: { icon: string; title: string; desc: string }[];
  process: { title: string; desc: string }[];
  work: 'projects' | 'apps';
  faqs: { q: string; a: string }[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'shopify-development',
    name: 'Shopify Development',
    eyebrow: 'Shopify Partner',
    title: 'Shopify',
    highlight: 'Development Agency',
    lead: 'High-converting Shopify and Shopify Plus stores, custom themes, apps and migrations for brands in Kuwait, the GCC, India, the UK and the USA.',
    intro: {
      title: 'Shopify Stores Built to',
      highlight: 'Sell More',
      paragraphs: [
        'Perfictus is a Shopify Partner agency. We design, build and grow Shopify stores that load fast, rank in Google and turn visitors into customers.',
        'Whether you are launching your first store, moving from WooCommerce, Magento or another platform, or scaling on Shopify Plus, one team handles design, development, SEO and launch.',
      ],
      points: [
        'Custom Shopify themes on Online Store 2.0',
        'Shopify Plus, checkout and B2B setup',
        'Migrations without losing SEO',
        'Speed, Core Web Vitals and Shopify SEO',
      ],
    },
    offers: [
      { icon: 'fa-brands fa-shopify', title: 'Shopify Store Setup', desc: 'Complete store setup: theme, products, collections, payments, shipping, taxes, domains and apps, ready to sell from day one.' },
      { icon: 'fa-solid fa-palette', title: 'Custom Theme Development', desc: 'Pixel-perfect custom themes in Liquid with Online Store 2.0 sections and blocks, so your team can edit every page without code.' },
      { icon: 'fa-solid fa-crown', title: 'Shopify Plus', desc: 'Checkout extensibility, Shopify Functions, B2B, multiple markets and automation with Shopify Flow for high-volume brands.' },
      { icon: 'fa-solid fa-right-left', title: 'Shopify Migration', desc: 'Move from WooCommerce, Magento, BigCommerce, Wix or custom platforms with products, customers, orders and 301 redirects intact.' },
      { icon: 'fa-solid fa-puzzle-piece', title: 'Custom Shopify Apps', desc: 'Private and public Shopify apps, Admin and Storefront GraphQL API integrations, ERP, 3PL and marketplace connections.' },
      { icon: 'fa-solid fa-gauge-high', title: 'Shopify SEO & Speed', desc: 'Technical Shopify SEO, structured data, Core Web Vitals and conversion rate optimisation to grow organic revenue.' },
    ],
    process: [
      { title: 'Discover', desc: 'We learn your products, customers and goals, then plan the store structure, features and apps.' },
      { title: 'Design', desc: 'Mobile-first designs focused on trust, product discovery and a smooth path to checkout.' },
      { title: 'Develop', desc: 'Clean Liquid code, fast pages, integrations and full testing across devices and markets.' },
      { title: 'Launch & Grow', desc: 'Go live with SEO and analytics in place, then keep improving with data, CRO and marketing.' },
    ],
    work: 'projects',
    faqs: [
      { q: 'How long does it take to build a Shopify store?', a: 'A store using a customised theme usually takes 2–4 weeks. A fully custom design with integrations or a migration usually takes 4–8 weeks, depending on the number of products and features.' },
      { q: 'Can you migrate my existing store to Shopify without losing SEO?', a: 'Yes. We move products, customers and orders, keep your URL structure where possible, add 301 redirects for every changed URL and check rankings after launch.' },
      { q: 'Do you work with Shopify Plus?', a: 'Yes. We build and support Shopify Plus stores, including checkout extensibility, Shopify Functions, B2B, Shopify Markets and Shopify Flow automation.' },
      { q: 'Do you build Shopify stores for Kuwait and the GCC?', a: 'Yes. We set up Arabic and English storefronts, local currencies, GCC payment gateways and shipping, as well as stores for India, the UK and the USA.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    eyebrow: 'iOS & Android Apps',
    title: 'Mobile App',
    highlight: 'Development',
    lead: 'Fast, beautiful iOS and Android apps for e-commerce, delivery and service businesses, designed, built and published to the App Store and Google Play.',
    intro: {
      title: 'Apps Your Customers',
      highlight: 'Love to Use',
      paragraphs: [
        'Perfictus builds mobile apps that make ordering, booking and shopping effortless. From the first screen design to App Store and Google Play approval, one team handles everything.',
        'Our apps connect to your store, payment gateway and delivery operations, so customers can browse, pay and track orders in a few taps.',
      ],
      points: [
        'iOS and Android apps from one team',
        'Shopping, grocery and delivery apps',
        'Secure payments and real-time tracking',
        'App Store & Google Play publishing',
      ],
    },
    offers: [
      { icon: 'fa-solid fa-mobile-screen-button', title: 'iOS & Android Apps', desc: 'Native-quality apps for iPhone and Android with smooth animations, offline-friendly screens and fast load times.' },
      { icon: 'fa-solid fa-cart-shopping', title: 'E-commerce Apps', desc: 'Shopping apps connected to your Shopify store or product catalogue, with carts, wishlists, offers and push notifications.' },
      { icon: 'fa-solid fa-truck-fast', title: 'Grocery & Delivery Apps', desc: 'Ordering, delivery slots, live order tracking and driver workflows for grocery, food and retail businesses.' },
      { icon: 'fa-solid fa-credit-card', title: 'Payments Integration', desc: 'Secure checkout with gateways such as MyFatoorah, KNET, Apple Pay, Google Pay, Stripe and Razorpay.' },
      { icon: 'fa-solid fa-pen-ruler', title: 'App UI/UX Design', desc: 'User-friendly app designs and prototypes, tested on real devices before a single line of code is written.' },
      { icon: 'fa-solid fa-rocket', title: 'Launch & Support', desc: 'App Store and Google Play submission, analytics, crash monitoring, updates and new features after launch.' },
    ],
    process: [
      { title: 'Plan', desc: 'We define the app features, user journeys and integrations with your store, payments and delivery.' },
      { title: 'Design', desc: 'Clickable app designs for every screen, refined with your feedback before development starts.' },
      { title: 'Build & Test', desc: 'We develop the app and admin tools, then test on real iOS and Android devices.' },
      { title: 'Publish & Grow', desc: 'We publish to the App Store and Google Play, then keep improving the app with updates.' },
    ],
    work: 'apps',
    faqs: [
      { q: 'Do you build apps for both iOS and Android?', a: 'Yes. We design and build apps for iPhone and Android and publish them to the Apple App Store and Google Play.' },
      { q: 'Can my mobile app connect to my Shopify store?', a: 'Yes. We can connect your app to Shopify so products, prices, stock and orders stay in sync between your website and your app.' },
      { q: 'How long does it take to build a mobile app?', a: 'Most shopping or delivery apps take 8–14 weeks from design to store approval, depending on features and integrations.' },
      { q: 'Do you build apps for businesses in Kuwait?', a: 'Yes. We built the Yamama Asian Mart grocery app for Kuwait with MyFatoorah payments and real-time order tracking, and we work with clients across the GCC and India.' },
    ],
  },
];
