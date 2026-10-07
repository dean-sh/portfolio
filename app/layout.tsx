import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { mono, serif } from './fonts';
import { Nav } from '@/components/Nav';
import { RevealObserver } from '@/components/RevealObserver';
import { HERO, LINKS } from '@/content/site';
import { OPEN_GRAPH } from '@/lib/metadata';

const SITE_TITLE = 'Dean Shabi · Engineering lead';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: '%s · Dean Shabi',
  },
  description: HERO.title,
  authors: [{ name: HERO.name }],
  creator: HERO.name,
  metadataBase: new URL(LINKS.site),
  openGraph: {
    ...OPEN_GRAPH,
    type: 'website',
    url: '/',
    title: SITE_TITLE,
    description: HERO.title,
  },
  // Title, description and image come from each page's openGraph.
  twitter: { card: 'summary_large_image' },
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
  url: LINKS.site,
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
  if (t === 'dark') document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0C0C0E');
  root.classList.add('js');
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
      className={`${GeistSans.variable} ${mono.variable} ${serif.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#FAFAFA" />
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
        <footer className="container pb-16 pt-16 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {HERO.name}
        </footer>
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
