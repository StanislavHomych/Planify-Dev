// Specialist levels
export type Level = 'junior' | 'middle' | 'senior';

// Team roles
export type Role = 
  | 'ui-ux-designer'
  | 'frontend-developer'
  | 'backend-developer'
  | 'fullstack-developer'
  | 'qa-engineer'
  | 'devops-engineer'
  | 'project-manager'
  | 'content-manager';

// Design complexity
export type DesignComplexity = 'simple' | 'medium' | 'complex';

// Frameworks and technologies
export type FrontendFramework = 
  | 'react' 
  | 'nextjs' 
  | 'vue' 
  | 'nuxtjs' 
  | 'angular' 
  | 'svelte' 
  | 'sveltekit' 
  | 'remix'
  | 'gatsby'
  | 'astro';

export type BackendStack = 
  | 'nodejs' 
  | 'express' 
  | 'nestjs' 
  | 'python' 
  | 'django' 
  | 'fastapi' 
  | 'php' 
  | 'laravel' 
  | 'java' 
  | 'spring' 
  | 'dotnet' 
  | 'go'
  | 'ruby'
  | 'rails'
  | 'rust'
  | 'elixir';

export type Database = 
  | 'postgresql' 
  | 'mysql' 
  | 'mongodb' 
  | 'firebase' 
  | 'redis'
  | 'sqlite'
  | 'dynamodb'
  | 'cassandra'
  | 'mariadb'
  | 'supabase'
  | 'planetscale';

export type MobilePlatform = 
  | 'none'
  | 'react-native'
  | 'flutter'
  | 'swift'
  | 'kotlin'
  | 'ionic'
  | 'xamarin';

export type UILibrary =
  | 'none'
  | 'tailwind'
  | 'bootstrap'
  | 'material-ui'
  | 'ant-design'
  | 'chakra-ui'
  | 'shadcn-ui'
  | 'mantine';

export type HostingPlatform =
  | 'none'
  | 'vercel'
  | 'netlify'
  | 'aws'
  | 'google-cloud'
  | 'azure'
  | 'digitalocean'
  | 'heroku'
  | 'railway';

// Team member
export interface TeamMember {
  id: string;
  role: Role;
  level: Level;
  hourlyRate: number;
  hoursPerDay: number;
  quantity: number;
}

// Design configuration
export interface DesignConfig {
  complexity: DesignComplexity;
  screensCount: number;
  includeLogo: boolean;
  includeIcons: boolean;
  includeAnimations: boolean;
  include3D: boolean;
  responsive: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
}

// System feature
export interface Feature {
  id: string;
  name: string;
  category: string;
  frontendHours: { min: number; max: number };
  backendHours: { min: number; max: number };
  selected: boolean;
  customHours?: {
    frontend?: number;
    backend?: number;
  };
}

// Technologies
export interface TechStack {
  frontend: FrontendFramework;
  backend: BackendStack;
  database: Database;
  mobile: MobilePlatform;
  uiLibrary: UILibrary;
  hosting: HostingPlatform;
  cloud: boolean;
  cdn: boolean;
  cicd: boolean;
  docker: boolean;
  kubernetes: boolean;
}

// Testing configuration
export interface TestingConfig {
  manualTesting: boolean;
  manualTestingPercent: number;
  automatedTesting: boolean;
  automatedHours: number;
  unitTests: boolean;
  integrationTests: boolean;
  e2eTests: boolean;
  performanceTests: boolean;
}

// Additional costs
export interface AdditionalCosts {
  supportMonths: 0 | 1 | 3 | 6 | 12;
  documentation: {
    technical: boolean;
    userGuide: boolean;
  };
  bufferPercent: number;
  other: {
    domain: boolean;
    apis: boolean;
    licenses: boolean;
  };
}

// Role cost breakdown
export interface RoleCostBreakdown {
  role: Role;
  level: Level;
  hours: number;
  cost: number;
  quantity: number;
}

// Feature cost breakdown
export interface FeatureCostBreakdown {
  featureName: string;
  category: string;
  frontendHours: number;
  backendHours: number;
  totalHours: number;
  cost: number;
}

// Total calculation summary
export interface CostSummary {
  teamCosts: RoleCostBreakdown[];
  featureCosts: FeatureCostBreakdown[];
  designCost: number;
  testingCost: number;
  supportCost: number;
  bufferCost: number;
  otherCosts: number;
  totalCost: number;
  totalHours: number;
  estimatedMonths: number;
}

// Complete calculator state
export interface CalculatorState {
  currentStep: number;
  projectName: string;
  team: TeamMember[];
  design: DesignConfig;
  features: Feature[];
  techStack: TechStack;
  testing: TestingConfig;
  additional: AdditionalCosts;
  summary: CostSummary | null;
}

