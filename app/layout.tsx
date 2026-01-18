import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import GoogleTagManager from '@/components/GoogleTagManager';
import GoogleAdSense from '@/components/GoogleAdSense';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Development Cost Calculator | EstimateCalc',
  description: 'Calculate the cost and time for your project development',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://projecto-calculator.com/#organization',
              name: 'Projecto',
              url: 'https://projecto-calculator.com/',
              description:
                'Projecto is a professional calculator for estimating time and budget for web and mobile app development projects.',
              logo: {
                '@type': 'ImageObject',
                url: 'https://projecto-calculator.com/logo.png',
              },
              sameAs: [
                'https://www.facebook.com/people/Projecto-Calculator/61586748986123/',
                'https://www.instagram.com/projecto_calculator/',
                'https://www.youtube.com/@projecto_calculator',
                'https://www.threads.com/@projecto_calculator',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              '@id': 'https://projecto-calculator.com/#webapp',
              name: 'Projecto Calculator',
              url: 'https://projecto-calculator.com/',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'Projecto is a professional calculator for estimating time and budget for web and mobile app development projects. Configure team, design scope, features, tech stack, QA, and buffers to generate a cost and timeline estimate.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              creator: {
                '@type': 'Organization',
                '@id': 'https://projecto-calculator.com/#organization',
              },
              publisher: {
                '@type': 'Organization',
                '@id': 'https://projecto-calculator.com/#organization',
              },
              image: 'https://projecto-calculator.com/og-image.png',
              inLanguage: 'en',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAdSense />
        <GoogleTagManager />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHQZVH2P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

