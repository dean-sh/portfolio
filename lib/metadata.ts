import type { Metadata } from 'next';
import { HERO } from '@/content/site';

// A page's openGraph replaces the layout's whole object, so each page spreads these back in.
export const OPEN_GRAPH = { siteName: HERO.name, locale: 'en_GB' } satisfies Metadata['openGraph'];
