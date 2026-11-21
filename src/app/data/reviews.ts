// Client reviews copied from the Perfictus Google Business Profile (21 Nov 2026).
// Only reviews with written text are shown on the Client Reviews page.
// To refresh: open Google Maps → Perfictus → Reviews, and copy new written reviews here.

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  count: 16,
  // Opens the Perfictus profile on Google Maps (reviews and "Write a review").
  url: 'https://maps.google.com/?cid=10618220548378173705',
};

export interface Review {
  name: string;
  stars: number;
  text: string;
  project?: string;    // optional: what we did for them
}

export const REVIEWS: Review[] = [
  {
    name: 'TingleTots',
    stars: 5,
    project: 'Shopify e-commerce website',
    text: 'I had a great experience working with Perfictus for developing my eCommerce website, Tingle Tots. The team delivered a beautifully designed website that perfectly matches my expectations.\n\nWhat impressed me the most was their affordable pricing compared to other companies, without compromising on quality. They also completed the project in a very short span of time, which was really helpful.\n\nOverall, I’m extremely satisfied with their service and would highly recommend Perfictus to anyone looking for professional and cost-effective website development.',
  },
  {
    name: 'Aswin Bright',
    stars: 5,
    text: 'Great team to work with, especially for startups. They explained everything clearly and helped us launch our store without complications.',
  },
  {
    name: 'Sujithra Abinash',
    stars: 5,
    text: 'Good service and a friendly team...overall, a Great experience.....',
  },
  {
    name: 'Deevi Karthik',
    stars: 5,
    text: 'Awesome and good team work\nNice experience.... 💯',
  },
  {
    name: 'John Knox',
    stars: 5,
    text: 'Great job.. good customer service..🫱🏻‍🫲🏼🤍',
  },
  {
    name: 'Geetha Vrayee',
    stars: 5,
    text: 'Great teamwork',
  },
];
