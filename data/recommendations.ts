import { FrontendFramework, BackendStack, Database } from '@/types/calculator';

// Recommended technology stacks
export interface TechStackRecommendation {
  id: string;
  name: string;
  description: string;
  bestFor: string[];
  frontend: FrontendFramework;
  backend: BackendStack;
  database: Database;
  pros: string[];
  cons: string[];
}

export const RECOMMENDED_STACKS: TechStackRecommendation[] = [
  {
    id: 'modern-js',
    name: 'Modern JavaScript Stack',
    description: 'React + Node.js + PostgreSQL',
    bestFor: ['Startups', 'MVPs', 'SaaS products'],
    frontend: 'react',
    backend: 'nodejs',
    database: 'postgresql',
    pros: [
      'Single language (JavaScript) for full stack',
      'Large developer community',
      'Fast development',
      'Great for real-time apps',
    ],
    cons: [
      'Can be resource-intensive',
      'Requires good architecture planning',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Stack',
    description: 'Angular + Java + PostgreSQL',
    bestFor: ['Large enterprises', 'Complex systems', 'Long-term projects'],
    frontend: 'angular',
    backend: 'java',
    database: 'postgresql',
    pros: [
      'Highly scalable',
      'Strong typing throughout',
      'Enterprise-grade security',
      'Extensive tooling',
    ],
    cons: [
      'Steeper learning curve',
      'Slower initial development',
      'Higher costs',
    ],
  },
  {
    id: 'rapid-prototype',
    name: 'Rapid Prototyping Stack',
    description: 'React + Python + MongoDB',
    bestFor: ['Prototypes', 'Data-heavy apps', 'ML integration'],
    frontend: 'react',
    backend: 'python',
    database: 'mongodb',
    pros: [
      'Very fast development',
      'Great for data science integration',
      'Flexible data structure',
      'Easy to learn',
    ],
    cons: [
      'Less structure than SQL',
      'May require refactoring for scale',
    ],
  },
  {
    id: 'modern-performance',
    name: 'Modern Performance Stack',
    description: 'Svelte + Go + PostgreSQL',
    bestFor: ['High-performance apps', 'Real-time systems', 'Efficiency-focused'],
    frontend: 'svelte',
    backend: 'go',
    database: 'postgresql',
    pros: [
      'Excellent performance',
      'Small bundle sizes',
      'Low resource usage',
      'Fast execution',
    ],
    cons: [
      'Smaller community',
      'Fewer ready-made solutions',
      'Requires more custom code',
    ],
  },
  {
    id: 'php-classic',
    name: 'Classic Web Stack',
    description: 'Vue + PHP + MySQL',
    bestFor: ['WordPress-like sites', 'Traditional web apps', 'Budget projects'],
    frontend: 'vue',
    backend: 'php',
    database: 'mysql',
    pros: [
      'Lower hosting costs',
      'Wide hosting availability',
      'Mature ecosystem',
      'Easy deployment',
    ],
    cons: [
      'Perceived as "older" tech',
      'Less modern features',
    ],
  },
  {
    id: 'serverless',
    name: 'Serverless Stack',
    description: 'React + Node.js + Firebase',
    bestFor: ['Mobile apps', 'Small teams', 'Quick launches'],
    frontend: 'react',
    backend: 'nodejs',
    database: 'firebase',
    pros: [
      'No server management',
      'Auto-scaling',
      'Built-in authentication',
      'Real-time by default',
    ],
    cons: [
      'Vendor lock-in',
      'Can be expensive at scale',
      'Less control',
    ],
  },
];

// Technology compatibility matrix
export const TECH_COMPATIBILITY = {
  frontend: {
    react: {
      bestWith: ['nodejs', 'python', 'go'],
      goodWith: ['php', 'java', 'dotnet'],
      notes: 'Most popular, works well with any backend',
    },
    vue: {
      bestWith: ['nodejs', 'php', 'python'],
      goodWith: ['go', 'java'],
      notes: 'Great for incremental adoption',
    },
    angular: {
      bestWith: ['java', 'dotnet', 'nodejs'],
      goodWith: ['python', 'go'],
      notes: 'Best for large enterprise applications',
    },
    svelte: {
      bestWith: ['nodejs', 'go', 'python'],
      goodWith: ['php'],
      notes: 'Great performance, smaller community',
    },
  },
  backend: {
    nodejs: {
      bestWith: ['mongodb', 'postgresql', 'firebase'],
      goodWith: ['mysql'],
      notes: 'Fast development, good for real-time',
    },
    python: {
      bestWith: ['postgresql', 'mongodb'],
      goodWith: ['mysql'],
      notes: 'Great for data processing and ML',
    },
    php: {
      bestWith: ['mysql', 'postgresql'],
      goodWith: ['mongodb'],
      notes: 'Mature, great hosting options',
    },
    java: {
      bestWith: ['postgresql', 'mysql'],
      goodWith: ['mongodb'],
      notes: 'Enterprise-grade, very scalable',
    },
    dotnet: {
      bestWith: ['postgresql', 'mysql'],
      goodWith: ['mongodb'],
      notes: 'Microsoft ecosystem, great performance',
    },
    go: {
      bestWith: ['postgresql', 'mongodb'],
      goodWith: ['mysql'],
      notes: 'Excellent performance, modern',
    },
  },
};

// Project type recommendations
export interface ProjectTypeRecommendation {
  type: string;
  name: string;
  description: string;
  recommendedStack: string; // ID from RECOMMENDED_STACKS
  estimatedComplexity: 'simple' | 'medium' | 'complex';
  estimatedTimeline: string;
  keyFeatures: string[];
}

export const PROJECT_TYPE_RECOMMENDATIONS: ProjectTypeRecommendation[] = [
  {
    type: 'landing',
    name: 'Landing Page / Marketing Site',
    description: 'Simple website to showcase product or service',
    recommendedStack: 'modern-js',
    estimatedComplexity: 'simple',
    estimatedTimeline: '2-4 weeks',
    keyFeatures: ['Responsive design', 'Contact form', 'SEO optimization'],
  },
  {
    type: 'saas',
    name: 'SaaS Application',
    description: 'Subscription-based web application',
    recommendedStack: 'modern-js',
    estimatedComplexity: 'complex',
    estimatedTimeline: '3-6 months',
    keyFeatures: ['User authentication', 'Subscriptions', 'Dashboard', 'Admin panel'],
  },
  {
    type: 'ecommerce',
    name: 'E-commerce Store',
    description: 'Online store with products and checkout',
    recommendedStack: 'modern-js',
    estimatedComplexity: 'complex',
    estimatedTimeline: '3-5 months',
    keyFeatures: ['Product catalog', 'Shopping cart', 'Payment integration', 'Order management'],
  },
  {
    type: 'mobile',
    name: 'Mobile Application',
    description: 'Cross-platform mobile app',
    recommendedStack: 'serverless',
    estimatedComplexity: 'complex',
    estimatedTimeline: '4-6 months',
    keyFeatures: ['Push notifications', 'Offline mode', 'Native features', 'Real-time sync'],
  },
  {
    type: 'enterprise',
    name: 'Enterprise System',
    description: 'Large-scale business application',
    recommendedStack: 'enterprise',
    estimatedComplexity: 'complex',
    estimatedTimeline: '6-12 months',
    keyFeatures: ['Complex workflows', 'Multiple integrations', 'Advanced security', 'Scalability'],
  },
  {
    type: 'prototype',
    name: 'MVP / Prototype',
    description: 'Quick proof of concept',
    recommendedStack: 'rapid-prototype',
    estimatedComplexity: 'medium',
    estimatedTimeline: '4-8 weeks',
    keyFeatures: ['Core features only', 'Quick iteration', 'User testing'],
  },
];

