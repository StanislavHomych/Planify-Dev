'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    date: '29/12/2025',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto respects user privacy and is committed to protecting personal and project-related data.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Information We Process</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto processes only the information that users voluntarily provide while using the service. This may include project-related details such as scope descriptions, technology stack selections, team roles, timelines, and cost estimates entered by the user.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto does not require mandatory account creation, personal identification, or contact details in order to use the core functionality of the website.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">How Data Is Used</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          User-provided information is used exclusively to:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>generate project estimates and structured summaries,</li>
          <li>organize and present project scope, team composition, and technology choices,</li>
          <li>improve clarity and usability of project planning outputs.</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Project data is not used for advertising personalization, marketing profiling, or resale.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Data Storage</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Project information is processed only to deliver the requested estimation and planning features. Data is not stored permanently beyond what is technically necessary to provide the service.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto does not create user profiles, databases of personal information, or behavioral tracking based on project content.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Third-Party Services</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          The website may use standard analytics and advertising services (such as Google Analytics or Google AdSense) to support site operation and maintenance. These third-party services may use cookies or similar technologies in accordance with their own privacy policies.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto does not share user-provided project data with third parties.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">User Consent</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          By using Projecto and submitting project information, users confirm that they have the right to use the provided data and consent to its processing for the purpose of generating project estimates and planning insights.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Cookies and Tracking Technologies</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto may use cookies and similar tracking technologies to enhance user experience, analyze site usage, and support website functionality. These technologies help us understand how users interact with the service and improve our platform.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Users can control cookie preferences through their browser settings. However, disabling certain cookies may affect the functionality of the website.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Data Security</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          We implement appropriate technical and organizational measures to protect user data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          While we strive to protect your information, we cannot guarantee absolute security of data transmitted to or stored on our servers.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">User Rights</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Users have the right to:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>access and review their project data,</li>
          <li>delete or remove their project information at any time,</li>
          <li>export their project data for their own use,</li>
          <li>withdraw consent for data processing, subject to technical limitations.</li>
        </ul>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          To exercise these rights, users can contact us using the contact information provided on our website.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Children's Privacy</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto is not intended for users under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information promptly.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">International Data Transfers</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto may process and store user data in servers located outside the user's country of residence. By using the service, users consent to the transfer of their data to such locations, which may have different data protection laws than their home country.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Changes to This Privacy Policy</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last updated" date at the top of this policy.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          We encourage users to review this Privacy Policy periodically to stay informed about how we collect, use, and protect their information. Continued use of the service after changes indicates acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Contact Information</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
        </p>
        <div className="mb-6">
          <a 
            href="mailto:hello@affsquad.com" 
            className="text-jira-blue hover:underline text-lg"
          >
            hello@affsquad.com
          </a>
        </div>
      </div>
    )
  },
  'terms-of-service': {
    title: 'Terms of Service',
    date: '29/12/2025',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          By using Projecto, you agree to the following terms.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Service Description</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto provides an automated project estimation and planning tool. The service helps users structure project scope, technology stack, team composition, timelines, and cost estimates based on user-provided inputs.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          The service is provided "as is" and for informational and planning purposes only.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">User Responsibilities</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Users are responsible for:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>providing only information they own or have the right to use,</li>
          <li>ensuring that all submitted project details are accurate and lawful,</li>
          <li>using Projecto in compliance with applicable laws and regulations.</li>
        </ul>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">No Guarantees</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          While we strive to provide clear and consistent estimation outputs, Projecto does not guarantee that generated estimates are complete, error-free, or suitable for making business, legal, or financial decisions.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          All outputs should be considered approximate planning tools, not professional advice.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Intellectual Property</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          All website content, branding, design, and software logic belong to Projecto unless otherwise stated.
        </p>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Users retain full ownership of all project data and information they provide to the service.
        </p>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Limitation of Liability</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-4">
          Projecto is not responsible for:
        </p>
        <ul className="list-disc list-inside text-jira-textSecondary mb-4 space-y-2 ml-4">
          <li>decisions made based on generated estimates or planning outputs,</li>
          <li>data loss caused by user error or misuse of the service,</li>
          <li>interruptions, delays, or temporary unavailability of the website.</li>
        </ul>

        <h2 className="text-2xl font-bold text-jira-darkBlue mb-4 mt-8">Changes to These Terms</h2>
        <p className="text-jira-textSecondary leading-relaxed mb-6">
          Projecto may update these Terms of Service from time to time. Continued use of the service after changes indicates acceptance of the updated terms.
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
  }
};

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

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

      {/* JSON-LD Structured Data */}
      {'faqSchema' in article && article.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(article.faqSchema)
          }}
        />
      )}
    </div>
  );
}

