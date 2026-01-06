export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const articles: Article[] = [
  {
    slug: 'about-us',
    title: 'About Us',
    date: '29/12/2025',
    excerpt: 'Learn about Projekto, an independent online service designed to help teams and businesses estimate software projects more clearly and efficiently.'
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    date: '29/12/2025',
    excerpt: 'Projekto respects user privacy and is committed to protecting personal and project-related data.'
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    date: '29/12/2025',
    excerpt: 'By using Projekto, you agree to the following terms regarding the use of our estimation and planning tool.'
  },
  {
    slug: 'contact-us',
    title: 'Contact Us',
    date: '29/12/2025',
    excerpt: 'If you have questions about Projekto, the website, or how the service works, you can reach us using the contact information below.'
  },
  {
    slug: 'project-cost-calculation',
    title: 'How to Calculate Project Cost: A Complete Guide',
    date: '01/01/2026',
    excerpt: 'Learn how to calculate project cost realistically, what factors influence software development cost, and how modern estimation tools help teams plan with confidence.'
  },
  {
    slug: 'software-development-cost',
    title: 'Software Development Cost Explained: What You Really Pay For',
    date: '01/01/2026',
    excerpt: 'Understand software development cost in detail. Learn what drives pricing, from team roles and features to testing, tech stack, and support.'
  },
  {
    slug: 'cost-for-application-development',
    title: 'Cost for Application Development: Web vs Mobile Explained',
    date: '01/01/2026',
    excerpt: 'Compare the cost for application development across web and mobile apps. Learn what drives pricing, timelines, and feature complexity.'
  },
  {
    slug: 'estimate-software-development-cost',
    title: 'Estimate Software Development Cost Accurately: Step-by-Step Guide',
    date: '01/01/2026',
    excerpt: 'Learn how to estimate software development cost accurately. Step-by-step process covering scope, roles, features, tech stack, QA, and buffers.'
  },
  {
    slug: 'app-cost-calculator',
    title: 'App Cost Calculator: How Accurate Are Online Tools?',
    date: '01/01/2026',
    excerpt: 'Learn how app cost calculators work, how accurate they are, and how to use them correctly to estimate your app development budget.'
  },
  {
    slug: 'website-cost-calculator',
    title: 'Website Cost Calculator: What Influences Website Pricing the Most',
    date: '01/01/2026',
    excerpt: 'Learn what influences website pricing the most and how a website cost calculator estimates design, development, testing, and maintenance costs.'
  },
  {
    slug: 'saas',
    title: 'Software Development Cost for SaaS Projects (2026 Guide)',
    date: '01/01/2026',
    excerpt: 'Understand SaaS software development cost, pricing ranges, key cost drivers, and how to estimate your SaaS project budget accurately.'
  }
];

