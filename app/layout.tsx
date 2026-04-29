import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import CalFloatingButton from '@/components/CalFloatingButton';

export const metadata: Metadata = {
  title: 'Dean Shabi | AI Founder & Energy Data Scientist',
  description:
    'Dean Shabi partners with energy leaders to build forecasting, optimisation, and automation systems that deliver measurable impact.',
  keywords: [
    'Dean Shabi',
    'AI founder',
    'energy data scientist',
    'renewable energy forecasting',
    'pricing engine',
    'energy trading',
    'Bloome AI',
  ],
  authors: [{ name: 'Dean Shabi' }],
  creator: 'Dean Shabi',
  metadataBase: new URL('https://deanshabi.com'),
  openGraph: {
    title: 'Dean Shabi | AI Founder & Energy Data Scientist',
    description:
      'AI founder and senior data scientist delivering forecasting, pricing, and automation systems for modern energy markets.',
    url: 'https://deanshabi.com',
    siteName: 'Dean Shabi Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dean Shabi - Renewable Energy AI Expert',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dean Shabi | AI Founder & Energy Data Scientist',
    description:
      'Forecasting, optimisation, and automation for renewable energy and trading teams.',
    images: ['/images/og-image.png'],
    creator: '@deanshabi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth overflow-x-hidden"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://deanshabi.com" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0a0a0a"
          media="(prefers-color-scheme: dark)"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var storageKey = 'theme';
                var root = document.documentElement;
                function setTheme(t) {
                  if (t === 'dark') { root.classList.add('dark'); }
                  else { root.classList.remove('dark'); }
                  root.dataset.theme = t;
                }
                try {
                  var stored = window.localStorage.getItem(storageKey);
                  if (stored === 'light' || stored === 'dark') {
                    setTheme(stored);
                    return;
                  }
                } catch (e) {}
                setTheme('light');
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dean Shabi',
              jobTitle: 'AI Founder & Energy Data Scientist',
              description:
                'Dean Shabi builds forecasting, pricing, and automation systems for UK/EU energy markets.',
              url: 'https://deanshabi.com',
              image: 'https://deanshabi.com/images/profile.png',
              sameAs: [
                'https://linkedin.com/in/dean-shabi',
                'https://github.com/dean-sh',
              ],
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'Data Science',
                'Energy Technology',
                'Renewable Energy',
                'Forecasting',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Bloome AI',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans min-h-screen overflow-x-hidden antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          className="flex min-h-[calc(100vh-12rem)] flex-col"
        >
          {children}
        </main>
        <Footer />
        <CalFloatingButton />
        <Analytics />
      </body>
    </html>
  );
}
