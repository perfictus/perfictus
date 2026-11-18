// All website text lives here so pages stay in sync and copy can be edited in one place.

export const CONTACT = {
  email: 'info@perfictus.com',
  careersEmail: 'talenthub@perfictus.com',
  phones: [
    { label: '+965-60360675', href: 'tel:+96560360675', flag: 'assets/img/flags/kuwait.svg', country: 'Kuwait' },
    { label: '+91-7708621961', href: 'tel:+917708621961', flag: 'assets/img/flags/india.svg', country: 'India' },
  ],
  whatsapp: 'https://wa.me/7708621961',
  icons: {
    email: 'assets/img/social/email.svg',
    whatsapp: 'assets/img/social/whatsapp.svg',
  },
  socials: [
    { name: 'Instagram', icon: 'fa-brands fa-instagram', logo: 'assets/img/social/instagram.svg', href: 'https://www.instagram.com/perfictus_solutions' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', logo: 'assets/img/social/linkedin.svg', href: 'https://www.linkedin.com/company/perfictus/' },
  ],
};

// "Book a free 30-min consultation" button on the Contact page.
// The button opens Google Calendar with a 30-min "Free Consultation" event already filled in,
// with guestEmail invited, so the booking lands in that Gmail inbox and calendar.
// Optional: set bookingUrl to a Google Calendar appointment-schedule link
// (https://calendar.app.google/xxxx) to use that booking page instead.
export const CONSULTATION = {
  bookingUrl: '',
  guestEmail: 'vijaijesudoss@gmail.com',
  timeZone: 'Asia/Kolkata',
  title: 'Free 30-Min Consultation – Perfictus',
  details:
    'Free 30-minute consultation with the Perfictus team.\n\n' +
    'Available every day (including weekends), 10:00 AM – 5:30 PM IST.\n' +
    'Please pick a time within these hours and save the event to send your request.',
  startHour: 10,
  startMinute: 0,
  endHour: 17,
  endMinute: 30,
  durationMinutes: 30,
  duration: '30 min',
  hours: '10:00 AM – 5:30 PM',
  days: 'Every day, including weekends',
};

export const NAV_LINKS = [
  { title: 'Home', link: '/home' },
  { title: 'Services', link: '/service' },
  { title: 'Portfolio', link: '/portfolio' },
  { title: 'About Us', link: '/about' },
  { title: 'Careers', link: '/careers' },
];

export const TAGLINE =
  'We don’t just build websites; we engineer high-performance e-commerce engines, delivering scalable solutions as a Shopify Partner';

export const SERVICES = [
  {
    title: 'Shopify Development',
    icon: 'fa-brands fa-shopify',
    desc: 'Certified expertise in Shopify Core (Liquid, Theme Customization) and advanced Storefront/GraphQL APIs. We build custom, scalable stores designed for high conversion.',
  },
  {
    title: 'Remote Developer Outsourcing',
    icon: 'fa-solid fa-laptop-code',
    desc: 'Access our elite pool of developers proficient in Node.js, React.js, and modern tech stacks. We integrate seamlessly into your team to accelerate your product roadmap.',
  },
  {
    title: 'Graphic Designing',
    icon: 'fa-solid fa-pen-nib',
    desc: 'Brand-aligned aesthetics that capture attention. From Polaris UI implementation for apps to full-scale brand identity design, we ensure your visual presence is flawless.',
  },
  {
    title: 'Professional Video Editing',
    icon: 'fa-solid fa-clapperboard',
    desc: 'High-impact video content tailored for social media, product showcases, and digital ads. We turn raw footage into a compelling brand story.',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    icon: 'fa-solid fa-magnifying-glass-chart',
    desc: 'Technical SEO audits, keyword optimization, and data-driven strategies to ensure your Shopify store ranks where your customers are searching.',
  },
  {
    title: 'Digital Marketing',
    icon: 'fa-solid fa-bullhorn',
    desc: "Full-funnel marketing strategies including social media management and performance marketing. We don't just get clicks; we drive ROI.",
  },
  {
    title: 'Aggregator & Marketplace Expertise',
    icon: 'fa-solid fa-store',
    desc: 'We provide end-to-end aggregator setup, onboarding, and negotiation support across GCC, India & worldwide e-commerce markets.',
  },
  {
    title: 'Interior Designing',
    icon: 'fa-solid fa-couch',
    desc: 'We provide end to end interior design planning, execution and styling support across residential, commercial & global spaces.',
  },
];

export const PROBLEMS = [
  { title: 'Startup challenges', desc: 'From ideation to execution, we help new businesses take flight seamlessly' },
  { title: 'Poor Performance', desc: 'Suboptimal site speed, mobile UX, and conversion rates impacting revenue' },
  { title: 'High Hiring Costs', desc: 'Expense and complexity of building full-time in-house technical teams' },
  { title: 'Complex Integrations', desc: 'Challenging ERP, 3PL, and marketplace integrations without proper expertise' },
  { title: 'Manual Inefficiencies', desc: 'Lack of automation causing operational bottlenecks and scaling challenge' },
  { title: 'Vendor Fragmentation', desc: 'Dependence on multiple vendors with no single point of accountability' },
];

export const WHY_CHOOSE = [
  { title: 'Measured Growth', image: 'assets/img/apps/Measured Growth.png' },
  { title: 'E-com Expertise', image: 'assets/img/apps/Shopify Expertise.png' },
  { title: 'Fast Execution', image: 'assets/img/apps/Fast Execution.png' },
  { title: 'True Partnership', image: 'assets/img/apps/True Partnership.png' },
  { title: 'Revenue Optimization', image: 'assets/img/apps/Revenue Optimization.png' },
  { title: 'Remote Developers', image: 'assets/img/apps/Remote Developers.png' },
];

export const TESTIMONIALS = [
  { text: 'Perfection is the Perfictus signature!', image: 'assets/img/testimonial/tes1-smoll-image1.png' },
  { text: 'Perfictus sets the benchmark for excellence!', image: 'assets/img/testimonial/tes1-smoll-image2.png' },
  { text: 'Their execution is precise and dependable!', image: 'assets/img/testimonial/tes1-smoll-image3.png' },
  { text: 'Perfictus transformed our digital operations!', image: 'assets/img/testimonial/tes1-smoll-image4.png' },
  { text: 'A partner we trust for long-term growth!', image: 'assets/img/testimonial/tes1-smoll-image5.png' },
];

export const STATS = [
  { value: 114, prefix: '', suffix: '+', label: 'Projects Completed' },
  { value: 3, prefix: '$', suffix: 'M', label: 'Revenue Generated' },
  { value: 57, prefix: '', suffix: '+', label: 'Satisfied Clients' },
];

export const EDGE_POINTS = ['Expertise You Can Trust', 'Results-Driven Approach', 'Tailored Solutions'];

export const PROJECTS = [
  {
    region: 'India',
    icon: 'assets/img/flags/india.svg',
    name: 'Tingle Tots',
    desc: 'Tingle Tots is an online store offering fun toys, diecast cars, RC vehicles, and kids’ gifts, sharing joy with every purchase.',
    image: 'assets/img/portfolio/tingletots.jpg',
    url: 'https://tingletots.com/',
  },
  {
    region: 'UK',
    icon: 'assets/img/flags/uk.svg',
    name: 'Boba Tea',
    desc: 'Boba Tea is an e-commerce-enabled beverage brand offering freshly made bubble tea and drinks for online ordering.',
    image: 'assets/img/portfolio/bobatea.jpg',
    url: 'https://www.bobateacompany.co.uk/',
  },
  {
    region: 'USA',
    icon: 'assets/img/flags/usa.svg',
    name: 'The Mom Chic',
    desc: 'The Mom Chic is a United States fashion e-commerce store built on Shopify.',
    // The store is not public yet (password page), so a "Launching soon" panel is shown.
    // Drop a screenshot at assets/img/portfolio/themomchic.jpg and set it here once it launches.
    image: '',
    url: 'https://themomchic.com/',
  },
];

// Mobile apps we've built (shown in their own section on the Portfolio page).
// Leave a store link empty to hide that button.
export const APPS = [
  {
    name: 'Yamama Asian Mart',
    region: 'Kuwait',
    flag: 'assets/img/flags/kuwait.svg',
    icon: 'assets/img/portfolio/yamama/icon.jpg',
    category: 'Grocery Delivery App',
    platforms: ['iOS', 'Android'],
    desc: 'Yamama Asian Mart is a grocery shopping app for customers in Kuwait. Browse a wide selection of Asian groceries, fresh products, beverages, and daily essentials, then order and track deliveries in a few taps.',
    features: [
      'Wide range of Asian groceries & daily essentials',
      'Secure checkout with MyFatoorah payments',
      'Real-time order tracking',
      'Fast delivery across Kuwait',
    ],
    screens: [
      'assets/img/portfolio/yamama/welcome.jpg',
      'assets/img/portfolio/yamama/home.jpg',
      'assets/img/portfolio/yamama/products.jpg',
    ],
    appStore: 'https://apps.apple.com/in/app/yamama-asian-mart/id6797280780',
    playStore: 'https://play.google.com/store/apps/details?id=yamama.asian.mart',
  },
];

export const POSITIONS = [
  {
    title: 'Shopify App Developer',
    responsibilities: [
      'Develop custom Shopify apps (public and private)',
      'Work with Shopify APIs (Admin API, Storefront API, Webhooks)',
      'Build and maintain frontend interfaces using modern JavaScript frameworks',
      'Integrate third-party services and payment gateways',
      'Debug, optimize, and maintain existing Shopify applications',
      'Ensure app security, performance, and scalability',
      'Provide technical support and improvements based on business needs',
    ],
    skills: [
      'Strong experience with Shopify App Development',
      'Proficiency in JavaScript, TypeScript, Node.js',
      'Experience with React, Remix, or Next.js',
      'Familiarity with REST & GraphQL APIs',
      'Knowledge of Shopify Polaris and App Bridge (preferred)',
      'Experience with databases (MySQL, PostgreSQL, or MongoDB)',
      'Good problem-solving and communication skills',
    ],
  },
  {
    title: 'Graphic Designer',
    responsibilities: [
      'Design creative graphics for websites, social media, and ads',
      'Create banners, posters, brochures, and promotional creatives',
      'Maintain brand consistency across all designs',
      'Collaborate with marketing and development teams',
      'Edit and optimize images for web and mobile platforms',
      'Work on basic UI elements for websites and apps',
    ],
    skills: [
      'Proficiency in Photoshop, Illustrator, Figma, or Canva',
      'Strong understanding of typography, color theory, and layouts',
      'Experience with social media and digital marketing creatives',
      'Basic UI/UX knowledge is a plus',
      'Creative mindset with attention to detail',
    ],
  },
];
