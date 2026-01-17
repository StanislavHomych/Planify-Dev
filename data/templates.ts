import { TeamMember, Feature, DesignConfig } from '@/types/calculator';
import { AVAILABLE_FEATURES } from './features';

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  team: Omit<TeamMember, 'id'>[];
  design: DesignConfig;
  features: string[];
}

export const PROJECT_TEMPLATES: ProjectTemplate[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Simple landing page for product or service',
    team: [
      {
        role: 'ui-ux-designer',
        level: 'middle',
        hourlyRate: 40,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'frontend-developer',
        level: 'middle',
        hourlyRate: 50,
        hoursPerDay: 8,
        quantity: 1,
      },
    ],
    design: {
      complexity: 'medium',
      screensCount: 5,
      includeLogo: true,
      includeIcons: true,
      includeAnimations: true,
      include3D: false,
      responsive: { mobile: true, tablet: true, desktop: true },
    },
    features: ['email-notifications'],
  },
  
  {
    id: 'saas-mvp',
    name: 'SaaS MVP',
    description: 'Basic SaaS product with subscription',
    team: [
      {
        role: 'ui-ux-designer',
        level: 'senior',
        hourlyRate: 60,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'frontend-developer',
        level: 'middle',
        hourlyRate: 50,
        hoursPerDay: 8,
        quantity: 2,
      },
      {
        role: 'backend-developer',
        level: 'senior',
        hourlyRate: 75,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'qa-engineer',
        level: 'middle',
        hourlyRate: 35,
        hoursPerDay: 8,
        quantity: 1,
      },
    ],
    design: {
      complexity: 'complex',
      screensCount: 20,
      includeLogo: true,
      includeIcons: true,
      includeAnimations: true,
      include3D: false,
      responsive: { mobile: true, tablet: true, desktop: true },
    },
    features: [
      'auth-basic',
      'auth-oauth',
      'profile-edit',
      'profile-avatar',
      'payment-integration',
      'payment-subscriptions',
      'payment-history',
      'email-notifications',
      'dashboard-analytics',
      'user-management',
    ],
  },
  
  {
    id: 'e-commerce',
    name: 'E-commerce',
    description: 'Online store with catalog and payment',
    team: [
      {
        role: 'ui-ux-designer',
        level: 'senior',
        hourlyRate: 60,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'frontend-developer',
        level: 'senior',
        hourlyRate: 75,
        hoursPerDay: 8,
        quantity: 2,
      },
      {
        role: 'backend-developer',
        level: 'senior',
        hourlyRate: 75,
        hoursPerDay: 8,
        quantity: 2,
      },
      {
        role: 'qa-engineer',
        level: 'middle',
        hourlyRate: 35,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'devops-engineer',
        level: 'middle',
        hourlyRate: 60,
        hoursPerDay: 8,
        quantity: 1,
      },
    ],
    design: {
      complexity: 'complex',
      screensCount: 30,
      includeLogo: true,
      includeIcons: true,
      includeAnimations: true,
      include3D: false,
      responsive: { mobile: true, tablet: true, desktop: true },
    },
    features: [
      'auth-basic',
      'auth-oauth',
      'profile-edit',
      'profile-avatar',
      'payment-integration',
      'payment-history',
      'email-notifications',
      'search-filter',
      'file-upload',
      'admin-panel',
      'user-management',
    ],
  },
  
  {
    id: 'mobile-app',
    name: 'Mobile App',
    description: 'Cross-platform mobile application',
    team: [
      {
        role: 'ui-ux-designer',
        level: 'senior',
        hourlyRate: 60,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'frontend-developer',
        level: 'senior',
        hourlyRate: 75,
        hoursPerDay: 8,
        quantity: 2,
      },
      {
        role: 'backend-developer',
        level: 'senior',
        hourlyRate: 75,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'qa-engineer',
        level: 'senior',
        hourlyRate: 55,
        hoursPerDay: 8,
        quantity: 1,
      },
    ],
    design: {
      complexity: 'complex',
      screensCount: 25,
      includeLogo: true,
      includeIcons: true,
      includeAnimations: true,
      include3D: false,
      responsive: { mobile: true, tablet: true, desktop: false },
    },
    features: [
      'auth-basic',
      'auth-oauth',
      'profile-edit',
      'profile-avatar',
      'push-notifications',
      'file-upload',
      'maps-geolocation',
    ],
  },
  
  {
    id: 'corporate-website',
    name: 'Corporate Website',
    description: 'Corporate website with CMS',
    team: [
      {
        role: 'ui-ux-designer',
        level: 'middle',
        hourlyRate: 40,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'frontend-developer',
        level: 'middle',
        hourlyRate: 50,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'backend-developer',
        level: 'middle',
        hourlyRate: 50,
        hoursPerDay: 8,
        quantity: 1,
      },
      {
        role: 'content-manager',
        level: 'middle',
        hourlyRate: 30,
        hoursPerDay: 8,
        quantity: 1,
      },
    ],
    design: {
      complexity: 'medium',
      screensCount: 12,
      includeLogo: true,
      includeIcons: true,
      includeAnimations: false,
      include3D: false,
      responsive: { mobile: true, tablet: true, desktop: true },
    },
    features: [
      'email-notifications',
      'multi-language',
      'admin-panel',
    ],
  },
];

