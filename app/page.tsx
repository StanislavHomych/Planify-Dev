'use client';

import Link from 'next/link';
import * as Fi from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-jira-background">
      {/* Header */}
      <header className="bg-white border-b border-jira-border sticky top-0 z-50 shadow-jira">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-jira-blue rounded flex items-center justify-center">
                <Fi.FiGrid className="text-2xl text-white" />
              </div>
              <span className="text-2xl font-bold text-jira-darkBlue">EstimateCalc</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-jira-blue rounded-lg mb-8 shadow-jira-md">
            <Fi.FiGrid className="text-5xl text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-jira-darkBlue mb-6 leading-tight">
            Calculate Your Project Cost
          </h1>
          <p className="text-xl text-jira-textSecondary mb-12 leading-relaxed">
            Professional calculator for estimating time and budget for web and mobile app development
          </p>
          
          <Link href="/calculator" className="btn-primary text-lg inline-flex items-center space-x-2">
            <span>Start Calculation</span>
            <Fi.FiTarget className="text-xl" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          <div className="card text-center hover:shadow-jira-md transition-all duration-150">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-lg mb-4 border border-jira-border">
              <Fi.FiDollarSign className="text-3xl text-jira-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-jira-darkBlue">Accurate Calculations</h3>
            <p className="text-jira-textSecondary text-sm">
              Detailed cost estimation based on real rates and project complexity
            </p>
          </div>

          <div className="card text-center hover:shadow-jira-md transition-all duration-150">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-lg mb-4 border border-jira-border">
              <Fi.FiClock className="text-3xl text-jira-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-jira-darkBlue">Time Estimation</h3>
            <p className="text-jira-textSecondary text-sm">
              Realistic development timelines considering all project stages
            </p>
          </div>

          <div className="card text-center hover:shadow-jira-md transition-all duration-150">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-lg mb-4 border border-jira-border">
              <Fi.FiCheckCircle className="text-3xl text-jira-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-jira-darkBlue">Detailed Breakdown</h3>
            <p className="text-jira-textSecondary text-sm">
              Complete cost breakdown by roles, features, and development stages
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-jira-darkBlue">How It Works?</h2>
          
          <div className="space-y-4">
            <div className="card flex items-start space-x-4 hover:shadow-jira-md transition-all duration-150">
              <div className="flex-shrink-0 w-10 h-10 bg-jira-blue text-white rounded flex items-center justify-center font-bold shadow-jira">
                <Fi.FiUsers className="text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 text-jira-darkBlue">Build Your Team</h3>
                <p className="text-jira-textSecondary text-sm">
                  Select roles, levels, and specify hourly rates for your team
                </p>
              </div>
            </div>

            <div className="card flex items-start space-x-4 hover:shadow-jira-md transition-all duration-150">
              <div className="flex-shrink-0 w-10 h-10 bg-jira-blue text-white rounded flex items-center justify-center font-bold shadow-jira">
                <Fi.FiLayers className="text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 text-jira-darkBlue">Configure Design</h3>
                <p className="text-jira-textSecondary text-sm">
                  Choose design complexity, number of screens, and additional services
                </p>
              </div>
            </div>

            <div className="card flex items-start space-x-4 hover:shadow-jira-md transition-all duration-150">
              <div className="flex-shrink-0 w-10 h-10 bg-jira-blue text-white rounded flex items-center justify-center font-bold shadow-jira">
                <Fi.FiTarget className="text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 text-jira-darkBlue">Select Features</h3>
                <p className="text-jira-textSecondary text-sm">
                  Add required features with realistic development time estimates
                </p>
              </div>
            </div>

            <div className="card flex items-start space-x-4 hover:shadow-jira-md transition-all duration-150">
              <div className="flex-shrink-0 w-10 h-10 bg-jira-blue text-white rounded flex items-center justify-center font-bold shadow-jira">
                <Fi.FiFileText className="text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 text-jira-darkBlue">Get Results</h3>
                <p className="text-jira-textSecondary text-sm">
                  View detailed breakdown with PDF export option
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/calculator" className="btn-primary text-lg inline-flex items-center space-x-2">
              <span>Start Now</span>
              <Fi.FiTarget className="text-xl" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-jira-border mt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-jira-textSecondary text-sm">
            <p>© 2025 EstimateCalc. Project Development Cost Calculator.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

