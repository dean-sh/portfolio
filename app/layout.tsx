import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit', 
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Dean Shabi | AI Founder & Energy Data Scientist',
  description: 'Dean Shabi partners with energy leaders to build forecasting, optimisation, and automation systems that deliver measurable impact.',
  keywords: ['Dean Shabi', 'AI founder', 'energy data scientist', 'renewable energy forecasting', 'pricing engine', 'energy trading', 'Bloome AI'],
  authors: [{ name: 'Dean Shabi' }],
  creator: 'Dean Shabi',
  metadataBase: new URL('https://deanshabi.com'),
  openGraph: {
    title: 'Dean Shabi | AI Founder & Energy Data Scientist',
    description: 'AI founder and senior data scientist delivering forecasting, pricing, and automation systems for modern energy markets.',
    url: 'https://deanshabi.com',
    siteName: 'Dean Shabi Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dean Shabi - Renewable Energy AI Expert',
      }
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dean Shabi | AI Founder & Energy Data Scientist',
    description: 'Forecasting, optimisation, and automation for renewable energy and trading teams.',
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
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://deanshabi.com" />
        <meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storageKey = 'theme';
                const classNameDark = 'dark';
                const root = document.documentElement;
                const setTheme = (theme) => {
                  if (theme === 'dark') {
                    root.classList.add(classNameDark);
                  } else {
                    root.classList.remove(classNameDark);
                  }
                  root.dataset.theme = theme;
                };
                try {
                  const stored = window.localStorage.getItem(storageKey);
                  if (stored === 'light' || stored === 'dark') {
                    setTheme(stored);
                    return;
                  }
                } catch (error) {
                  console.warn('Unable to access theme storage:', error);
                }
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                setTheme(mql.matches ? 'dark' : 'light');
              })();
            `,
          }}
        />
        
        {/* Google Calendar Scheduling */}
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dean Shabi",
              "jobTitle": "AI Founder & Energy Data Scientist",
              "description": "Dean Shabi builds forecasting, pricing, and automation systems for UK/EU energy markets.",
              "url": "https://deanshabi.com",
              "image": "https://deanshabi.com/images/profile.png",
              "sameAs": [
                "https://linkedin.com/in/dean-shabi",
                "https://github.com/dean-sh"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Energy Technology",
                "Renewable Energy",
                "Forecasting",
                "Python",
                "Energy Markets"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Bloome AI",
                "description": "AI automation workflows for energy operations"
              }
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans min-h-screen overflow-x-hidden`}> 
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex min-h-[calc(100vh-12rem)] flex-col">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
} 
