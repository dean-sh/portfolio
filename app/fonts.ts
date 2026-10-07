import { Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';

export const serif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

// Only the testimonial is italic, so its file loads on demand instead of competing with the hero.
export const serifItalic = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

// The geist package preloads its mono font. Numbers are small and mostly below the fold, so this copy doesn't.
export const mono = localFont({
  src: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
});
