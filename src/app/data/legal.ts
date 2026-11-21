import { BlogBlock } from './blog';

// Legal pages linked from the footer. Text uses the same blocks as blog posts
// ({ h2 }, { p }, { ul }, …; wrap words in **double asterisks** for bold).
// Update LEGAL_UPDATED whenever the wording changes.

export const LEGAL_UPDATED = '2026-11-21';

export const COMPANY = {
  name: 'Perfictus',
  address: 'St George Street, Azhagappapuram, Kanniyakumari, Tamil Nadu 629702, India',
  email: 'info@perfictus.com',
  phones: '+91-7708621961 (India) and +965-60360675 (Kuwait)',
};

export interface LegalPage {
  slug: string;
  title: string;      // H1 first part
  highlight: string;  // H1 gradient part
  name: string;       // full page name (breadcrumb, footer)
  seoTitle: string;
  description: string;
  intro: string;
  content: BlogBlock[];
}

const contactBlock: BlogBlock[] = [
  { h2: 'Contact us' },
  { p: `If you have any questions about this page, please contact ${COMPANY.name}:` },
  { ul: [`**Email:** ${COMPANY.email}`, `**Phone:** ${COMPANY.phones}`, `**Address:** ${COMPANY.address}`] },
];

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy',
    highlight: 'Policy',
    name: 'Privacy Policy',
    seoTitle: 'Privacy Policy | Perfictus',
    description: 'How Perfictus collects, uses and protects personal information shared through perfictus.com, our contact form, email, phone and WhatsApp.',
    intro: `This Privacy Policy explains how ${COMPANY.name} ("we", "us", "our") collects, uses and protects personal information when you visit perfictus.com or contact us about our services. We collect only what we need to reply to you and to deliver our work, and we never sell your data.`,
    content: [
      { h2: 'Information we collect' },
      { h3: 'Information you give us' },
      { p: 'When you fill in our contact form, email us, call us, message us on WhatsApp or book a consultation, we receive the details you choose to share, such as:' },
      { ul: ['Your name and email address', 'Your mobile number and country code', 'The service you are interested in and your message', 'Company or project details you share during a conversation'] },
      { h3: 'Information collected automatically' },
      { p: 'Our website is a static site. It **does not use analytics, advertising or tracking cookies**. Like every website, the servers that deliver our pages (GitHub Pages) and our font provider (Google Fonts) receive basic technical data such as your IP address, browser type and the page requested, which they use to deliver and secure their services.' },
      { h2: 'How we use your information' },
      { ul: ['To reply to your enquiry and give you a quote or consultation', 'To plan, deliver and support projects you hire us for', 'To send invoices and manage our business relationship', 'To keep our website and communications secure and to prevent spam', 'To meet our legal, tax and accounting obligations'] },
      { p: 'We do not use your information for automated decision-making, and we only send marketing messages if you have asked to receive them.' },
      { h2: 'How the contact form works' },
      { p: 'When you submit the contact form, your details are sent securely to a Google Apps Script service owned by Perfictus, which forwards them by email (Gmail) to our team at info@perfictus.com. Your enquiry is therefore stored in our Google Workspace / Gmail account. The form includes a hidden spam-protection field and does not set cookies.' },
      { h2: 'Sharing your information' },
      { p: 'We never sell or rent your personal information. We share it only with:' },
      { ul: ['**Service providers** that help us run our business, such as Google (email, calendar and forms), WhatsApp (messaging) and GitHub (website hosting)', '**Platforms you ask us to work on**, such as Shopify, app stores or payment gateways, when needed to deliver your project', '**Authorities**, when required by law or to protect our rights'] },
      { h2: 'International transfers' },
      { p: 'We work with clients in India, Kuwait, the GCC, the United Kingdom and the United States, and our service providers may process data in other countries. Where data is transferred, we rely on the safeguards offered by those providers.' },
      { h2: 'How long we keep your information' },
      { p: 'We keep enquiries for up to 24 months so we can follow up on your request, and project and billing records for as long as the law requires. You can ask us to delete your enquiry at any time.' },
      { h2: 'Your rights' },
      { p: 'Depending on where you live (for example under India’s Digital Personal Data Protection Act 2023, the UK GDPR or the EU GDPR), you may have the right to:' },
      { ul: ['Access the personal information we hold about you', 'Correct inaccurate or incomplete information', 'Ask us to delete your information', 'Withdraw consent or object to certain uses', 'Raise a complaint with your local data protection authority'] },
      { p: `To use any of these rights, email **${COMPANY.email}**. We will reply within 30 days.` },
      { h2: 'Security' },
      { p: 'Our website is served over HTTPS, and we limit access to your information to the people who need it to work on your enquiry or project. No method of transmission or storage is completely secure, but we take reasonable steps to protect your data.' },
      { h2: 'Third-party links' },
      { p: 'Our website links to other sites, such as our clients’ stores, app stores, Instagram, LinkedIn and WhatsApp. Their privacy practices are their own, so please read their policies.' },
      { h2: 'Children' },
      { p: 'Our services are for businesses and are not directed at children under 18. We do not knowingly collect information from children.' },
      { h2: 'Changes to this policy' },
      { p: 'We may update this policy from time to time. The date at the top of this page shows when it was last changed.' },
      ...contactBlock,
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie',
    highlight: 'Policy',
    name: 'Cookie Policy',
    seoTitle: 'Cookie Policy | Perfictus',
    description: 'Perfictus.com does not use tracking or advertising cookies. Learn which third-party services may store data in your browser and how to control cookies.',
    intro: 'This Cookie Policy explains how perfictus.com uses cookies and similar technologies. In short: our website does not set any tracking, analytics or advertising cookies.',
    content: [
      { h2: 'What are cookies?' },
      { p: 'Cookies are small text files that a website stores in your browser. They can remember your preferences, keep you signed in or measure how a site is used. Similar technologies include local storage and tracking pixels.' },
      { h2: 'Cookies we use' },
      { p: '**perfictus.com does not set any cookies of its own.** We do not use Google Analytics, advertising pixels, remarketing tags or any other tracking technology, so we do not show a cookie consent banner.' },
      { h2: 'Third-party services' },
      { p: 'Some features rely on third-party services. These services may receive technical data such as your IP address, and may set their own cookies when you choose to use them:' },
      { ul: ['**Google Fonts** delivers the typefaces used on our pages', '**Google Apps Script** receives the contact form when you press Submit', '**Google Calendar** opens when you book a free consultation', '**WhatsApp, Instagram and LinkedIn** open when you click their buttons', '**Apple App Store and Google Play** open when you click an app store link'] },
      { p: 'These cookies are controlled by the third party, not by us. Please read the cookie and privacy policies of Google, Meta (WhatsApp and Instagram), LinkedIn and Apple for details.' },
      { h2: 'Managing cookies' },
      { p: 'You can block or delete cookies at any time in your browser settings. Because our own website does not rely on cookies, blocking them will not stop any part of perfictus.com from working.' },
      { ul: ['**Chrome:** Settings → Privacy and security → Third-party cookies', '**Safari:** Settings → Privacy → Prevent cross-site tracking', '**Firefox:** Settings → Privacy & Security → Enhanced Tracking Protection', '**Edge:** Settings → Cookies and site permissions'] },
      { h2: 'Changes to this policy' },
      { p: 'If we ever add analytics or other cookies, we will update this page and ask for your consent where the law requires it.' },
      ...contactBlock,
    ],
  },
  {
    slug: 'terms-of-use',
    title: 'Terms of',
    highlight: 'Use',
    name: 'Terms of Use',
    seoTitle: 'Terms of Use | Perfictus',
    description: 'The terms that apply when you use perfictus.com, including intellectual property, acceptable use, project agreements, liability and governing law.',
    intro: `These Terms of Use apply to your use of perfictus.com (the "website"), operated by ${COMPANY.name}. By using the website you agree to these terms. If you do not agree, please do not use the website.`,
    content: [
      { h2: 'About the website' },
      { p: `${COMPANY.name} provides Shopify development, e-commerce, mobile app, design, SEO and digital marketing services. The website gives general information about our services, our work and our blog.` },
      { h2: 'Our services and projects' },
      { p: 'Information on the website is not an offer or a contract. Every project is governed by a separate proposal, quotation or agreement that sets out the scope, timeline, fees and payment terms. If that agreement conflicts with these terms, the agreement applies.' },
      { h2: 'Intellectual property' },
      { p: `The website, including its text, design, graphics, logos, blog articles and code, belongs to ${COMPANY.name} or our licensors and is protected by copyright and trademark law. You may view and share pages for personal or internal business use, but you may not copy, republish or sell our content without our written permission.` },
      { p: 'Client names, logos, screenshots and app images in our portfolio belong to their owners and are shown only to illustrate work we have delivered. Shopify is a trademark of Shopify Inc. Apple, App Store, Google Play and other names are trademarks of their respective owners.' },
      { h2: 'Acceptable use' },
      { p: 'When using the website you agree not to:' },
      { ul: ['Send spam, false information or harmful content through our contact form', 'Try to gain unauthorised access to the website or its systems', 'Interfere with the website’s security or performance, including with bots or scrapers', 'Use the website for any unlawful purpose'] },
      { h2: 'Blog and general information' },
      { p: 'Our blog articles and guides are for general information only. They are not legal, financial or tax advice, and platform features, prices and policies (for example Shopify’s) can change. Please check the latest information or contact us before making business decisions.' },
      { h2: 'Third-party links' },
      { p: 'The website links to third-party websites, such as client stores, app stores and social networks. We are not responsible for their content, availability or privacy practices.' },
      { h2: 'Disclaimer' },
      { p: 'We work hard to keep the website accurate and available, but it is provided "as is" without warranties of any kind. We do not guarantee that it will always be error-free or uninterrupted.' },
      { h2: 'Limitation of liability' },
      { p: `To the fullest extent permitted by law, ${COMPANY.name} is not liable for any indirect, incidental or consequential loss arising from your use of the website. Nothing in these terms limits liability that cannot be limited by law.` },
      { h2: 'Privacy' },
      { p: 'Our Privacy Policy and Cookie Policy explain how we handle personal information and cookies.' },
      { h2: 'Governing law' },
      { p: 'These terms are governed by the laws of India. Any dispute relating to the website will be subject to the exclusive jurisdiction of the courts of Tamil Nadu, India.' },
      { h2: 'Changes to these terms' },
      { p: 'We may update these terms from time to time. The date at the top of this page shows when they were last changed. Continuing to use the website means you accept the updated terms.' },
      ...contactBlock,
    ],
  },
  {
    slug: 'modern-slavery-statement',
    title: 'Modern Slavery',
    highlight: 'Statement',
    name: 'Modern Slavery Statement',
    seoTitle: 'Modern Slavery Statement | Perfictus',
    description: 'Perfictus’ commitment to preventing modern slavery, forced labour and human trafficking in our business and supply chain.',
    intro: `${COMPANY.name} is committed to preventing modern slavery, forced labour, child labour and human trafficking in our business and in our supply chain. We publish this statement voluntarily, in the spirit of the UK Modern Slavery Act 2015 and similar laws, because we work with clients in the UK, the USA, the GCC and India.`,
    content: [
      { h2: 'Our business' },
      { p: `${COMPANY.name} is a digital and e-commerce agency based in India, serving clients in Kuwait, the GCC, India, the United Kingdom and the United States. We provide Shopify development, mobile app development, SEO, digital marketing, design, video editing and remote developer services.` },
      { h2: 'Our supply chain' },
      { p: 'Our supply chain is short and low risk. It mainly consists of:' },
      { ul: ['Our own team and remote professionals (developers, designers and editors)', 'Software and cloud providers such as Shopify, Google, GitHub, Apple and app development tools', 'Office, equipment and professional service suppliers'] },
      { h2: 'Our policies' },
      { ul: ['**Fair employment:** everyone who works with us does so freely, with written terms, agreed working hours and fair pay paid on time', '**No forced or child labour:** we do not use forced, bonded or child labour, and we do not hold identity documents or charge recruitment fees', '**Equal opportunity:** as our careers page says, we hire on talent and skills, and we do not discriminate', '**Speaking up:** anyone can raise concerns confidentially without fear of retaliation'] },
      { h2: 'Due diligence and risk' },
      { p: 'Because most of our work is digital and our suppliers are established technology companies, we consider the risk of modern slavery in our operations to be low. We still:' },
      { ul: ['Choose reputable suppliers and partners', 'Expect our suppliers to follow laws on employment, wages and human rights', 'Review any concern that is reported to us and take action, including ending a relationship if needed'] },
      { h2: 'Training and awareness' },
      { p: 'Our leadership is responsible for this statement. We make sure the people who hire team members and choose suppliers understand the signs of modern slavery and know how to report a concern.' },
      { h2: 'Reporting a concern' },
      { p: `If you have a concern about modern slavery connected to ${COMPANY.name}, please email **${COMPANY.email}**. Every report is treated confidentially.` },
      { p: 'We review this statement every year. It has been approved by the management of Perfictus.' },
    ],
  },
];

// Links in the footer's bottom bar (right side on desktop).
export const FOOTER_LEGAL_LINKS = [
  { title: 'Privacy Policy', link: '/privacy-policy' },
  { title: 'Cookie Policy', link: '/cookie-policy' },
  { title: 'Sitemap', link: '/sitemap' },
  { title: 'Terms of Use', link: '/terms-of-use' },
  { title: 'Slavery Statement', link: '/modern-slavery-statement' },
  { title: 'Client Reviews', link: '/client-reviews' },
];
