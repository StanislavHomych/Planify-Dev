import { Feature } from '@/types/calculator';

// Feature categories
export const FEATURE_CATEGORIES = {
  AUTH: 'Authentication & Security',
  PROFILE: 'User Profile',
  PAYMENT: 'Payments',
  COMMUNICATION: 'Communications',
  DATA: 'Data & Search',
  ANALYTICS: 'Analytics',
  MEDIA: 'Media',
  ADMIN: 'Administration',
  OTHER: 'Other',
};

// All available features
export const AVAILABLE_FEATURES: Feature[] = [
  // Authentication
  {
    id: 'auth-basic',
    name: 'Registration/Login (Email/Password)',
    category: FEATURE_CATEGORIES.AUTH,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 12, max: 16 },
    selected: false,
  },
  {
    id: 'auth-oauth',
    name: 'OAuth (Google, Facebook)',
    category: FEATURE_CATEGORIES.AUTH,
    frontendHours: { min: 6, max: 10 },
    backendHours: { min: 16, max: 24 },
    selected: false,
  },
  {
    id: 'auth-2fa',
    name: 'Two-Factor Authentication (2FA)',
    category: FEATURE_CATEGORIES.AUTH,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 24, max: 32 },
    selected: false,
  },
  {
    id: 'auth-reset-password',
    name: 'Password Recovery',
    category: FEATURE_CATEGORIES.AUTH,
    frontendHours: { min: 4, max: 6 },
    backendHours: { min: 8, max: 12 },
    selected: false,
  },
  
  // User Profile
  {
    id: 'profile-edit',
    name: 'Profile Editing',
    category: FEATURE_CATEGORIES.PROFILE,
    frontendHours: { min: 4, max: 6 },
    backendHours: { min: 4, max: 6 },
    selected: false,
  },
  {
    id: 'profile-avatar',
    name: 'Avatar/Profile Photo',
    category: FEATURE_CATEGORIES.PROFILE,
    frontendHours: { min: 2, max: 4 },
    backendHours: { min: 6, max: 8 },
    selected: false,
  },
  {
    id: 'profile-privacy',
    name: 'Privacy Settings',
    category: FEATURE_CATEGORIES.PROFILE,
    frontendHours: { min: 6, max: 8 },
    backendHours: { min: 8, max: 12 },
    selected: false,
  },
  
  // Payments
  {
    id: 'payment-integration',
    name: 'Stripe/PayPal Integration',
    category: FEATURE_CATEGORIES.PAYMENT,
    frontendHours: { min: 16, max: 24 },
    backendHours: { min: 24, max: 32 },
    selected: false,
  },
  {
    id: 'payment-subscriptions',
    name: 'Subscriptions/Recurring Payments',
    category: FEATURE_CATEGORIES.PAYMENT,
    frontendHours: { min: 12, max: 16 },
    backendHours: { min: 32, max: 48 },
    selected: false,
  },
  {
    id: 'payment-history',
    name: 'Transaction History',
    category: FEATURE_CATEGORIES.PAYMENT,
    frontendHours: { min: 4, max: 6 },
    backendHours: { min: 8, max: 12 },
    selected: false,
  },
  
  // Communications
  {
    id: 'email-notifications',
    name: 'Email Notifications',
    category: FEATURE_CATEGORIES.COMMUNICATION,
    frontendHours: { min: 4, max: 6 },
    backendHours: { min: 8, max: 16 },
    selected: false,
  },
  {
    id: 'push-notifications',
    name: 'Push Notifications',
    category: FEATURE_CATEGORIES.COMMUNICATION,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 12, max: 20 },
    selected: false,
  },
  {
    id: 'chat-messaging',
    name: 'Chat/Messaging (Real-time)',
    category: FEATURE_CATEGORIES.COMMUNICATION,
    frontendHours: { min: 20, max: 32 },
    backendHours: { min: 32, max: 48 },
    selected: false,
  },
  
  // Data & Search
  {
    id: 'search-filter',
    name: 'Search and Filtering',
    category: FEATURE_CATEGORIES.DATA,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 12, max: 20 },
    selected: false,
  },
  {
    id: 'file-upload',
    name: 'File Upload',
    category: FEATURE_CATEGORIES.DATA,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 16, max: 24 },
    selected: false,
  },
  {
    id: 'export-import',
    name: 'Data Export/Import (CSV, Excel)',
    category: FEATURE_CATEGORIES.DATA,
    frontendHours: { min: 6, max: 10 },
    backendHours: { min: 10, max: 16 },
    selected: false,
  },
  
  // Analytics
  {
    id: 'dashboard-analytics',
    name: 'Analytics Dashboard',
    category: FEATURE_CATEGORIES.ANALYTICS,
    frontendHours: { min: 16, max: 24 },
    backendHours: { min: 24, max: 40 },
    selected: false,
  },
  {
    id: 'reporting',
    name: 'Report Generation',
    category: FEATURE_CATEGORIES.ANALYTICS,
    frontendHours: { min: 12, max: 16 },
    backendHours: { min: 16, max: 24 },
    selected: false,
  },
  
  // Media
  {
    id: 'maps-geolocation',
    name: 'Maps/Geolocation',
    category: FEATURE_CATEGORIES.MEDIA,
    frontendHours: { min: 12, max: 16 },
    backendHours: { min: 8, max: 12 },
    selected: false,
  },
  {
    id: 'video-streaming',
    name: 'Video Streaming',
    category: FEATURE_CATEGORIES.MEDIA,
    frontendHours: { min: 20, max: 32 },
    backendHours: { min: 32, max: 48 },
    selected: false,
  },
  
  // Administration
  {
    id: 'admin-panel',
    name: 'Admin Panel',
    category: FEATURE_CATEGORIES.ADMIN,
    frontendHours: { min: 40, max: 60 },
    backendHours: { min: 60, max: 80 },
    selected: false,
  },
  {
    id: 'user-management',
    name: 'User Management',
    category: FEATURE_CATEGORIES.ADMIN,
    frontendHours: { min: 16, max: 24 },
    backendHours: { min: 20, max: 32 },
    selected: false,
  },
  {
    id: 'roles-permissions',
    name: 'Roles and Permissions',
    category: FEATURE_CATEGORIES.ADMIN,
    frontendHours: { min: 12, max: 20 },
    backendHours: { min: 20, max: 32 },
    selected: false,
  },
  
  // More Communication Features
  {
    id: 'video-calls',
    name: 'Video/Audio Calls (WebRTC)',
    category: FEATURE_CATEGORIES.COMMUNICATION,
    frontendHours: { min: 40, max: 60 },
    backendHours: { min: 48, max: 72 },
    selected: false,
  },
  {
    id: 'sms-notifications',
    name: 'SMS Notifications (Twilio)',
    category: FEATURE_CATEGORIES.COMMUNICATION,
    frontendHours: { min: 4, max: 8 },
    backendHours: { min: 12, max: 16 },
    selected: false,
  },
  
  // More Payment Features
  {
    id: 'crypto-payments',
    name: 'Cryptocurrency Payments',
    category: FEATURE_CATEGORIES.PAYMENT,
    frontendHours: { min: 20, max: 32 },
    backendHours: { min: 32, max: 48 },
    selected: false,
  },
  {
    id: 'invoicing',
    name: 'Invoice Generation',
    category: FEATURE_CATEGORIES.PAYMENT,
    frontendHours: { min: 12, max: 16 },
    backendHours: { min: 16, max: 24 },
    selected: false,
  },
  {
    id: 'refunds',
    name: 'Refund System',
    category: FEATURE_CATEGORIES.PAYMENT,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 16, max: 24 },
    selected: false,
  },

  // More Data Features
  {
    id: 'advanced-search',
    name: 'Advanced Search (Elasticsearch)',
    category: FEATURE_CATEGORIES.DATA,
    frontendHours: { min: 16, max: 24 },
    backendHours: { min: 32, max: 48 },
    selected: false,
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization & Charts',
    category: FEATURE_CATEGORIES.DATA,
    frontendHours: { min: 20, max: 32 },
    backendHours: { min: 16, max: 24 },
    selected: false,
  },
  {
    id: 'bulk-operations',
    name: 'Bulk Operations (Import/Export)',
    category: FEATURE_CATEGORIES.DATA,
    frontendHours: { min: 12, max: 16 },
    backendHours: { min: 20, max: 32 },
    selected: false,
  },
  {
    id: 'api-integration',
    name: 'Third-party API Integration',
    category: FEATURE_CATEGORIES.DATA,
    frontendHours: { min: 8, max: 16 },
    backendHours: { min: 24, max: 40 },
    selected: false,
  },

  // More Analytics Features
  {
    id: 'real-time-analytics',
    name: 'Real-time Analytics Dashboard',
    category: FEATURE_CATEGORIES.ANALYTICS,
    frontendHours: { min: 24, max: 40 },
    backendHours: { min: 40, max: 60 },
    selected: false,
  },
  {
    id: 'custom-reports',
    name: 'Custom Report Builder',
    category: FEATURE_CATEGORIES.ANALYTICS,
    frontendHours: { min: 20, max: 32 },
    backendHours: { min: 24, max: 40 },
    selected: false,
  },
  {
    id: 'ab-testing',
    name: 'A/B Testing',
    category: FEATURE_CATEGORIES.ANALYTICS,
    frontendHours: { min: 16, max: 24 },
    backendHours: { min: 20, max: 32 },
    selected: false,
  },

  // More Media Features
  {
    id: 'image-processing',
    name: 'Image Processing & Optimization',
    category: FEATURE_CATEGORIES.MEDIA,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 20, max: 32 },
    selected: false,
  },
  {
    id: 'audio-player',
    name: 'Audio Player & Streaming',
    category: FEATURE_CATEGORIES.MEDIA,
    frontendHours: { min: 16, max: 24 },
    backendHours: { min: 20, max: 32 },
    selected: false,
  },
  {
    id: 'pdf-generation',
    name: 'PDF Generation & Reports',
    category: FEATURE_CATEGORIES.MEDIA,
    frontendHours: { min: 8, max: 16 },
    backendHours: { min: 16, max: 24 },
    selected: false,
  },

  // More Admin Features
  {
    id: 'audit-logs',
    name: 'Audit Logs & Activity Tracking',
    category: FEATURE_CATEGORIES.ADMIN,
    frontendHours: { min: 12, max: 20 },
    backendHours: { min: 24, max: 40 },
    selected: false,
  },
  {
    id: 'content-moderation',
    name: 'Content Moderation System',
    category: FEATURE_CATEGORIES.ADMIN,
    frontendHours: { min: 20, max: 32 },
    backendHours: { min: 32, max: 48 },
    selected: false,
  },
  {
    id: 'backup-restore',
    name: 'Backup & Restore System',
    category: FEATURE_CATEGORIES.ADMIN,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 24, max: 40 },
    selected: false,
  },
  
  // Other
  {
    id: 'multi-language',
    name: 'Multi-language (i18n)',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 8, max: 16 },
    backendHours: { min: 4, max: 8 },
    selected: false,
  },
  {
    id: 'social-integration',
    name: 'Social Media Integration',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 8, max: 12 },
    backendHours: { min: 12, max: 16 },
    selected: false,
  },
  {
    id: 'calendar-integration',
    name: 'Calendar Integration (Google, Outlook)',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 12, max: 20 },
    backendHours: { min: 20, max: 32 },
    selected: false,
  },
  {
    id: 'booking-system',
    name: 'Booking/Reservation System',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 24, max: 40 },
    backendHours: { min: 32, max: 56 },
    selected: false,
  },
  {
    id: 'gamification',
    name: 'Gamification (Points, Badges, Leaderboard)',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 20, max: 32 },
    backendHours: { min: 24, max: 40 },
    selected: false,
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode / Theme Switcher',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 8, max: 16 },
    backendHours: { min: 0, max: 4 },
    selected: false,
  },
  {
    id: 'pwa',
    name: 'Progressive Web App (PWA)',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 16, max: 24 },
    backendHours: { min: 8, max: 16 },
    selected: false,
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    category: FEATURE_CATEGORIES.OTHER,
    frontendHours: { min: 12, max: 20 },
    backendHours: { min: 8, max: 16 },
    selected: false,
  },
];

// Role names
export const ROLE_NAMES: Record<string, string> = {
  'ui-ux-designer': 'UI/UX Designer',
  'frontend-developer': 'Frontend Developer',
  'backend-developer': 'Backend Developer',
  'fullstack-developer': 'Fullstack Developer',
  'qa-engineer': 'QA Engineer',
  'devops-engineer': 'DevOps Engineer',
  'project-manager': 'Project Manager',
  'content-manager': 'Content Manager',
};

// Level names
export const LEVEL_NAMES: Record<string, string> = {
  junior: 'Junior',
  middle: 'Middle',
  senior: 'Senior',
};

// Recommended rates (can be changed by user)
export const RECOMMENDED_RATES: Record<string, Record<string, number>> = {
  'ui-ux-designer': { junior: 25, middle: 40, senior: 60 },
  'frontend-developer': { junior: 30, middle: 50, senior: 75 },
  'backend-developer': { junior: 30, middle: 50, senior: 75 },
  'fullstack-developer': { junior: 35, middle: 60, senior: 90 },
  'qa-engineer': { junior: 20, middle: 35, senior: 55 },
  'devops-engineer': { junior: 35, middle: 60, senior: 85 },
  'project-manager': { junior: 30, middle: 50, senior: 80 },
  'content-manager': { junior: 20, middle: 30, senior: 45 },
};

// Hours per screen for design
export const DESIGN_HOURS_PER_SCREEN = {
  simple: { min: 4, max: 6 },
  medium: { min: 6, max: 10 },
  complex: { min: 10, max: 16 },
};

// Technology multipliers
export const TECH_MULTIPLIERS = {
  frontend: {
    react: 1.0,
    nextjs: 1.1,
    vue: 1.0,
    nuxtjs: 1.1,
    angular: 1.15,
    svelte: 0.95,
    sveltekit: 1.05,
    remix: 1.08,
    gatsby: 1.05,
    astro: 1.0,
  },
  backend: {
    nodejs: 1.0,
    express: 0.95,
    nestjs: 1.12,
    python: 1.05,
    django: 1.15,
    fastapi: 1.08,
    php: 1.0,
    laravel: 1.1,
    java: 1.2,
    spring: 1.25,
    dotnet: 1.2,
    go: 1.12,
    ruby: 1.08,
    rails: 1.15,
    rust: 1.3,
    elixir: 1.25,
  },
  database: {
    postgresql: 1.0,
    mysql: 0.95,
    mongodb: 1.05,
    firebase: 0.9,
    redis: 0.85,
    sqlite: 0.8,
    dynamodb: 1.1,
    cassandra: 1.2,
    mariadb: 0.95,
    supabase: 0.9,
    planetscale: 0.95,
  },
  mobile: {
    none: 1.0,
    'react-native': 1.3,
    flutter: 1.25,
    swift: 1.4,
    kotlin: 1.4,
    ionic: 1.2,
    xamarin: 1.35,
  },
  uiLibrary: {
    none: 1.0,
    tailwind: 0.95,
    bootstrap: 0.9,
    'material-ui': 1.05,
    'ant-design': 1.08,
    'chakra-ui': 1.0,
    'shadcn-ui': 0.95,
    mantine: 1.0,
  },
  hosting: {
    none: 1.0,
    vercel: 1.02,
    netlify: 1.02,
    aws: 1.15,
    'google-cloud': 1.15,
    azure: 1.18,
    digitalocean: 1.08,
    heroku: 1.05,
    railway: 1.03,
  },
};

