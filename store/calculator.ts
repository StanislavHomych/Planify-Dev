import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  CalculatorState,
  TeamMember,
  DesignConfig,
  Feature,
  TechStack,
  TestingConfig,
  AdditionalCosts,
  CostSummary,
  RoleCostBreakdown,
  FeatureCostBreakdown,
} from '@/types/calculator';
import { AVAILABLE_FEATURES, DESIGN_HOURS_PER_SCREEN, TECH_MULTIPLIERS } from '@/data/features';

interface CalculatorStore extends CalculatorState {
  // Actions to update state
  setCurrentStep: (step: number) => void;
  setProjectName: (name: string) => void;
  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (id: string, updates: Partial<TeamMember>) => void;
  removeTeamMember: (id: string) => void;
  updateDesign: (design: Partial<DesignConfig>) => void;
  toggleFeature: (featureId: string) => void;
  updateFeatureHours: (featureId: string, frontend?: number, backend?: number) => void;
  updateTechStack: (techStack: Partial<TechStack>) => void;
  updateTesting: (testing: Partial<TestingConfig>) => void;
  updateAdditional: (additional: Partial<AdditionalCosts>) => void;
  calculateSummary: () => void;
  resetCalculator: () => void;
}

const initialDesign: DesignConfig = {
  complexity: 'medium',
  screensCount: 10,
  includeLogo: false,
  includeIcons: false,
  includeAnimations: false,
  include3D: false,
  responsive: {
    mobile: true,
    tablet: true,
    desktop: true,
  },
};

const initialTechStack: TechStack = {
  frontend: 'react',
  backend: 'nodejs',
  database: 'postgresql',
  mobile: 'none',
  uiLibrary: 'tailwind',
  hosting: 'vercel',
  cloud: false,
  cdn: false,
  cicd: false,
  docker: false,
  kubernetes: false,
};

const initialTesting: TestingConfig = {
  manualTesting: true,
  manualTestingPercent: 20,
  automatedTesting: false,
  automatedHours: 0,
  unitTests: false,
  integrationTests: false,
  e2eTests: false,
  performanceTests: false,
};

const initialAdditional: AdditionalCosts = {
  supportMonths: 0,
  documentation: {
    technical: false,
    userGuide: false,
  },
  bufferPercent: 20,
  other: {
    domain: false,
    apis: false,
    licenses: false,
  },
};

export const useCalculatorStore = create<CalculatorStore>()(
  persist(
    (set, get) => ({
      currentStep: 0,
      projectName: '',
      team: [],
      design: initialDesign,
      features: AVAILABLE_FEATURES.map(f => ({ ...f })),
      techStack: initialTechStack,
      testing: initialTesting,
      additional: initialAdditional,
      summary: null,

      setCurrentStep: (step) => set({ currentStep: step }),

      setProjectName: (name) => set({ projectName: name }),

      addTeamMember: (member) =>
        set((state) => ({
          team: [...state.team, member],
        })),

      updateTeamMember: (id, updates) =>
        set((state) => ({
          team: state.team.map((m) => (m.id === id ? { ...m, ...updates } : m)),
        })),

      removeTeamMember: (id) =>
        set((state) => ({
          team: state.team.filter((m) => m.id !== id),
        })),

      updateDesign: (design) =>
        set((state) => ({
          design: { ...state.design, ...design },
        })),

      toggleFeature: (featureId) =>
        set((state) => ({
          features: state.features.map((f) =>
            f.id === featureId ? { ...f, selected: !f.selected } : f
          ),
        })),

      updateFeatureHours: (featureId, frontend, backend) =>
        set((state) => ({
          features: state.features.map((f) =>
            f.id === featureId
              ? {
                  ...f,
                  customHours: {
                    frontend: frontend ?? f.customHours?.frontend,
                    backend: backend ?? f.customHours?.backend,
                  },
                }
              : f
          ),
        })),

      updateTechStack: (techStack) =>
        set((state) => ({
          techStack: { ...state.techStack, ...techStack },
        })),

      updateTesting: (testing) =>
        set((state) => ({
          testing: { ...state.testing, ...testing },
        })),

      updateAdditional: (additional) =>
        set((state) => ({
          additional: { ...state.additional, ...additional },
        })),

      calculateSummary: () => {
        const state = get();
        const { team, design, features, techStack, testing, additional } = state;

        // 2. Design calculation
        const designHoursPerScreen = DESIGN_HOURS_PER_SCREEN[design.complexity];
        let designHours = design.screensCount * ((designHoursPerScreen.min + designHoursPerScreen.max) / 2);

        // Additional hours for extra services
        if (design.includeLogo) designHours += 16;
        if (design.includeIcons) designHours += 24;
        if (design.includeAnimations) designHours += 32;
        if (design.include3D) designHours += 48;

        // Responsive design
        const responsiveCount = [design.responsive.mobile, design.responsive.tablet, design.responsive.desktop].filter(Boolean).length;
        designHours *= responsiveCount > 1 ? 1 + (responsiveCount - 1) * 0.2 : 1;

        // Find designer for cost calculation
        const designer = team.find((m) => m.role === 'ui-ux-designer');
        const designCost = designer ? designHours * designer.hourlyRate : designHours * 40; // fallback rate

        // 3. Features calculation
        const selectedFeatures = features.filter((f) => f.selected);
        const frontendDev = team.find((m) => m.role === 'frontend-developer' || m.role === 'fullstack-developer');
        const backendDev = team.find((m) => m.role === 'backend-developer' || m.role === 'fullstack-developer');

        const frontendRate = frontendDev?.hourlyRate || 50;
        const backendRate = backendDev?.hourlyRate || 50;

        // Technology multipliers
        const frontendMultiplier = TECH_MULTIPLIERS.frontend[techStack.frontend];
        const backendMultiplier = TECH_MULTIPLIERS.backend[techStack.backend];
        const dbMultiplier = TECH_MULTIPLIERS.database[techStack.database];

        const featureCosts: FeatureCostBreakdown[] = selectedFeatures.map((feature) => {
          const frontendHours =
            (feature.customHours?.frontend ||
              (feature.frontendHours.min + feature.frontendHours.max) / 2) *
            frontendMultiplier;

          const backendHours =
            (feature.customHours?.backend ||
              (feature.backendHours.min + feature.backendHours.max) / 2) *
            backendMultiplier *
            dbMultiplier;

          const totalHours = frontendHours + backendHours;
          const cost = frontendHours * frontendRate + backendHours * backendRate;

          return {
            featureName: feature.name,
            category: feature.category,
            frontendHours,
            backendHours,
            totalHours,
            cost,
          };
        });

        const totalFeaturesCost = featureCosts.reduce((sum, f) => sum + f.cost, 0);
        const totalFeaturesHours = featureCosts.reduce((sum, f) => sum + f.totalHours, 0);

        // 3.5. Team cost calculation based on hours from features and design
        const totalProjectHours = designHours + totalFeaturesHours;
        
        // Distribute hours among team members proportionally by their roles
        const teamCosts: RoleCostBreakdown[] = team.map((member) => {
          let memberHours = 0;
          
          // Frontend developers take frontend hours
          if (member.role === 'frontend-developer' || member.role === 'fullstack-developer') {
            const frontendHours = featureCosts.reduce((sum, f) => sum + f.frontendHours, 0);
            memberHours += frontendHours / team.filter(m => 
              m.role === 'frontend-developer' || m.role === 'fullstack-developer'
            ).length;
          }
          
          // Backend developers take backend hours
          if (member.role === 'backend-developer' || member.role === 'fullstack-developer') {
            const backendHours = featureCosts.reduce((sum, f) => sum + f.backendHours, 0);
            memberHours += backendHours / team.filter(m => 
              m.role === 'backend-developer' || m.role === 'fullstack-developer'
            ).length;
          }
          
          // Designers take design hours
          if (member.role === 'ui-ux-designer') {
            memberHours += designHours / team.filter(m => m.role === 'ui-ux-designer').length;
          }
          
          // If role didn't match, distribute proportionally
          if (memberHours === 0 && 
              member.role !== 'qa-engineer' && 
              member.role !== 'devops-engineer' &&
              member.role !== 'project-manager') {
            memberHours = totalProjectHours / team.length;
          }
          
          // PM and DevOps get fixed percentage
          if (member.role === 'project-manager') {
            memberHours = totalProjectHours * 0.2; // 20% of project time
          }
          if (member.role === 'devops-engineer') {
            memberHours = totalProjectHours * 0.15; // 15% of project time
          }
          
          const cost = memberHours * member.hourlyRate * member.quantity;
          
          return {
            role: member.role,
            level: member.level,
            hours: memberHours * member.quantity,
            cost,
            quantity: member.quantity,
          };
        });

        const totalTeamCost = teamCosts.reduce((sum, t) => sum + t.cost, 0);

        // 4. Testing calculation
        let testingHours = 0;
        if (testing.manualTesting) {
          testingHours += (totalFeaturesHours * testing.manualTestingPercent) / 100;
        }
        if (testing.automatedTesting) {
          testingHours += testing.automatedHours;
        }

        const qaEngineer = team.find((m) => m.role === 'qa-engineer');
        const testingCost = qaEngineer ? testingHours * qaEngineer.hourlyRate : testingHours * 35;

        // 5. Infrastructure (additional cost)
        let infrastructureCost = 0;
        if (techStack.cloud) infrastructureCost += totalTeamCost * 0.1;
        if (techStack.cdn) infrastructureCost += 500;
        if (techStack.cicd) infrastructureCost += 1000;

        // 6. Support
        const supportPercentage = {
          0: 0,
          1: 0.15,
          3: 0.25,
          6: 0.4,
          12: 0.6,
        }[additional.supportMonths] || 0;

        const baseCost = totalTeamCost + designCost + totalFeaturesCost + testingCost;
        const supportCost = baseCost * supportPercentage;

        // 7. Documentation
        let documentationCost = 0;
        if (additional.documentation.technical) documentationCost += 30 * (frontendRate + backendRate) / 2;
        if (additional.documentation.userGuide) documentationCost += 15 * (frontendRate + backendRate) / 2;

        // 8. Other costs
        let otherCosts = infrastructureCost + documentationCost;
        if (additional.other.domain) otherCosts += 300;
        if (additional.other.apis) otherCosts += 500;
        if (additional.other.licenses) otherCosts += 1000;

        // 9. Buffer
        const subtotal = baseCost + supportCost + otherCosts;
        const bufferCost = (subtotal * additional.bufferPercent) / 100;

        // 10. Total cost
        const totalCost = subtotal + bufferCost;

        // Calculate total time
        const totalHours = totalProjectHours + testingHours;
        const teamProductivityPerDay = team.reduce((sum, m) => sum + m.hoursPerDay * m.quantity, 0);
        const estimatedDays = teamProductivityPerDay > 0 
          ? Math.ceil(totalHours / teamProductivityPerDay)
          : 0;
        const estimatedMonths = estimatedDays / 20; // 20 working days per month

        const summary: CostSummary = {
          teamCosts,
          featureCosts,
          designCost,
          testingCost,
          supportCost,
          bufferCost,
          otherCosts,
          totalCost,
          totalHours,
          estimatedMonths,
        };

        set({ summary });
      },

      resetCalculator: () =>
        set({
          currentStep: 0,
          projectName: '',
          team: [],
          design: initialDesign,
          features: AVAILABLE_FEATURES.map(f => ({ ...f })),
          techStack: initialTechStack,
          testing: initialTesting,
          additional: initialAdditional,
          summary: null,
        }),
    }),
    {
      name: 'calculator-storage',
    }
  )
);

