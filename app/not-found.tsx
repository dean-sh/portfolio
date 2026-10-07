import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { StudyRow } from '@/components/StudyRow';
import { WORK } from '@/content/work';

// Next adds its own noindex to a 404. Clearing the layout's robots and share tags leaves that as the only directive.
export const metadata: Metadata = { title: 'Page not found', robots: null, openGraph: null, twitter: null };

export default function NotFound() {
  return (
    <div className="container grid gap-14 pb-24 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <p className="meta font-mono">404</p>
        <h1 className="mt-4 font-serif text-[clamp(2.4rem,1.5rem+3.4vw,4.4rem)] leading-[1.04] tracking-[-0.015em]">
          Page not found
        </h1>
        <p className="mt-6 text-muted-foreground">There&apos;s nothing at this address.</p>
        <Link
          href="/"
          className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors hover:text-signal"
        >
          <Arrow direction="left" className="transition-transform duration-300 group-hover:-translate-x-1" />
          Home
        </Link>
      </div>
      <section aria-labelledby="selected-work" className="lg:col-span-7 lg:pt-2">
        <h2 id="selected-work" className="eyebrow font-sans">
          Selected work
        </h2>
        <ul className="mt-4 border-b border-border">
          {WORK.map((study) => (
            <li key={study.slug}>
              <StudyRow study={study} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
