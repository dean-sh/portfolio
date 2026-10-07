import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { Chart } from '@/components/Chart';
import { Pipeline } from '@/components/Pipeline';
import { findCaseStudy, formatIndex, type CaseStudyEntry } from '@/lib/work';
import { WORK } from '@/content/work';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return WORK.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const entry = findCaseStudy(params.slug);
  if (!entry) return {};
  const { study } = entry;
  const url = `/work/${study.slug}`;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: study.title,
      description: study.summary,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.summary,
      images: ['/images/og-image.png'],
    },
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const entry = findCaseStudy(params.slug);
  if (!entry) notFound();
  return <CaseStudy entry={entry} />;
}

function CaseStudy({ entry }: { entry: CaseStudyEntry }) {
  const { study, prev, next } = entry;
  const metricColumns = study.metrics.length === 1 ? 'grid-cols-1' : 'grid-cols-2';
  return (
    <article className="container max-w-[52rem] pb-24 pt-10">
      <Link href="/#work" className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground">
        <Arrow direction="left" className="transition-transform duration-300 group-hover:-translate-x-1" />
        Work
      </Link>

      <header className="mt-14">
        <p className="font-mono text-xs text-muted-foreground">
          {study.org} · {study.period} · {study.role}
        </p>
        <h1 className="mt-4 text-display-md text-balance">{study.title}</h1>
        <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.65] text-muted-foreground">{study.summary}</p>
      </header>

      <ul className={`mt-14 grid ${metricColumns} gap-x-6 gap-y-8 border-y border-border py-8`}>
        {study.metrics.map((m) => (
          <li key={m.label} className="min-w-0">
            <p className="break-words font-mono text-2xl tabular-nums tracking-tight text-signal md:text-3xl">{m.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.label}</p>
          </li>
        ))}
      </ul>

      {study.chart && (
        <section className="mt-14 rounded-lg border border-border bg-surface p-5 shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)] md:p-7">
          <Chart chart={study.chart} />
        </section>
      )}

      <section className="mt-14">
        <Pipeline stages={study.pipeline.stages} caption={study.pipeline.caption} />
      </section>

      <section className="mt-14 border-t border-border">
        <ol className="divide-y divide-border">
          {study.decisions.map((d, i) => (
            <li key={d.title}>
              <details className="group py-5">
                <summary className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4">
                  <span className="font-mono text-xs tabular-nums text-signal">{formatIndex(i)}</span>
                  <span className="text-lg leading-snug md:text-xl">{d.title}</span>
                  <span aria-hidden="true" className="font-mono text-xs text-muted-foreground group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden font-mono text-xs text-muted-foreground group-open:inline">−</span>
                </summary>
                <p className="col-start-2 mt-3 max-w-[62ch] pl-[3.5rem] text-base leading-[1.65] text-muted-foreground">{d.body}</p>
              </details>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 border-t border-border pt-8">
        <ul className="max-w-[62ch] space-y-3 text-base leading-[1.65]">
          {study.results.map((r) => (
            <li key={r} className="grid grid-cols-[1.25rem_1fr]">
              <span aria-hidden="true" className="mt-[0.8em] block h-px w-3 bg-signal" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        {study.caveat && <p className="mt-6 max-w-[62ch] text-sm text-muted-foreground">{study.caveat}</p>}
        <p className="mt-8 font-mono text-xs text-muted-foreground">{study.stack.join(' · ')}</p>
      </section>

      <nav className="mt-20 flex justify-between gap-6 border-t border-border pt-8 font-mono text-sm">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="link">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/work/${next.slug}`} className="link text-right">
            {next.title} →
          </Link>
        )}
      </nav>
    </article>
  );
}
