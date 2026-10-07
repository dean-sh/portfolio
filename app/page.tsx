import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { CallButton, Contact } from '@/components/Contact';
import { Contributions } from '@/components/Contributions';
import { Photo } from '@/components/Photo';
import { StudyRow, titleId } from '@/components/StudyRow';
import { SparkBody, Sparkline } from '@/components/Sparkline';
import { physicsFirstSolar } from '@/content/charts';
import type { CaseStudy, Chart, Metric } from '@/content/types';
import { EARLIER, WORK } from '@/content/work';
import { formatIndex, workImage } from '@/lib/work';
import { cn } from '@/lib/utils';
import { HERO, LINKS, NOW, QUOTE } from '@/content/site';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const GITHUB_USER = LINKS.github.split('/').pop() ?? '';
const [featured, panelled, offset, ...closing] = WORK;
const heroStudy = WORK.find((study) => study.slug === 'physics-first-solar')!;
const [heroMetric] = heroStudy.metrics;
// The caption has room for what the number measures, not the date range after the comma.
const heroMetricLabel = heroMetric.label.split(',')[0];

const reveal = (i = 0) => ({ 'data-reveal': '', style: { '--i': i } as CSSProperties });

const SECTION = 'mt-[clamp(4rem,9vw,7rem)]';

const LIFT =
  'transition-[transform,background-color,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-0.5';

const CARD = cn('panel', LIFT, 'group overflow-hidden hover:border-signal/40');

const CARD_GAP = 'gap-6 md:gap-8 lg:gap-10';

const NUDGE = 'transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-signal';

const TITLE = 'font-serif text-[1.6rem] leading-[1.1] tracking-[-0.01em] text-balance md:text-[1.85rem]';

const HOOK = 'max-w-[56ch] text-sm leading-relaxed text-muted-foreground';

function HeadlineVisual({ visual }: { visual: 'portrait' | 'chart' }) {
  if (visual === 'portrait') {
    return (
      <span className="relative mx-[0.12em] inline-block h-[0.8em] w-[0.8em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline ring-1 ring-border">
        <Image src="/images/profile.png" alt="" fill sizes="80px" priority className="object-cover" />
      </span>
    );
  }
  if (physicsFirstSolar.kind !== 'line') return null;
  return (
    <span
      aria-hidden="true"
      className="mx-[0.14em] inline-flex h-[0.66em] w-[1.7em] items-center rounded-full border border-border bg-surface px-[0.16em] align-[0.04em]"
    >
      <Sparkline chart={physicsFirstSolar} className="h-[62%] w-full" />
    </span>
  );
}

function StudyMeta({ study }: { study: CaseStudy }) {
  return (
    <p className="meta">
      <span className="font-mono text-signal">{formatIndex(WORK.indexOf(study))}</span> · {study.org} · {study.period}
    </p>
  );
}

function Stat({ metric, size, className }: { metric: Metric; size: string; className?: string }) {
  return (
    <div className={className}>
      <p className={cn('font-mono leading-none tracking-tight text-signal', size)}>{metric.value}</p>
      <p className="mt-2.5 text-xs leading-snug text-muted-foreground">{metric.label}</p>
    </div>
  );
}

function ReadMore() {
  return (
    <p className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium">
      Read the case study
      <Arrow className={NUDGE} />
    </p>
  );
}

function MiniChart({ chart, size, className }: { chart: Chart; size: string; className?: string }) {
  return (
    <figure className={className}>
      <figcaption className="meta">{chart.sparkLabel}</figcaption>
      <SparkBody chart={chart} className={cn('mt-3 w-full', size)} />
    </figure>
  );
}

export default function Home() {
  return (
    <div className="container">
      <section className="grid gap-10 pb-12 pt-12 md:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-14">
        <div className="rise lg:col-span-7">
          <h1 className="font-serif text-[clamp(2.4rem,1.5rem+3.4vw,4.4rem)] leading-[1.04] tracking-[-0.015em]">
            {HERO.headline.map((segment, i) =>
              'text' in segment ? <span key={i}>{segment.text}</span> : <HeadlineVisual key={i} visual={segment.visual} />,
            )}
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2">
            <CallButton>Book a call</CallButton>
            <a
              href="#work"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Explore my work
              <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <Link href={`/work/${heroStudy.slug}`} className="rise group block lg:col-span-5" style={{ '--i': 1 } as CSSProperties}>
          <Photo
            src={HERO.photo}
            priority
            sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(100vw - 4rem), 440px"
            className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]"
          />
          <span className="mt-3 flex items-start justify-between gap-4 text-xs">
            <span className="inline-flex min-w-0 items-center gap-2 text-muted-foreground transition-colors duration-200 group-hover:text-signal">
              Solar forecasting at Renewcast
              <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
            <span className="shrink-0 text-right">
              <span className="block font-mono text-foreground transition-colors duration-200 group-hover:text-signal">
                {heroMetric.value}
              </span>
              <span className="mt-1 block text-muted-foreground">{heroMetricLabel}</span>
            </span>
          </span>
        </Link>
      </section>

      <ul className="panel rise grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-4" style={{ '--i': 2 } as CSSProperties}>
        {NOW.map((item, i) => (
          <li key={item.label} className="bg-surface p-5 md:p-6">
            <p className="eyebrow flex items-center gap-2.5">
              {i === 0 && <span className="pulse-ring h-2 w-2 rounded-full bg-signal text-signal" />}
              {item.label}
            </p>
            <p className="mt-2 flex min-h-11 items-center font-serif text-[1.7rem] leading-tight">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 transition-colors duration-200 hover:text-signal"
                >
                  {item.value}
                  <Arrow className="h-[0.5em] w-[0.5em] -rotate-45 text-muted-foreground transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:text-signal" />
                </a>
              ) : (
                item.value
              )}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 md:mt-8 lg:mt-10" {...reveal(4)}>
        <Contributions user={GITHUB_USER} />
      </div>

      <section id="work" className={cn(SECTION, 'scroll-mt-20')}>
        <p className="eyebrow" {...reveal(0)}>
          Selected work
        </p>
        <h2
          className="mt-4 font-serif text-[clamp(2.2rem,1.3rem+3vw,3.6rem)] leading-[1.02] tracking-[-0.015em]"
          {...reveal(1)}
        >
          Built to work
          <span className="block text-muted-foreground">outside the notebook.</span>
        </h2>

        <div className={cn('mt-10 grid md:mt-14', CARD_GAP)}>
          <Link
            href={`/work/${featured.slug}`}
            aria-labelledby={titleId(featured)}
            className={cn(CARD, 'grid md:grid-cols-12')}
            {...reveal(2)}
          >
            <Photo
              src={workImage(featured.slug)}
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 620px"
              className="aspect-[4/3] rounded-none rounded-t-2xl md:col-span-6 md:aspect-auto md:min-h-[28rem] md:rounded-none md:rounded-l-2xl lg:col-span-7"
            />
            <div className="min-w-0 p-6 sm:p-8 md:col-span-6 md:self-center md:p-10 lg:col-span-5">
              <StudyMeta study={featured} />
              <h3
                id={titleId(featured)}
                className="mt-4 font-serif text-[clamp(1.9rem,1.4rem+1.4vw,2.6rem)] leading-[1.06] tracking-[-0.012em] text-balance"
              >
                {featured.title}
              </h3>
              <p className={cn(HOOK, 'mt-4 text-[0.975rem]')}>{featured.hook}</p>
              <Stat metric={featured.metrics[0]} size="text-5xl" className="mt-8" />
              {featured.chart && <MiniChart chart={featured.chart} size="h-20 md:h-24" className="mt-8" />}
              <ReadMore />
            </div>
          </Link>

          <div className={cn('grid md:grid-cols-12', CARD_GAP)}>
            <Link
              href={`/work/${panelled.slug}`}
              aria-labelledby={titleId(panelled)}
              className={cn(CARD, 'block p-3 md:col-span-7 md:self-start')}
              {...reveal(0)}
            >
              <Photo
                src={workImage(panelled.slug)}
                sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1151px) 55vw, 610px"
                className="aspect-[16/9] rounded-xl"
              />
              <div className="px-3 pb-4 pt-6 md:px-5 md:pb-6">
                <StudyMeta study={panelled} />
                <h3 id={titleId(panelled)} className={cn(TITLE, 'mt-3')}>
                  {panelled.title}
                </h3>
                <p className={cn(HOOK, 'mt-3')}>{panelled.hook}</p>
                <div className="mt-7 grid grid-cols-2 gap-6 border-t border-border pt-6">
                  {panelled.metrics.slice(0, 2).map((metric) => (
                    <Stat key={metric.label} metric={metric} size="text-2xl md:text-3xl" />
                  ))}
                </div>
                {panelled.chart && <MiniChart chart={panelled.chart} size="h-16" className="mt-8" />}
                <ReadMore />
              </div>
            </Link>

            <Link
              href={`/work/${offset.slug}`}
              aria-labelledby={titleId(offset)}
              className={cn(CARD, 'block md:col-span-5 md:mt-20 md:self-start')}
              {...reveal(1)}
            >
              <Photo
                src={workImage(offset.slug)}
                sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1151px) 40vw, 440px"
                className="aspect-[4/3] rounded-none rounded-t-2xl"
              />
              <div className="px-6 pb-3 pt-6 md:px-7 md:pt-7">
                <StudyMeta study={offset} />
                <h3 id={titleId(offset)} className={cn(TITLE, 'mt-3')}>
                  {offset.title}
                </h3>
                <p className={cn(HOOK, 'mt-3')}>{offset.hook}</p>
                <Stat metric={offset.metrics[0]} size="text-3xl md:text-4xl" className="mt-8" />
                {offset.chart && <MiniChart chart={offset.chart} size="h-16" className="mt-7" />}
                <ReadMore />
              </div>
            </Link>
          </div>

          <ul className={cn('grid md:grid-cols-2', CARD_GAP)}>
            {closing.map((study, i) => (
              <li key={study.slug} {...reveal(i)}>
                <Link
                  href={`/work/${study.slug}`}
                  aria-labelledby={titleId(study)}
                  className={cn(CARD, 'flex h-full flex-col p-3')}
                >
                  <Photo
                    src={workImage(study.slug)}
                    sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1151px) 50vw, 520px"
                    className="aspect-[16/9] rounded-xl"
                  />
                  <div className="px-3 pt-6 md:px-5">
                    <StudyMeta study={study} />
                    <h3 id={titleId(study)} className={cn(TITLE, 'mt-3')}>
                      {study.title}
                    </h3>
                    <p className={cn(HOOK, 'mt-3')}>{study.hook}</p>
                  </div>
                  <div className="mt-auto px-3 pb-4 pt-8 md:px-5 md:pb-6">
                    <Stat metric={study.metrics[0]} size="text-4xl md:text-[2.75rem]" />
                    {study.chart && <MiniChart chart={study.chart} size="h-16 md:h-20" className="mt-7" />}
                    <ReadMore />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={SECTION}>
        <h2 className="font-serif text-[clamp(1.75rem,1.3rem+1.4vw,2.4rem)] leading-[1.1] tracking-[-0.01em]" {...reveal(0)}>
          Earlier work
        </h2>
        <ul className="mt-8 grid gap-x-10 lg:grid-cols-2">
          {EARLIER.map((study, i) => (
            <li key={study.slug} {...reveal(i + 1)}>
              <StudyRow study={study} />
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(SECTION, 'grid md:grid-cols-12')} {...reveal(0)}>
        <figure className="md:col-span-8 md:col-start-5">
          <blockquote className="font-serif text-[clamp(1.65rem,1.15rem+1.8vw,2.6rem)] italic leading-[1.18] text-balance">
            &ldquo;{QUOTE.quote}&rdquo;
          </blockquote>
          <figcaption className="meta mt-5">
            {QUOTE.name}, {QUOTE.role}
          </figcaption>
        </figure>
      </section>

      <Contact className={SECTION} />
    </div>
  );
}
