'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';
import * as Fi from 'react-icons/fi';

const articles = {
  'about-us': {
    title: 'About Us',
    date: '29/12/2025',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto is an independent online service designed to help teams and businesses estimate software projects more clearly and efficiently.
        </p>

        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Modern digital products require accurate planning, clear scope definition, and transparency around technology choices and team composition. While many estimates are created manually or scattered across documents, Projecto provides a structured way to define project scope, technology stack, team roles, timelines, and cost estimates in one place.
        </p>

        <p className="text-jira-textSecondary leading-relaxed mb-4">
          The platform allows users to create and manage project estimates based on their own inputs. Projecto focuses on clarity, structure, and consistency — helping users turn ideas into well-defined project plans that are easy to review, share, and refine.
        </p>

        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto does not provide project management, hiring, or development services. The website exists solely as an estimation and planning tool that helps users organize project-related information at their request.
        </p>

        <p className="text-jira-textSecondary leading-relaxed mb-8">
          We aim to deliver a simple, transparent, and practical experience for early-stage planning and decision-making. Projecto is an independent product and is not affiliated with any software vendors, development agencies, or third-party platforms.
        </p>

        {/* FAQ Section */}
        <div className="mt-12 border-t border-jira-border pt-8">
          <h2 className="text-2xl font-bold text-jira-darkBlue mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                What is Projecto?
              </h3>
              <p className="text-jira-textSecondary">
                Projecto is an online tool that helps users create structured software project estimates, including scope, technology stack, team roles, timelines, and cost breakdowns.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Who is Projecto for?
              </h3>
              <p className="text-jira-textSecondary">
                Projecto is designed for startups, product managers, founders, agencies, and development teams who need clear and well-organized project estimates.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Do I need to create an account to use Projecto?
              </h3>
              <p className="text-jira-textSecondary">
                No. Projecto can be used without mandatory registration. Some features may be optional and available without creating an account.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Does Projecto build or manage projects?
              </h3>
              <p className="text-jira-textSecondary">
                No. Projecto does not provide development, hiring, or project management services. It is an estimation and planning tool only.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Is Projecto affiliated with any development agencies or software vendors?
              </h3>
              <p className="text-jira-textSecondary">
                No. Projecto is an independent platform and is not affiliated with or endorsed by any agencies, vendors, or third-party services.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Is Projecto free to use?
              </h3>
              <p className="text-jira-textSecondary">
                Core functionality is available for free. Some advanced features may be introduced in the future to support ongoing development and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Projecto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Projecto is an online tool that helps users create structured software project estimates, including scope, technology stack, team roles, timelines, and cost breakdowns."
          }
        },
        {
          "@type": "Question",
          "name": "Who is Projecto for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Projecto is designed for startups, product managers, founders, agencies, and development teams who need clear and well-organized project estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to create an account to use Projecto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Projecto can be used without mandatory registration. Some features may be optional and available without creating an account."
          }
        },
        {
          "@type": "Question",
          "name": "Does Projecto build or manage projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Projecto does not provide development, hiring, or project management services. It is an estimation and planning tool only."
          }
        },
        {
          "@type": "Question",
          "name": "Is Projecto affiliated with any development agencies or software vendors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Projecto is an independent platform and is not affiliated with or endorsed by any agencies, vendors, or third-party services."
          }
        },
        {
          "@type": "Question",
          "name": "Is Projecto free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Core functionality is available for free. Some advanced features may be introduced in the future to support ongoing development and maintenance."
          }
        }
      ]
    }
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    date: '01/01/2026',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          <strong>Last updated: 01.01.2026</strong>
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          At Projecto, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how information is collected, used, and safeguarded when you access or use our website and estimation tools.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">1. Information We Collect</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          We collect information in the following ways:
        </p>
        
        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">Information You Provide</h3>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Data entered into the Projecto calculator (such as project type, features, estimated scope, timelines, or budgets)</li>
          <li>Contact information if you voluntarily reach out to us (for example, via email)</li>
        </ul>

        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">Information Collected Automatically</h3>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>IP address (processed in anonymized or aggregated form where possible)</li>
          <li>Browser and device information</li>
          <li>Pages visited, session duration, and interaction data</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          This information helps us understand how users interact with Projecto and improve the quality of our services.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">2. Purpose of Data Processing</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto processes only the information that users voluntarily provide while using the service. This may include project-related details such as scope descriptions, technology stack selections, team roles, timelines, and cost estimates entered by the user.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto does not require mandatory account creation, personal identification, or contact details in order to use the core functionality of the website.
        </p>

        <p className="text-jira-textSecondary leading-relaxed mb-2">
          We process information in order to:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Provide, maintain, and improve Projecto</li>
          <li>Analyze usage trends and optimize user experience</li>
          <li>Respond to inquiries and provide support</li>
          <li>Ensure platform security and prevent misuse</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto does not sell, rent, or trade personal data.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">3. Cookies and Tracking Technologies</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Projecto uses cookies and similar technologies to:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Enable essential website functionality</li>
          <li>Measure traffic and performance</li>
          <li>Improve usability and content relevance</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          You may control or disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">4. Third-Party Services</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          We may rely on reputable third-party service providers for:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Analytics</li>
          <li>Hosting and infrastructure</li>
          <li>Performance monitoring</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          These providers process data solely on our behalf and in compliance with applicable data-protection regulations.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">5. Data Retention</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Personal data is retained only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">6. Your Rights Under GDPR</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          If you are located in the European Union, you have the right to:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Restrict or object to processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Requests may be submitted by contacting us using the details below.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">7. Data Security</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          We implement appropriate technical and organizational safeguards to protect personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">8. Updates to This Policy</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          This Privacy Policy may be updated periodically. Any changes will be reflected on this page with a revised "Last updated" date.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">9. Contact Information</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          For questions regarding this Privacy Policy, please contact:
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          <strong>Email:</strong>{' '}
          <a 
            href="mailto:hello@affsquad.com" 
            className="text-jira-blue hover:underline"
          >
            hello@affsquad.com
          </a>
        </p>
      </div>
    )
  },
  'terms-of-service': {
    title: 'Terms of Service',
    date: '01/01/2026',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          <strong>Last updated: 01.01.2026</strong>
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          These Terms of Service govern your access to and use of Projecto. By using the website, you agree to these Terms. If you do not agree, please discontinue use of the service.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">1. Service Overview</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto is an online tool designed to provide high-level estimates of development time and budget for web and mobile application projects.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          All outputs are indicative estimates and are provided for informational purposes only.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">2. No Professional Advice or Guarantees</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto does not provide legal, financial, or professional consulting services.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Estimates generated by the platform:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Are not binding quotes</li>
          <li>Do not constitute contractual offers</li>
          <li>May differ from real-world project costs and timelines</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Actual outcomes depend on numerous variables, including scope, requirements, technology choices, and execution.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">3. Acceptable Use</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          By using Projecto, you agree to:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Use the service only for lawful purposes</li>
          <li>Refrain from attempting to disrupt, reverse-engineer, or abuse the platform</li>
          <li>Not misuse or copy the calculator logic, content, or design without authorization</li>
        </ul>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">4. Intellectual Property</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          All intellectual property associated with Projecto — including software logic, content, design elements, and branding — remains the exclusive property of Projecto unless otherwise stated.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Unauthorized reproduction or redistribution is prohibited.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">5. Limitation of Liability</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          To the fullest extent permitted by law:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Projecto shall not be liable for any direct, indirect, incidental, or consequential damages</li>
          <li>We are not responsible for decisions, losses, or outcomes resulting from reliance on calculator estimates</li>
          <li>Use of the service is at your own discretion and risk</li>
        </ul>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">6. Service Availability</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          We aim to ensure reliable availability but do not guarantee uninterrupted or error-free access. We reserve the right to modify, suspend, or discontinue any part of the service at any time.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">7. External Links</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto may include links to third-party websites. We are not responsible for the content, policies, or practices of such external sites.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">8. Governing Law</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          These Terms shall be governed by and interpreted in accordance with the laws of the Republic of Poland and applicable European Union regulations.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">9. Changes to These Terms</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          We may revise these Terms periodically. Continued use of Projecto following any updates constitutes acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">10. Contact Information</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          For questions regarding these Terms, please contact:
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          <strong>Email:</strong>{' '}
          <a 
            href="mailto:hello@affsquad.com" 
            className="text-jira-blue hover:underline"
          >
            hello@affsquad.com
          </a>
        </p>
      </div>
    )
  },
  'contact-us': {
    title: 'Contact Us',
    date: '29/12/2025',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          If you have questions about Projecto, the website, or how the service works, you can reach us using the contact information below.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">We welcome inquiries related to:</h2>
        <ul className="list-disc list-inside text-jira-textSecondary mb-6 space-y-2 ml-4">
          <li>general questions about the platform,</li>
          <li>project estimation and planning features,</li>
          <li>privacy and data handling,</li>
          <li>technical issues or feedback,</li>
          <li>legal or policy-related matters.</li>
        </ul>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">How to Contact Us</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">Email:</h3>
          <a 
            href="mailto:hello@affsquad.com" 
            className="text-jira-blue hover:underline text-lg"
          >
            hello@affsquad.com
          </a>
        </div>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          We aim to respond to all legitimate inquiries within a reasonable timeframe.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">About Communication</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto is an independent online service focused on software project estimation and planning based on user-provided information.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          We do not offer customer support via social media and do not provide phone support at this time.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Please do not send sensitive personal information by email unless it is necessary to address your request.
        </p>
      </div>
    )
  },
  'project-cost-calculation': {
    title: 'How to Calculate Project Cost: A Complete Guide',
    date: '01/01/2026',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Estimating the cost of a software project is one of the most challenging — and most critical — steps in product planning. Inaccurate project cost calculation often leads to budget overruns, missed deadlines, and strained relationships between founders, teams, and stakeholders.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          This guide explains how to calculate project cost realistically, what factors truly influence software development cost, and how modern estimation tools help teams plan with confidence.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">What Is Project Cost Calculation?</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Project cost calculation is the process of estimating the total financial investment required to design, build, test, and deliver a software product.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          A realistic calculation goes far beyond a single number. It considers:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Team composition and hourly rates</li>
          <li>Design scope and complexity</li>
          <li>Feature set and technical requirements</li>
          <li>Quality assurance and testing effort</li>
          <li>Additional costs such as documentation, support, and buffers</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          The goal is not perfection, but a reliable planning range that supports informed decisions.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Why Most Software Projects Go Over Budget</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Many projects exceed their initial budget because estimates are based on assumptions rather than structured analysis.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Common reasons include:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Features defined too vaguely</li>
          <li>Design effort underestimated</li>
          <li>Testing treated as optional</li>
          <li>No buffer for changes or unknowns</li>
          <li>Ignoring post-launch support costs</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          A professional project cost calculation explicitly accounts for these realities instead of hoping they won't happen.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Core Components of Project Cost Calculation</h2>

        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">1. Team Composition and Rates</h3>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Every software project is built by people — and people are the primary cost driver.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          A realistic estimate starts with defining:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Roles (frontend, backend, QA, design, management)</li>
          <li>Skill level (junior, middle, senior)</li>
          <li>Hourly rates</li>
          <li>Number of team members</li>
          <li>Daily availability</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          For example, a single frontend developer working 8 hours per day at $50/hour already represents $400 per day, before adding any other roles.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Ignoring team structure is one of the fastest ways to miscalculate project cost.
        </p>
        <div className="my-6">
          <img 
            src="/image5.png" 
            alt="Software project cost calculation tool showing team roles, hourly rates, and development effort setup"
            className="w-full rounded-lg border border-jira-border"
          />
        </div>

        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">2. Design Complexity and Scope</h3>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Design is not just "making screens look nice." It includes:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>User flows</li>
          <li>Interaction logic</li>
          <li>Responsive layouts</li>
          <li>Platform-specific variations</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Project cost calculation should consider:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Design complexity (simple, medium, complex)</li>
          <li>Number of screens or pages</li>
          <li>Additional services such as branding, illustrations, animations, or 3D assets</li>
          <li>Target platforms (mobile, tablet, desktop)</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          A web app with 10 screens and medium complexity can require weeks of design effort, not days.
        </p>
        <div className="my-6">
          <img 
            src="/image1.png" 
            alt="Design complexity and mockups selection in a software project cost calculation tool, including screens, branding, and responsive design"
            className="w-full rounded-lg border border-jira-border"
          />
        </div>

        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">3. Features and Functional Capabilities</h3>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Features are where most project budgets grow — and where estimation mistakes are most costly.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          A professional calculation breaks features into categories such as:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Authentication and security</li>
          <li>User profiles</li>
          <li>Payments and subscriptions</li>
          <li>Communication features (chat, notifications, video)</li>
          <li>Data handling and search</li>
          <li>Analytics and reporting</li>
          <li>Administration and moderation</li>
          <li>Media processing</li>
          <li>Integrations with third-party services</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Each feature has frontend and backend effort, and often hidden complexity in testing and edge cases.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Counting features without estimating effort is not estimation, it's guessing.
        </p>
        <div className="my-6">
          <img 
            src="/image6.png" 
            alt="Feature selection step in a software project cost calculation tool showing authentication and security features with estimated frontend and backend hours"
            className="w-full rounded-lg border border-jira-border"
          />
        </div>

        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">4. Technology Stack and Architecture</h3>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Technology choices affect:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Development speed</li>
          <li>Maintenance cost</li>
          <li>Scalability</li>
          <li>Security requirements</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Different stacks introduce different complexity levels. For example:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Real-time features require additional backend infrastructure</li>
          <li>Payment systems require compliance and validation logic</li>
          <li>APIs and integrations require coordination with external services</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          A proper project cost calculation aligns technical decisions with business goals, not trends.
        </p>
        <div className="my-6">
          <img 
            src="/image2.png" 
            alt="Technology stack selection modal in a software project cost calculation tool showing recommended frontend and backend stacks"
            className="w-full rounded-lg border border-jira-border"
          />
        </div>

        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">5. Testing and Quality Assurance</h3>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Testing is not optional if reliability matters.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Project cost calculation should include:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Manual testing as a percentage of development time</li>
          <li>Automated tests for medium and large projects</li>
          <li>Coverage of critical business logic</li>
          <li>End-to-end user flow verification</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Industry benchmarks typically allocate 15–25% of development time to QA. Projects that skip this phase often pay much more later.
        </p>
        <div className="my-6">
          <img 
            src="/image3.png" 
            alt="Testing and QA configuration in a software project cost calculation tool showing manual testing percentage and automated testing options"
            className="w-full rounded-lg border border-jira-border"
          />
        </div>

        <h3 className="text-xl font-semibold text-jira-darkBlue mb-3 mt-6">6. Additional and Hidden Costs</h3>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Many estimates fail because they stop at "development complete."
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Real projects often include:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Post-launch support and maintenance</li>
          <li>Technical documentation</li>
          <li>User guides</li>
          <li>Buffer for requirement changes</li>
          <li>Domain, SSL, and third-party service costs</li>
          <li>Software licenses and tooling</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          A buffer of 15–25% is not pessimism — it's realism.
        </p>
        <div className="my-6">
          <img 
            src="/image4.png" 
            alt="Additional costs configuration in a software project cost calculation tool showing support options, documentation, buffers, and third-party expenses"
            className="w-full rounded-lg border border-jira-border"
          />
        </div>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Fixed Price vs Time & Materials</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Understanding pricing models is essential for accurate cost calculation.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          <strong>Fixed price</strong> works best when:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Scope is fully defined</li>
          <li>Requirements are unlikely to change</li>
          <li>Risk is transferred to the vendor (at a premium)</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          <strong>Time & materials</strong> is better when:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Scope evolves</li>
          <li>Flexibility is required</li>
          <li>Transparency matters</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Most modern software projects are better served by estimation ranges, not fixed promises.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Why Single-Number Estimates Fail</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Software development is not manufacturing. Unknowns are inevitable.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Single-number estimates:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Ignore risk</li>
          <li>Create false confidence</li>
          <li>Break trust when reality differs</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Professional project cost calculation uses ranges to reflect uncertainty while still enabling planning.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">How Modern Tools Improve Project Cost Calculation</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Modern estimation tools structure the process by:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Breaking projects into roles, features, and stages</li>
          <li>Applying realistic effort ranges</li>
          <li>Converting effort into cost using real rates</li>
          <li>Making assumptions visible and adjustable</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          This approach mirrors how experienced agencies and product teams plan projects internally.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">How Projecto Calculates Project Cost</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          <Link href="/" className="text-jira-blue hover:underline">Projecto</Link> follows industry-standard estimation principles:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li><strong>Role-based effort modeling:</strong> Each role contributes time based on selected features and scope.</li>
          <li><strong>Design and feature complexity scoring:</strong> Effort scales with screens, interactions, and technical depth.</li>
          <li><strong>Parallel work consideration:</strong> Timelines reflect multiple roles working simultaneously.</li>
          <li><strong>Testing and QA allocation:</strong> Quality assurance is included, not optional.</li>
          <li><strong>Additional costs and buffers:</strong> Real-world overhead is built into the final estimate.</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Results are presented as transparent ranges, not artificial certainty.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">When Should Estimates Be Refined?</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Project cost calculation is iterative.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          You should refine estimates when:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Requirements become clearer</li>
          <li>Technical decisions are finalized</li>
          <li>External dependencies are confirmed</li>
          <li>Scope changes significantly</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Early estimates guide decisions. Later estimates guide execution.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Start Your Project Cost Calculation</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Accurate project cost calculation doesn't require weeks of spreadsheets or guesswork.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-2">
          Using a structured estimation approach allows you to:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>Understand cost drivers</li>
          <li>Compare options</li>
          <li>Plan realistically</li>
          <li>Reduce risk before committing budget</li>
        </ul>
        <div className="my-8 text-center">
          <Link 
            href="/calculator" 
            className="btn-primary text-base sm:text-lg inline-flex items-center space-x-2 px-6 py-3"
          >
            <span>Start Calculation</span>
            <Fi.FiArrowRight className="text-lg sm:text-xl" />
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t border-jira-border pt-8">
          <h2 className="text-2xl font-bold text-jira-darkBlue mb-6">FAQ</h2>
          
          <div className="space-y-6">
            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                What is project cost calculation?
              </h3>
              <p className="text-jira-textSecondary">
                Project cost calculation is the process of estimating the total budget required to design, develop, test, and deliver a software project. It includes team costs, design effort, feature complexity, testing, and buffers for unexpected changes.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Why is project cost calculation difficult for software projects?
              </h3>
              <p className="text-jira-textSecondary">
                Software projects involve changing requirements, technical uncertainty, and multiple roles working in parallel. These factors make single-number or fixed estimates unreliable without structured cost modeling.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                What factors affect project cost calculation the most?
              </h3>
              <p className="text-jira-textSecondary">
                The biggest cost drivers are team composition and hourly rates, design complexity, number and complexity of features, technology stack decisions, testing requirements, and buffers for unforeseen work.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Does project cost calculation include testing and QA?
              </h3>
              <p className="text-jira-textSecondary">
                Yes. A realistic project cost calculation includes both manual and automated testing. Industry best practices typically allocate 15–25% of total development time to quality assurance.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Should project cost estimates be a fixed number?
              </h3>
              <p className="text-jira-textSecondary">
                No. Professional project cost calculation uses ranges rather than fixed numbers to reflect uncertainty, scope changes, and differences in execution between teams.
              </p>
            </div>

            <div className="border-b border-jira-border pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                When should project cost estimates be updated?
              </h3>
              <p className="text-jira-textSecondary">
                Estimates should be refined as requirements become clearer, technical decisions are finalized, and scope changes occur during planning or execution.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-lg font-semibold text-jira-darkBlue mb-2">
                Can project cost calculation be done at the idea stage?
              </h3>
              <p className="text-jira-textSecondary">
                Yes. High-level project cost calculation can be performed early using assumptions about scope, features, and team structure. Accuracy improves as more details are defined.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is project cost calculation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project cost calculation is the process of estimating the total budget required to design, develop, test, and deliver a software project. It includes team costs, design effort, feature complexity, testing, and additional buffers."
          }
        },
        {
          "@type": "Question",
          "name": "Why is project cost calculation difficult for software projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Software projects involve changing requirements, technical uncertainty, and multiple roles working in parallel. These factors make fixed or single-number estimates unreliable without structured cost modeling."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect project cost calculation the most?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The biggest cost drivers are team composition and rates, design complexity, number and complexity of features, technology stack, testing requirements, and buffers for unexpected changes."
          }
        },
        {
          "@type": "Question",
          "name": "Does project cost calculation include testing and QA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A realistic project cost calculation includes manual and automated testing. Industry best practices typically allocate 15–25% of development time to quality assurance."
          }
        },
        {
          "@type": "Question",
          "name": "Should project cost estimates be a fixed number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Professional project cost calculation uses ranges rather than fixed numbers to reflect uncertainty, scope changes, and execution differences."
          }
        },
        {
          "@type": "Question",
          "name": "When should project cost estimates be updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estimates should be refined as project requirements become clearer, technical decisions are finalized, and scope changes occur during planning or execution."
          }
        },
        {
          "@type": "Question",
          "name": "Can project cost calculation be done at the idea stage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. High-level project cost calculation can be done early using assumptions about scope, features, and team structure. Accuracy improves as more details are defined."
          }
        }
      ]
    },
    breadcrumbSchema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://projecto-calculator.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://projecto-calculator.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Project Cost Calculation",
          "item": "https://projecto-calculator.com/blog/project-cost-calculation"
        }
      ]
    }
  }
};

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  // Add JSON-LD schemas to head
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Remove existing schema scripts if any
    const existingScripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.id === 'faq-schema' || script.id === 'breadcrumb-schema') {
        script.remove();
      }
    });

    // Add FAQ schema to head
    if ('faqSchema' in article && article.faqSchema) {
      const faqScript = document.createElement('script');
      faqScript.id = 'faq-schema';
      faqScript.type = 'application/ld+json';
      faqScript.innerHTML = JSON.stringify(article.faqSchema);
      document.head.appendChild(faqScript);
    }

    // Add Breadcrumb schema to head
    if ('breadcrumbSchema' in article && article.breadcrumbSchema) {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.innerHTML = JSON.stringify(article.breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
    }

    // Cleanup function
    return () => {
      const scriptsToRemove = document.head.querySelectorAll('script[id="faq-schema"], script[id="breadcrumb-schema"]');
      scriptsToRemove.forEach(script => script.remove());
    };
  }, [article]);

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
              <Link href="/blog" className="text-sm font-medium text-jira-textSecondary hover:text-jira-blue transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-sm font-medium text-jira-textSecondary hover:text-jira-blue transition-colors">
                About
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
        <Link href="/blog" className="inline-flex items-center text-jira-textSecondary hover:text-jira-blue transition-colors mb-8">
          <Fi.FiArrowLeft className="mr-2" />
          <span>Back to Blog</span>
        </Link>

        <article className="card p-8">
          <div className="mb-4">
            <span className="text-sm text-jira-textSecondary">Last updated: {article.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-jira-darkBlue mb-8">{article.title}</h1>
          
          {article.content}
        </article>
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

