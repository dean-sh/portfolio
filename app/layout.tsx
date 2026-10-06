import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Nav } from '@/components/Nav';
import { HERO, LINKS } from '@/content/site';

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: true,
});

const SITE_URL = 'https://deanshabi.com';
const SITE_TITLE = 'Dean Shabi · Engineering lead';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: '%s · Dean Shabi',
  },
  description: HERO.title,
  authors: [{ name: HERO.name }],
  creator: HERO.name,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_TITLE,
    description: HERO.title,
    url: SITE_URL,
    siteName: HERO.name,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: HERO.name,
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: HERO.title,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: HERO.name,
  jobTitle: 'Engineering Lead',
  description: HERO.title,
  url: SITE_URL,
  email: `mailto:${LINKS.email}`,
  sameAs: [LINKS.linkedin, LINKS.github],
  knowsAbout: [
    'Machine Learning',
    'Forecasting',
    'Renewable Energy',
    'Autonomous Agents',
    'Data Science',
  ],
};

const themeScript = `
(function () {
  var root = document.documentElement;
  var t = 'light';
  try {
    var stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') t = stored;
  } catch (e) {}
  root.classList.toggle('dark', t === 'dark');
  root.dataset.theme = t;
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FAF9F7" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#121418" media="(prefers-color-scheme: dark)" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-clip">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav name={HERO.name} />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <footer className="container pb-16 pt-16 font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {HERO.name}
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
