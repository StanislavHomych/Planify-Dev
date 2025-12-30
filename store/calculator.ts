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

        // Helper functions for rounding
        const roundHours = (hours: number): number => Math.round(hours * 10) / 10;
        const roundMoney = (money: number): number => Math.round(money * 100) / 100;

        // 1. Design hours calculation
        const designHoursPerScreen = DESIGN_HOURS_PER_SCREEN[design.complexity];
        let designHours = design.screensCount * ((designHoursPerScreen.min + designHoursPerScreen.max) / 2);

        // Additional hours for extra services (use custom hours if provided, otherwise default values)
        const defaultLogoHours = 36;
        const defaultIconsHours = 54;
        const defaultAnimationsHours = 70;
        const default3DHours = 100;

        if (design.includeLogo) {
          designHours += design.customHours?.logo || defaultLogoHours;
        }
        if (design.includeIcons) {
          designHours += design.customHours?.icons || defaultIconsHours;
        }
        if (design.includeAnimations) {
          designHours += design.customHours?.animations || defaultAnimationsHours;
        }
        if (design.include3D) {
          designHours += design.customHours?.threeD || default3DHours;
        }

        // Responsive design multiplier
        const responsiveCount = [design.responsive.mobile, design.responsive.tablet, design.responsive.desktop].filter(Boolean).length;
        designHours *= responsiveCount > 1 ? 1 + (responsiveCount - 1) * 0.2 : 1;
        designHours = roundHours(designHours);

        // 2. Base page development hours (basic page structure, routing, API setup)
        // This is separate from features - it's the foundation work for each page
        const frontendMultiplier = TECH_MULTIPLIERS.frontend[techStack.frontend];
        const backendMultiplier = TECH_MULTIPLIERS.backend[techStack.backend];
        const dbMultiplier = TECH_MULTIPLIERS.database[techStack.database];

        // Base hours per page: frontend (components, routing, basic UI) + backend (API endpoints, CRUD)
        const baseFrontendHoursPerPage = {
          simple: 4,
          medium: 6,
          complex: 8,
        }[design.complexity] || 6;

        const baseBackendHoursPerPage = {
          simple: 2,
          medium: 3,
          complex: 4,
        }[design.complexity] || 3;

        // Calculate base page development hours
        let baseFrontendHours = roundHours(design.screensCount * baseFrontendHoursPerPage * frontendMultiplier);
        let baseBackendHours = roundHours(design.screensCount * baseBackendHoursPerPage * backendMultiplier * dbMultiplier);

        // Responsive multiplier for frontend (more screens = more responsive work)
        if (responsiveCount > 1) {
          baseFrontendHours = roundHours(baseFrontendHours * (1 + (responsiveCount - 1) * 0.15));
        }

        // 3. Features hours calculation
        const selectedFeatures = features.filter((f) => f.selected);

        let totalFrontendHours = baseFrontendHours;
        let totalBackendHours = baseBackendHours;

        const featureCosts: FeatureCostBreakdown[] = selectedFeatures.map((feature) => {
          const frontendHours = roundHours(
            (feature.customHours?.frontend ||
              (feature.frontendHours.min + feature.frontendHours.max) / 2) *
            frontendMultiplier
          );

          const backendHours = roundHours(
            (feature.customHours?.backend ||
              (feature.backendHours.min + feature.backendHours.max) / 2) *
            backendMultiplier *
            dbMultiplier
          );

          totalFrontendHours += frontendHours;
          totalBackendHours += backendHours;

          // Calculate feature cost for display only (using average rates)
          const avgFrontendRate = team.find(m => m.role === 'frontend-developer' || m.role === 'fullstack-developer')?.hourlyRate || 50;
          const avgBackendRate = team.find(m => m.role === 'backend-developer' || m.role === 'fullstack-developer')?.hourlyRate || 50;
          const cost = roundMoney(frontendHours * avgFrontendRate + backendHours * avgBackendRate);

          return {
            featureName: feature.name,
            category: feature.category,
            frontendHours,
            backendHours,
            totalHours: roundHours(frontendHours + backendHours),
            cost,
          };
        });

        // Add base page development as a "feature" for display purposes
        if (design.screensCount > 0) {
          const avgFrontendRate = team.find(m => m.role === 'frontend-developer' || m.role === 'fullstack-developer')?.hourlyRate || 50;
          const avgBackendRate = team.find(m => m.role === 'backend-developer' || m.role === 'fullstack-developer')?.hourlyRate || 50;
          const basePageCost = roundMoney(baseFrontendHours * avgFrontendRate + baseBackendHours * avgBackendRate);
          
          featureCosts.unshift({
            featureName: `Base Page Development (${design.screensCount} pages)`,
            category: 'Foundation',
            frontendHours: baseFrontendHours,
            backendHours: baseBackendHours,
            totalHours: roundHours(baseFrontendHours + baseBackendHours),
            cost: basePageCost,
          });
        }

        // 4. Testing hours calculation
        let testingHours = 0;
        if (testing.manualTesting) {
          testingHours += (totalFrontendHours + totalBackendHours) * (testing.manualTestingPercent / 100);
        }
        if (testing.automatedTesting) {
          testingHours += testing.automatedHours;
        }
        testingHours = roundHours(testingHours);

        // 5. Calculate total development hours (without PM/DevOps overhead)
        const totalDevHours = designHours + totalFrontendHours + totalBackendHours + testingHours;

        // 6. PM and DevOps overhead (calculated separately, not part of dev hours)
        const pmHours = roundHours(totalDevHours * 0.2); // 20% overhead
        const devopsHours = roundHours(totalDevHours * 0.15); // 15% overhead

        // 7. Distribute hours among team members by their roles
        const teamCosts: RoleCostBreakdown[] = team.map((member) => {
          let memberHours = 0;

          if (member.isCustomRole) {
            // Custom roles: distribute remaining hours proportionally
            const customRoleMembers = team.filter(m => m.isCustomRole);
            const standardRoleMembers = team.filter(m => !m.isCustomRole);

            // Calculate hours allocated to standard roles
            let allocatedHours = 0;

            standardRoleMembers.forEach(m => {
              if (m.role === 'frontend-developer') {
                const frontendCount = team.filter(t => t.role === 'frontend-developer' && !t.isCustomRole).length;
                allocatedHours += frontendCount > 0 ? totalFrontendHours / frontendCount : 0;
              }
              if (m.role === 'backend-developer') {
                const backendCount = team.filter(t => t.role === 'backend-developer' && !t.isCustomRole).length;
                allocatedHours += backendCount > 0 ? totalBackendHours / backendCount : 0;
              }
              if (m.role === 'fullstack-developer') {
                const fullstackCount = team.filter(t => t.role === 'fullstack-developer' && !t.isCustomRole).length;
                if (fullstackCount > 0) {
                  // Fullstack gets 50% frontend + 50% backend (realistic split)
                  allocatedHours += (totalFrontendHours * 0.5) / fullstackCount;
                  allocatedHours += (totalBackendHours * 0.5) / fullstackCount;
                }
              }
              if (m.role === 'ui-ux-designer') {
                const designerCount = team.filter(t => t.role === 'ui-ux-designer' && !t.isCustomRole).length;
                allocatedHours += designerCount > 0 ? designHours / designerCount : 0;
              }
              if (m.role === 'qa-engineer') {
                const qaCount = team.filter(t => t.role === 'qa-engineer' && !t.isCustomRole).length;
                allocatedHours += qaCount > 0 ? testingHours / qaCount : 0;
              }
              if (m.role === 'project-manager') {
                allocatedHours += pmHours;
              }
              if (m.role === 'devops-engineer') {
                allocatedHours += devopsHours;
              }
            });

            // Distribute remaining hours among custom roles
            const remainingHours = totalDevHours + pmHours + devopsHours - allocatedHours;
            if (remainingHours > 0 && customRoleMembers.length > 0) {
              memberHours = remainingHours / customRoleMembers.length;
            } else if (team.length > 0) {
              // Fallback: equal distribution
              memberHours = (totalDevHours + pmHours + devopsHours) / team.length;
            }
          } else {
            // Standard role logic
            if (member.role === 'frontend-developer') {
              const frontendCount = team.filter(m => m.role === 'frontend-developer' && !m.isCustomRole).length;
              memberHours = frontendCount > 0 ? totalFrontendHours / frontendCount : 0;
            } else if (member.role === 'backend-developer') {
              const backendCount = team.filter(m => m.role === 'backend-developer' && !m.isCustomRole).length;
              memberHours = backendCount > 0 ? totalBackendHours / backendCount : 0;
            } else if (member.role === 'fullstack-developer') {
              // Fullstack gets 50% of frontend + 50% of backend hours (realistic split)
              const fullstackCount = team.filter(m => m.role === 'fullstack-developer' && !m.isCustomRole).length;
              if (fullstackCount > 0) {
                memberHours = (totalFrontendHours * 0.5) / fullstackCount + (totalBackendHours * 0.5) / fullstackCount;
              }
            } else if (member.role === 'ui-ux-designer') {
              const designerCount = team.filter(m => m.role === 'ui-ux-designer' && !m.isCustomRole).length;
              memberHours = designerCount > 0 ? designHours / designerCount : 0;
            } else if (member.role === 'qa-engineer') {
              const qaCount = team.filter(m => m.role === 'qa-engineer' && !m.isCustomRole).length;
              memberHours = qaCount > 0 ? testingHours / qaCount : 0;
            } else if (member.role === 'project-manager') {
              memberHours = pmHours;
            } else if (member.role === 'devops-engineer') {
              memberHours = devopsHours;
            } else {
              // Other roles (content-manager, etc.) - minimal hours
              memberHours = roundHours((totalDevHours * 0.05) / team.filter(m => 
                m.role === member.role && !m.isCustomRole
              ).length);
            }
          }

          memberHours = roundHours(memberHours);
          const totalMemberHours = roundHours(memberHours * member.quantity);
          const cost = roundMoney(totalMemberHours * member.hourlyRate);

          return {
            role: member.isCustomRole ? (member.customRoleName || 'Custom Role') : member.role,
            level: member.level,
            hours: totalMemberHours,
            cost,
            quantity: member.quantity,
            customRoleName: member.isCustomRole ? member.customRoleName : undefined,
          };
        });

        // 7. Calculate costs
        const totalTeamCost = roundMoney(teamCosts.reduce((sum, t) => sum + t.cost, 0));

        // Design cost (for display - already included in team costs)
        const designer = team.find((m) => m.role === 'ui-ux-designer');
        const designCost = roundMoney(designer ? designHours * designer.hourlyRate : designHours * 40);

        // Testing cost (for display - already included in team costs)
        const qaEngineer = team.find((m) => m.role === 'qa-engineer');
        const testingCost = roundMoney(qaEngineer ? testingHours * qaEngineer.hourlyRate : testingHours * 35);

        // 8. Infrastructure costs
        let infrastructureCost = 0;
        if (techStack.cloud) infrastructureCost += roundMoney(totalTeamCost * 0.1);
        if (techStack.cdn) infrastructureCost += 500;
        if (techStack.cicd) infrastructureCost += 1000;
        infrastructureCost = roundMoney(infrastructureCost);

        // 9. Support cost
        const supportPercentage = {
          0: 0,
          1: 0.15,
          3: 0.25,
          6: 0.4,
          12: 0.6,
        }[additional.supportMonths] || 0;

        const baseCost = roundMoney(totalTeamCost + infrastructureCost);
        const supportCost = roundMoney(baseCost * supportPercentage);

        // 10. Documentation cost
        const avgDevRate = team.length > 0 
          ? team.reduce((sum, m) => sum + m.hourlyRate, 0) / team.length 
          : 50;
        let documentationCost = 0;
        if (additional.documentation.technical) documentationCost += 30 * avgDevRate;
        if (additional.documentation.userGuide) documentationCost += 15 * avgDevRate;
        documentationCost = roundMoney(documentationCost);

        // 11. Other costs
        let otherCosts = roundMoney(infrastructureCost + documentationCost);
        if (additional.other.domain) otherCosts = roundMoney(otherCosts + 300);
        if (additional.other.apis) otherCosts = roundMoney(otherCosts + 500);
        if (additional.other.licenses) otherCosts = roundMoney(otherCosts + 1000);

        // 12. Buffer
        const subtotal = roundMoney(baseCost + supportCost + otherCosts);
        const bufferCost = roundMoney((subtotal * additional.bufferPercent) / 100);

        // 13. Total cost
        const totalCost = roundMoney(subtotal + bufferCost);

        // 14. Calculate total time
        const totalHours = roundHours(designHours + totalFrontendHours + totalBackendHours + testingHours + pmHours + devopsHours);
        const teamProductivityPerDay = team.reduce((sum, m) => sum + m.hoursPerDay * m.quantity, 0);
        const estimatedDays = teamProductivityPerDay > 0 
          ? Math.ceil(totalHours / teamProductivityPerDay)
          : 0;
        const estimatedMonths = roundHours(estimatedDays / 20); // 20 working days per month

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

