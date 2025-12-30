'use client';

import Link from 'next/link';
import * as Fi from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-jira-background">
      {/* Header */}
      <header className="bg-white border-b border-jira-border sticky top-0 z-50 shadow-jira">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-jira-blue rounded flex items-center justify-center">
                <Fi.FiGrid className="text-xl sm:text-2xl text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-jira-darkBlue">Projekto</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-jira-textSecondary hover:text-jira-blue transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-jira-textSecondary hover:text-jira-blue transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium text-jira-textSecondary hover:text-jira-blue transition-colors">
                Contact
              </Link>
            </div>
            <Link href="/calculator" className="md:hidden btn-primary text-sm px-3 py-1.5">
              Start
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
      
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-jira-darkBlue mb-4 sm:mb-6 leading-tight px-2">
            <span className="relative inline-block">
              <span className="relative !z-20">
                Calculate Your Project Cost
              </span>
              <svg 
                className="absolute -bottom-1 left-0 w-full h-7 pointer-events-none overflow-visible"
                viewBox="0 0 600 40" 
                preserveAspectRatio="none"
                style={{ zIndex: 1 }}
              >
                <path
                  d="M 0 28 Q 50 12, 100 32 Q 150 15, 200 28 Q 250 18, 300 30 Q 350 16, 400 28 Q 450 20, 500 30 Q 550 18, 600 26"
                  stroke="#FFEB3B"
                  strokeWidth="21"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="1"
                  strokeDasharray="600"
                  strokeDashoffset="600"
                  className="marker-path"
                />
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-jira-textSecondary mb-8 sm:mb-12 leading-relaxed px-2">
            Professional calculator for estimating time and budget for web and mobile app development
          </p>
          
          <Link href="/calculator" className="btn-primary text-base sm:text-lg inline-flex items-center space-x-2 px-6 py-3">
            <span>Start Calculation</span>
            <Fi.FiArrowRight className="text-lg sm:text-xl" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-5xl mx-auto">
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
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-jira-darkBlue px-2">How It Works?</h2>
          
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-jira-border mt-12 sm:mt-20">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-jira-blue rounded flex items-center justify-center">
                  <Fi.FiGrid className="text-xl sm:text-2xl text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-jira-darkBlue">Projekto</span>
              </div>
              <p className="text-xs sm:text-sm text-jira-textSecondary">
                {/* Description will be added later */}
              </p>
            </div>

            {/* Navigation Columns */}
            <div>
              <h3 className="text-jira-darkBlue font-semibold mb-4 text-sm uppercase tracking-wide">PRODUCT</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-jira-textSecondary hover:text-jira-blue transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/calculator" className="text-jira-textSecondary hover:text-jira-blue transition-colors">
                    Calculator
                  </Link>
                </li>
                {/* More links will be added later */}
              </ul>
            </div>

            <div>
              <h3 className="text-jira-darkBlue font-semibold mb-4 text-sm uppercase tracking-wide">LEGAL</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-jira-textSecondary hover:text-jira-blue transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/blog/terms-of-service" className="text-jira-textSecondary hover:text-jira-blue transition-colors">
                    Terms of Service
                  </Link>
                </li>
                {/* More links will be added later */}
              </ul>
            </div>

            <div>
              <h3 className="text-jira-darkBlue font-semibold mb-4 text-sm uppercase tracking-wide">RESOURCES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-jira-textSecondary hover:text-jira-blue transition-colors">
                    Blog
                  </Link>
                </li>
                {/* More links will be added later */}
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-jira-border my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-jira-textSecondary gap-3 sm:gap-0">
            <div>
              <p>© 2025 Projekto. All rights reserved.</p>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <Link href="/privacy" className="hover:text-jira-blue transition-colors">
                Privacy
              </Link>
              <span className="text-jira-border">•</span>
              <Link href="/blog/terms-of-service" className="hover:text-jira-blue transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

