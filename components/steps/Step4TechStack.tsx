'use client';

import { useState } from 'react';
import { useCalculatorStore } from '@/store/calculator';
import { FrontendFramework, BackendStack, Database, MobilePlatform, UILibrary, HostingPlatform } from '@/types/calculator';
import { RECOMMENDED_STACKS, TECH_COMPATIBILITY } from '@/data/recommendations';
import * as FiIcons from 'react-icons/fi';

const FiCpu = FiIcons.FiCpu;
const FiServer = FiIcons.FiServer;
const FiDatabase = FiIcons.FiDatabase;
const FiCloud = FiIcons.FiCloud;
const FiCheckCircle = FiIcons.FiCheckCircle;
const FiAlertCircle = FiIcons.FiAlertCircle;
const FiInfo = FiIcons.FiInfo;
const FiX = FiIcons.FiX;
const FiSmartphone = FiIcons.FiSmartphone;
const FiLayout = FiIcons.FiLayout;
const FiGlobe = FiIcons.FiGlobe;

export default function Step4TechStack() {
  const { techStack, updateTechStack } = useCalculatorStore();
  const [showRecommendations, setShowRecommendations] = useState(false);

  const frontendOptions: { value: FrontendFramework; label: string; note: string }[] = [
    { value: 'react', label: 'React', note: 'Base time' },
    { value: 'nextjs', label: 'Next.js', note: '+10% time' },
    { value: 'vue', label: 'Vue.js', note: 'Base time' },
    { value: 'nuxtjs', label: 'Nuxt.js', note: '+10% time' },
    { value: 'angular', label: 'Angular', note: '+15% time' },
    { value: 'svelte', label: 'Svelte', note: '-5% time' },
    { value: 'sveltekit', label: 'SvelteKit', note: '+5% time' },
    { value: 'remix', label: 'Remix', note: '+8% time' },
    { value: 'gatsby', label: 'Gatsby', note: '+5% time' },
    { value: 'astro', label: 'Astro', note: 'Base time' },
  ];

  const backendOptions: { value: BackendStack; label: string; note: string }[] = [
    { value: 'nodejs', label: 'Node.js', note: 'Base time' },
    { value: 'express', label: 'Express.js', note: '-5% time' },
    { value: 'nestjs', label: 'NestJS', note: '+12% time' },
    { value: 'python', label: 'Python', note: '+5% time' },
    { value: 'django', label: 'Django', note: '+15% time' },
    { value: 'fastapi', label: 'FastAPI', note: '+8% time' },
    { value: 'php', label: 'PHP', note: 'Base time' },
    { value: 'laravel', label: 'Laravel', note: '+10% time' },
    { value: 'java', label: 'Java', note: '+20% time' },
    { value: 'spring', label: 'Spring Boot', note: '+25% time' },
    { value: 'dotnet', label: '.NET Core', note: '+20% time' },
    { value: 'go', label: 'Go', note: '+12% time' },
    { value: 'ruby', label: 'Ruby', note: '+8% time' },
    { value: 'rails', label: 'Ruby on Rails', note: '+15% time' },
    { value: 'rust', label: 'Rust', note: '+30% time' },
    { value: 'elixir', label: 'Elixir/Phoenix', note: '+25% time' },
  ];

  const databaseOptions: { value: Database; label: string; note: string }[] = [
    { value: 'postgresql', label: 'PostgreSQL', note: 'Base time' },
    { value: 'mysql', label: 'MySQL', note: '-5% time' },
    { value: 'mongodb', label: 'MongoDB', note: '+5% time' },
    { value: 'firebase', label: 'Firebase', note: '-10% time' },
    { value: 'redis', label: 'Redis', note: '-15% time' },
    { value: 'sqlite', label: 'SQLite', note: '-20% time' },
    { value: 'dynamodb', label: 'DynamoDB', note: '+10% time' },
    { value: 'cassandra', label: 'Cassandra', note: '+20% time' },
    { value: 'mariadb', label: 'MariaDB', note: '-5% time' },
    { value: 'supabase', label: 'Supabase', note: '-10% time' },
    { value: 'planetscale', label: 'PlanetScale', note: '-5% time' },
  ];

  const applyRecommendedStack = (stackId: string) => {
    const stack = RECOMMENDED_STACKS.find(s => s.id === stackId);
    if (stack) {
      updateTechStack({
        frontend: stack.frontend,
        backend: stack.backend,
        database: stack.database,
      });
      setShowRecommendations(false);
    }
  };

  // Get compatibility notes for current selection
  const getCompatibilityNote = () => {
    try {
      const frontendCompat = TECH_COMPATIBILITY.frontend[techStack.frontend as keyof typeof TECH_COMPATIBILITY.frontend];
      const backendCompat = TECH_COMPATIBILITY.backend[techStack.backend as keyof typeof TECH_COMPATIBILITY.backend];
      
      if (!frontendCompat || !backendCompat) return null;

      const isBestMatch = frontendCompat.bestWith.includes(techStack.backend) &&
                          backendCompat.bestWith.includes(techStack.database);
      const isGoodMatch = frontendCompat.goodWith.includes(techStack.backend) ||
                          backendCompat.goodWith.includes(techStack.database);

      if (isBestMatch) {
        return {
          type: 'excellent',
          message: 'Excellent combination! These technologies work great together.',
        };
      } else if (isGoodMatch) {
        return {
          type: 'good',
          message: 'Good combination. These technologies are compatible.',
        };
      } else {
        return {
          type: 'okay',
          message: 'This combination works but may not be optimal.',
        };
      }
    } catch {
      return null;
    }
  };

  const compatNote = getCompatibilityNote();

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FiCpu className="text-xl text-jira-blue" />
        <div>
          <h2 className="text-lg font-semibold text-jira-darkBlue">Technologies & Infrastructure</h2>
          <p className="text-jira-textSecondary text-xs">
            Choose the technology stack for your project
          </p>
        </div>
      </div>

      {/* Help Button */}
      <div className="card bg-primary-50 border border-jira-blue">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FiInfo className="text-xl text-jira-blue flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-jira-darkBlue mb-1 text-sm">Need Help Choosing?</h3>
              <p className="text-xs text-jira-textSecondary">
                Not sure which technologies to pick? We can recommend the best stack for your project.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowRecommendations(true)}
            className="btn-primary ml-4 whitespace-nowrap"
          >
            View Recommendations
          </button>
        </div>
      </div>

      {/* Compatibility Indicator */}
      {compatNote && (
        <div className={`card flex items-center space-x-3 ${
          compatNote.type === 'excellent' ? 'bg-green-50 border border-jira-success' :
          compatNote.type === 'good' ? 'bg-primary-50 border border-jira-blue' :
          'bg-yellow-50 border border-jira-warning'
        }`}>
          {compatNote.type === 'excellent' ? (
            <FiCheckCircle className="text-xl text-jira-success flex-shrink-0" />
          ) : compatNote.type === 'good' ? (
            <FiCheckCircle className="text-xl text-jira-blue flex-shrink-0" />
          ) : (
            <FiAlertCircle className="text-xl text-jira-warning flex-shrink-0" />
          )}
          <p className={`font-medium text-sm ${
            compatNote.type === 'excellent' ? 'text-green-900' :
            compatNote.type === 'good' ? 'text-jira-darkBlue' :
            'text-yellow-900'
          }`}>
            {compatNote.message}
          </p>
        </div>
      )}

      {/* Frontend Framework */}
      <div className="card">
        <label className="label text-xs">Frontend Framework</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {frontendOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateTechStack({ frontend: option.value })}
              className={`p-2 rounded border transition-all text-left text-sm ${
                techStack.frontend === option.value
                  ? 'border-jira-blue bg-primary-50 text-jira-blue font-medium shadow-jira'
                  : 'border-jira-border text-jira-textSecondary hover:border-jira-blue hover:shadow-jira'
              }`}
            >
              <div className="font-medium mb-0.5">{option.label}</div>
              <div className="text-xs opacity-75">{option.note}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Backend Stack */}
      <div className="card">
        <label className="label text-xs">Backend Stack</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {backendOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateTechStack({ backend: option.value })}
              className={`p-2 rounded border transition-all text-left text-sm ${
                techStack.backend === option.value
                  ? 'border-jira-blue bg-primary-50 text-jira-blue font-medium shadow-jira'
                  : 'border-jira-border text-jira-textSecondary hover:border-jira-blue hover:shadow-jira'
              }`}
            >
              <div className="font-medium mb-0.5">{option.label}</div>
              <div className="text-xs opacity-75">{option.note}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Database */}
      <div className="card">
        <label className="label text-xs">Database</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {databaseOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateTechStack({ database: option.value })}
              className={`p-2 rounded border transition-all text-left text-sm ${
                techStack.database === option.value
                  ? 'border-jira-blue bg-primary-50 text-jira-blue font-medium shadow-jira'
                  : 'border-jira-border text-jira-textSecondary hover:border-jira-blue hover:shadow-jira'
              }`}
            >
              <div className="font-medium mb-0.5">{option.label}</div>
              <div className="text-xs opacity-75">{option.note}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Platform */}
      <div className="card">
        <label className="label text-xs">Mobile Platform (Optional)</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {[
            { value: 'none' as MobilePlatform, label: 'No Mobile', note: 'Web only' },
            { value: 'react-native' as MobilePlatform, label: 'React Native', note: '+30% time' },
            { value: 'flutter' as MobilePlatform, label: 'Flutter', note: '+25% time' },
            { value: 'swift' as MobilePlatform, label: 'Swift (iOS)', note: '+40% time' },
            { value: 'kotlin' as MobilePlatform, label: 'Kotlin (Android)', note: '+40% time' },
            { value: 'ionic' as MobilePlatform, label: 'Ionic', note: '+20% time' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => updateTechStack({ mobile: option.value })}
              className={`p-2 rounded border transition-all text-left text-sm ${
                techStack.mobile === option.value
                  ? 'border-jira-blue bg-primary-50 text-jira-blue font-medium shadow-jira'
                  : 'border-jira-border text-jira-textSecondary hover:border-jira-blue hover:shadow-jira'
              }`}
            >
              <div className="font-medium mb-0.5">{option.label}</div>
              <div className="text-xs opacity-75">{option.note}</div>
            </button>
          ))}
        </div>
      </div>

      {/* UI Library */}
      <div className="card">
        <label className="label text-xs">UI Library/Framework</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {[
            { value: 'tailwind' as UILibrary, label: 'Tailwind CSS', note: '-5% time' },
            { value: 'bootstrap' as UILibrary, label: 'Bootstrap', note: '-10% time' },
            { value: 'material-ui' as UILibrary, label: 'Material UI', note: '+5% time' },
            { value: 'ant-design' as UILibrary, label: 'Ant Design', note: '+8% time' },
            { value: 'chakra-ui' as UILibrary, label: 'Chakra UI', note: 'Base time' },
            { value: 'shadcn-ui' as UILibrary, label: 'shadcn/ui', note: '-5% time' },
            { value: 'mantine' as UILibrary, label: 'Mantine', note: 'Base time' },
            { value: 'none' as UILibrary, label: 'Custom CSS', note: 'Base time' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => updateTechStack({ uiLibrary: option.value })}
              className={`p-2 rounded border transition-all text-left text-sm ${
                techStack.uiLibrary === option.value
                  ? 'border-jira-blue bg-primary-50 text-jira-blue font-medium shadow-jira'
                  : 'border-jira-border text-jira-textSecondary hover:border-jira-blue hover:shadow-jira'
              }`}
            >
              <div className="font-medium mb-0.5">{option.label}</div>
              <div className="text-xs opacity-75">{option.note}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Hosting Platform */}
      <div className="card">
        <label className="label text-xs">Hosting Platform</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          {[
            { value: 'vercel' as HostingPlatform, label: 'Vercel', note: '+2% cost' },
            { value: 'netlify' as HostingPlatform, label: 'Netlify', note: '+2% cost' },
            { value: 'aws' as HostingPlatform, label: 'AWS', note: '+15% cost' },
            { value: 'google-cloud' as HostingPlatform, label: 'Google Cloud', note: '+15% cost' },
            { value: 'azure' as HostingPlatform, label: 'Azure', note: '+18% cost' },
            { value: 'digitalocean' as HostingPlatform, label: 'DigitalOcean', note: '+8% cost' },
            { value: 'heroku' as HostingPlatform, label: 'Heroku', note: '+5% cost' },
            { value: 'railway' as HostingPlatform, label: 'Railway', note: '+3% cost' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => updateTechStack({ hosting: option.value })}
              className={`p-2 rounded border transition-all text-left text-sm ${
                techStack.hosting === option.value
                  ? 'border-jira-blue bg-primary-50 text-jira-blue font-medium shadow-jira'
                  : 'border-jira-border text-jira-textSecondary hover:border-jira-blue hover:shadow-jira'
              }`}
            >
              <div className="font-medium mb-0.5">{option.label}</div>
              <div className="text-xs opacity-75">{option.note}</div>
            </button>
          ))}
        </div>
      </div>

      {/* DevOps & Infrastructure */}
      <div className="card">
        <label className="label text-xs">DevOps & Infrastructure</label>
        <div className="space-y-1.5 mt-2">
          <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded transition-colors text-sm">
            <input
              type="checkbox"
              checked={techStack.cloud}
              onChange={(e) => updateTechStack({ cloud: e.target.checked })}
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-jira-darkBlue">Cloud Storage (S3, GCS)</div>
              <div className="text-xs text-jira-textSecondary">+10 hours setup</div>
            </div>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded transition-colors text-sm">
            <input
              type="checkbox"
              checked={techStack.cdn}
              onChange={(e) => updateTechStack({ cdn: e.target.checked })}
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-jira-darkBlue">CDN (CloudFlare, Fastly)</div>
              <div className="text-xs text-jira-textSecondary">+8 hours setup</div>
            </div>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded transition-colors text-sm">
            <input
              type="checkbox"
              checked={techStack.cicd}
              onChange={(e) => updateTechStack({ cicd: e.target.checked })}
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-jira-darkBlue">CI/CD Pipeline (GitHub Actions, Jenkins)</div>
              <div className="text-xs text-jira-textSecondary">+20 hours setup</div>
            </div>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded transition-colors text-sm">
            <input
              type="checkbox"
              checked={techStack.docker}
              onChange={(e) => updateTechStack({ docker: e.target.checked })}
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-jira-darkBlue">Docker Containerization</div>
              <div className="text-xs text-jira-textSecondary">+15 hours setup</div>
            </div>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded transition-colors text-sm">
            <input
              type="checkbox"
              checked={techStack.kubernetes}
              onChange={(e) => updateTechStack({ kubernetes: e.target.checked })}
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-jira-darkBlue">Kubernetes Orchestration</div>
              <div className="text-xs text-jira-textSecondary">+40 hours setup</div>
            </div>
          </label>
        </div>
      </div>

      {/* Recommendations Modal */}
      {showRecommendations && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded shadow-jira-lg max-w-4xl w-full p-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-jira-darkBlue">Recommended Technology Stacks</h3>
              <button
                onClick={() => setShowRecommendations(false)}
                className="text-jira-textSecondary hover:text-jira-error transition-colors"
              >
                <FiX className="text-2xl" />
              </button>
            </div>
            
            <p className="text-jira-textSecondary text-sm mb-6">
              Choose a proven combination that works well together
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {RECOMMENDED_STACKS.map((stack) => (
                <div
                  key={stack.id}
                  className="border border-jira-border rounded p-4 hover:shadow-jira-md transition-all"
                >
                  <h4 className="font-semibold text-jira-darkBlue mb-2">{stack.name}</h4>
                  <p className="text-xs text-jira-textSecondary mb-3">{stack.description}</p>
                  
                  <div className="text-xs mb-3 text-jira-textSecondary">
                    <strong className="text-jira-darkBlue">Best for:</strong> {stack.bestFor.join(', ')}
                  </div>

                  <div className="mb-3">
                    <div className="text-xs font-semibold text-jira-success mb-1 uppercase tracking-wide">Pros:</div>
                    <ul className="text-xs text-jira-textSecondary space-y-1">
                      {stack.pros.slice(0, 2).map((pro, idx) => (
                        <li key={idx} className="flex items-start space-x-1">
                          <span className="text-jira-success">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {stack.cons.length > 0 && (
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-jira-warning mb-1 uppercase tracking-wide">Cons:</div>
                      <ul className="text-xs text-jira-textSecondary space-y-1">
                        {stack.cons.slice(0, 2).map((con, idx) => (
                          <li key={idx} className="flex items-start space-x-1">
                            <span className="text-jira-warning">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => applyRecommendedStack(stack.id)}
                    className="w-full btn-primary text-sm"
                  >
                    Use This Stack
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded border border-jira-blue">
              <div className="flex items-start space-x-2">
                <FiInfo className="text-lg text-jira-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-jira-darkBlue mb-1 text-sm">Still not sure?</h4>
                  <p className="text-xs text-jira-textSecondary">
                    The <strong>Modern JavaScript Stack</strong> (React + Node.js + PostgreSQL) is the most popular choice 
                    and works great for 80% of projects. It's a safe bet if you're unsure!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
