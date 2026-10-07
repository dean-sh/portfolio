import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { Chart } from '@/components/Chart';
import { Photo } from '@/components/Photo';
import { Pipeline } from '@/components/Pipeline';
import { OPEN_GRAPH } from '@/lib/metadata';
import { ALL_CASE_STUDIES, findCaseStudy, formatIndex, workImage, type CaseStudyEntry } from '@/lib/work';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ALL_CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const entry = findCaseStudy(params.slug);
  if (!entry) return {};
  const { study } = entry;
  const url = `/work/${study.slug}`;
  return {
    title: study.title,
    description: study.hook,
    alternates: { canonical: url },
    openGraph: { ...OPEN_GRAPH, type: 'article', url, title: study.title, description: study.hook },
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const entry = findCaseStudy(params.slug);
  if (!entry) notFound();
  return <CaseStudy entry={entry} />;
}

const SECTIONS = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'results', label: 'Results' },
  { id: 'decisions', label: 'Key decisions' },
] as const;

function SectionHeading({ id, index, children }: { id: string; index: number; children: string }) {
  return (
    <h2 id={id} className="scroll-mt-24 font-serif text-[1.75rem] leading-tight tracking-[-0.01em] md:text-[2rem]">
      <span aria-hidden="true" className="mr-3 align-middle font-mono text-sm text-signal">
        {String(index).padStart(2, '0')}
      </span>
      {children}
    </h2>
  );
}

function CaseStudy({ entry }: { entry: CaseStudyEntry }) {
  const { study, next } = entry;
  const facts = [
    { label: 'Role', value: study.role },
    { label: 'Stack', value: study.stack.join(', ') },
  ];
  return (
    <article className="container pb-24 pt-10">
      <Link
        href="/#work"
        className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <Arrow direction="left" className="transition-transform duration-300 group-hover:-translate-x-1" />
        All work
      </Link>

      <header className="rise mt-8 md:mt-12">
        <p className="meta">
          {study.org} · {study.period}
        </p>
        <h1 className="mt-4 max-w-[20ch] font-serif text-[clamp(2.6rem,1.6rem+3.6vw,4.6rem)] leading-[1.02] tracking-[-0.02em] text-balance">
          {study.title}
        </h1>
        <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-12 lg:gap-12">
          <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground lg:col-span-7">{study.summary}</p>
          <dl className="grid content-start gap-5 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:grid-cols-1 lg:pt-1.5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <ul
        className="panel rise mt-12 flex flex-wrap gap-x-16 gap-y-8 p-6 md:mt-16 md:p-8 lg:px-10"
        style={{ '--i': 1 } as CSSProperties}
      >
        {study.metrics.map((m) => (
          <li key={m.label} className="min-w-0 max-w-[17rem]">
            <p className="font-mono text-4xl tracking-tight text-signal md:text-5xl">{m.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 md:mt-8" data-reveal="">
        <Photo
          src={workImage(study.slug)}
          priority
          sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1215px) calc(100vw - 4rem), 1088px"
          className="aspect-[16/10] md:aspect-[21/9]"
        />
      </div>

      <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav aria-label="On this page" className="sticky top-28">
            <p className="eyebrow">On this page</p>
            <ol className="mt-3 space-y-1">
              {SECTIONS.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex min-h-9 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span aria-hidden="true" className="font-mono text-xs text-signal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="min-w-0 lg:col-span-9">
          <section className="max-w-[44rem]" data-reveal="">
            <SectionHeading id="how-it-works" index={1}>
              How it works
            </SectionHeading>
            <div className="mt-8">
              <Pipeline stages={study.pipeline.stages} caption={study.pipeline.caption} />
            </div>
          </section>

          <section className="mt-20" data-reveal="">
            <SectionHeading id="results" index={2}>
              Results
            </SectionHeading>
            {study.chart && (
              <div className="panel mt-8 p-5 md:p-8">
                <Chart chart={study.chart} />
              </div>
            )}
            <div className="mt-8 max-w-[44rem] space-y-4">
              {study.results.map((r) => (
                <p key={r} className="text-lg leading-relaxed">
                  {r}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-20 max-w-[44rem]" data-reveal="">
            <SectionHeading id="decisions" index={3}>
              Key decisions
            </SectionHeading>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {study.decisions.map((d, i) => (
                <li key={d.title} className="grid grid-cols-[2rem_1fr] gap-x-4 py-6">
                  <span className="pt-1 font-mono text-xs tabular-nums text-signal">{formatIndex(i)}</span>
                  <div>
                    <h3 className="font-sans text-lg font-medium leading-snug">{d.title}</h3>
                    <p className="mt-2 text-[0.975rem] leading-[1.7] text-muted-foreground">{d.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      <nav aria-label="More case studies" className="mt-24 border-t border-border pt-10 md:mt-32 md:pt-12" data-reveal="">
        <Link href={`/work/${next.slug}`} className="group grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
          <span className="block md:col-span-7">
            <span className="meta block">Next case study</span>
            <span className="mt-4 block font-serif text-3xl leading-[1.1] tracking-[-0.01em] text-balance md:text-4xl lg:text-[2.75rem]">
              {next.title}
            </span>
            <Arrow className="mt-6 text-2xl text-signal transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
          <Photo
            src={workImage(next.slug)}
            sizes="(max-width: 767px) calc(100vw - 3rem), 440px"
            className="aspect-[16/9] md:col-span-5"
          />
        </Link>
      </nav>
    </article>
  );
}
