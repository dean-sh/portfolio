import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Nav } from '@/components/Nav';
import { RevealObserver } from '@/components/RevealObserver';
import { HERO, LINKS } from '@/content/site';
import { OPEN_GRAPH } from '@/lib/metadata';
import { JsonLd, SITE_GRAPH } from '@/lib/structured-data';

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: true,
});

const SITE_TITLE = 'Dean Shabi · Engineering lead';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: '%s · Dean Shabi',
  },
  description: HERO.description,
  authors: [{ name: HERO.name }],
  creator: HERO.name,
  metadataBase: new URL(LINKS.site),
  openGraph: {
    ...OPEN_GRAPH,
    type: 'website',
    url: '/',
    title: SITE_TITLE,
    description: HERO.description,
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
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#FAFAFA" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={SITE_GRAPH} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-clip">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav name={HERO.name} />
        <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col focus-visible:[box-shadow:none]">
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
