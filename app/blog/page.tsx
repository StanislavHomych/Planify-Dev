'use client';

import Link from 'next/link';
import * as Fi from 'react-icons/fi';

const articles = [
  {
    slug: 'about-us',
    title: 'About Us',
    date: '29/12/2025',
    excerpt: 'Learn about Projecto, an independent online service designed to help teams and businesses estimate software projects more clearly and efficiently.'
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    date: '29/12/2025',
    excerpt: 'Projecto respects user privacy and is committed to protecting personal and project-related data.'
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    date: '29/12/2025',
    excerpt: 'By using Projecto, you agree to the following terms regarding the use of our estimation and planning tool.'
  },
  {
    slug: 'contact-us',
    title: 'Contact Us',
    date: '29/12/2025',
    excerpt: 'If you have questions about Projecto, the website, or how the service works, you can reach us using the contact information below.'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-jira-background">
      {/* Header */}
      <header className="bg-white border-b border-jira-border sticky top-0 z-50 shadow-jira">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-jira-blue rounded flex items-center justify-center">
                <Fi.FiGrid className="text-2xl text-white" />
              </div>
              <span className="text-2xl font-bold text-jira-darkBlue">Projekto</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-jira-textSecondary hover:text-jira-blue transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-jira-blue">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium text-jira-textSecondary hover:text-jira-blue transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-jira-darkBlue mb-8">Blog</h1>
        
        <div className="space-y-6">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="card block p-6 hover:shadow-jira-md transition-all duration-150"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-bold text-jira-darkBlue hover:text-jira-blue transition-colors">
                  {article.title}
                </h2>
                <span className="text-sm text-jira-textSecondary whitespace-nowrap ml-4">
                  {article.date}
                </span>
              </div>
              <p className="text-jira-textSecondary leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-4 inline-flex items-center text-jira-blue hover:underline">
                <span className="text-sm font-medium">Read more</span>
                <Fi.FiArrowRight className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-jira-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-jira-blue rounded flex items-center justify-center">
                  <Fi.FiGrid className="text-2xl text-white" />
                </div>
                <span className="text-2xl font-bold text-jira-darkBlue">Projekto</span>
              </div>
              <p className="text-sm text-jira-textSecondary">
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
              </ul>
            </div>

            <div>
              <h3 className="text-jira-darkBlue font-semibold mb-4 text-sm uppercase tracking-wide">LEGAL</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/privacy-policy" className="text-jira-textSecondary hover:text-jira-blue transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/blog/terms-of-service" className="text-jira-textSecondary hover:text-jira-blue transition-colors">
                    Terms of Service
                  </Link>
                </li>
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
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-jira-border my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-jira-textSecondary">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Projekto. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/blog/privacy-policy" className="hover:text-jira-blue transition-colors">
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
