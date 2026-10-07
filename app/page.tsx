import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { serifItalic } from './fonts';
import { Arrow } from '@/components/Arrow';
import { Contributions } from '@/components/Contributions';
import { Photo } from '@/components/Photo';
import { SparkBody, Sparkline } from '@/components/Sparkline';
import { physicsFirstSolar } from '@/content/charts';
import type { CaseStudy, Metric } from '@/content/types';
import { EARLIER, WORK } from '@/content/work';
import { formatIndex, workImage } from '@/lib/work';
import { cn } from '@/lib/utils';
import { HERO, LINKS, NOW, QUOTE } from '@/content/site';

const GITHUB_USER = LINKS.github.split('/').pop() ?? '';
const [featured, panelled, offset, ...closing] = WORK;
const heroStudy = WORK.find((study) => study.slug === 'physics-first-solar')!;

const CONTACTS = [
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'GitHub', href: LINKS.github },
];

const reveal = (i = 0) => ({ 'data-reveal': '', style: { '--i': i } as CSSProperties });

const SECTION = 'mt-[clamp(4rem,9vw,7rem)]';

const PANEL =
  'rounded-2xl border border-border bg-surface shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_16px_40px_-20px_hsl(var(--foreground)/0.14)]';

const LIFT =
  'transition-[transform,background-color,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-0.5';

const CARD = cn(PANEL, LIFT, 'group overflow-hidden hover:border-signal/40');

const CARD_GAP = 'gap-6 md:gap-8 lg:gap-10';

const BUTTON =
  'group inline-flex min-h-11 items-center gap-2 rounded-lg bg-signal px-5 text-sm font-medium text-signal-foreground transition-[transform,background-color] duration-200 hover:bg-signal/90 active:translate-y-px';

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

function TitleArrow() {
  return <Arrow className={cn(NUDGE, 'ml-2 h-[0.5em] w-[0.5em] text-muted-foreground')} />;
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
            <a href={LINKS.cal} target="_blank" rel="noreferrer" className={BUTTON}>
              Book a call
              <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
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
          <span className="mt-1 flex min-h-11 items-center justify-between gap-4 text-xs">
            <span className="text-muted-foreground transition-colors duration-200 group-hover:text-signal">
              Solar forecasting at Renewcast
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-foreground transition-colors duration-200 group-hover:text-signal">
              {heroStudy.metrics[0].value}
              <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </span>
        </Link>
      </section>

      <ul className={cn(PANEL, 'rise grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-4')} style={{ '--i': 2 } as CSSProperties}>
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
          <Link href={`/work/${featured.slug}`} className={cn(CARD, 'grid md:grid-cols-12')} {...reveal(2)}>
            <Photo
              src={workImage(featured.slug)}
              sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 620px"
              className="aspect-[4/3] rounded-none rounded-t-2xl md:col-span-6 md:aspect-auto md:min-h-[28rem] md:rounded-none md:rounded-l-2xl lg:col-span-7"
            />
            <div className="min-w-0 p-6 sm:p-8 md:col-span-6 md:self-center md:p-10 lg:col-span-5">
              <StudyMeta study={featured} />
              <h3 className="mt-4 font-serif text-[clamp(1.9rem,1.4rem+1.4vw,2.6rem)] leading-[1.06] tracking-[-0.012em] text-balance">
                {featured.title}
              </h3>
              <p className={cn(HOOK, 'mt-4 text-[0.975rem]')}>{featured.hook}</p>
              <Stat metric={featured.metrics[0]} size="text-5xl" className="mt-8" />
              {featured.chart && <SparkBody chart={featured.chart} className="mt-7 h-20 w-full md:h-24" />}
              <ReadMore />
            </div>
          </Link>

          <div className={cn('grid md:grid-cols-12', CARD_GAP)}>
            <Link href={`/work/${panelled.slug}`} className={cn(CARD, 'block p-3 md:col-span-7')} {...reveal(0)}>
              <Photo
                src={workImage(panelled.slug)}
                sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1151px) 55vw, 610px"
                className="aspect-[16/9] rounded-xl"
              />
              <div className="px-3 pb-4 pt-6 md:px-5 md:pb-6">
                <StudyMeta study={panelled} />
                <h3 className={cn(TITLE, 'mt-3')}>
                  {panelled.title}
                  <TitleArrow />
                </h3>
                <p className={cn(HOOK, 'mt-3')}>{panelled.hook}</p>
                <div className="mt-7 grid grid-cols-2 gap-6 border-t border-border pt-6">
                  {panelled.metrics.slice(0, 2).map((metric) => (
                    <Stat key={metric.label} metric={metric} size="text-2xl md:text-3xl" />
                  ))}
                </div>
                {panelled.chart && (
                  <div className="mt-8">
                    <p className="meta">{panelled.chart.sparkLabel}</p>
                    <SparkBody chart={panelled.chart} className="mt-4 h-16 w-full" />
                  </div>
                )}
              </div>
            </Link>

            <Link
              href={`/work/${offset.slug}`}
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
                <h3 className={cn(TITLE, 'mt-3')}>{offset.title}</h3>
                <p className={cn(HOOK, 'mt-3')}>{offset.hook}</p>
                <ReadMore />
              </div>
            </Link>
          </div>

          <ul className={cn('grid md:grid-cols-2', CARD_GAP)}>
            {closing.map((study, i) => (
              <li key={study.slug} {...reveal(i)}>
                <Link href={`/work/${study.slug}`} className={cn(CARD, 'flex h-full flex-col p-3')}>
                  <Photo
                    src={workImage(study.slug)}
                    sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1151px) 50vw, 520px"
                    className="aspect-[16/9] rounded-xl"
                  />
                  <div className="px-3 pt-6 md:px-5">
                    <StudyMeta study={study} />
                    <h3 className={cn(TITLE, 'mt-3')}>
                      {study.title}
                      <TitleArrow />
                    </h3>
                    <p className={cn(HOOK, 'mt-3')}>{study.hook}</p>
                  </div>
                  <div className="mt-auto px-3 pb-4 pt-8 md:px-5 md:pb-6">
                    <Stat metric={study.metrics[0]} size="text-4xl md:text-[2.75rem]" />
                    {study.chart && <SparkBody chart={study.chart} className="mt-6 h-16 w-full md:h-20" />}
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
              <Link
                href={`/work/${study.slug}`}
                className="group flex items-center gap-4 border-t border-border py-5 transition-colors duration-300 hover:border-signal/40"
              >
                <Photo src={workImage(study.slug)} sizes="80px" className="h-14 w-20 shrink-0 rounded-lg" />
                <span className="min-w-0 flex-1">
                  <span className="meta block">
                    {study.org} · {study.period}
                  </span>
                  <span className="mt-1 block text-[0.95rem] leading-snug transition-colors duration-200 group-hover:text-signal">
                    {study.title}
                  </span>
                  {study.metrics[0] && (
                    <span className="mt-1.5 block text-xs leading-snug">
                      <span className="font-mono text-signal">{study.metrics[0].value}</span>
                      <span className="ml-2 text-muted-foreground">{study.metrics[0].label}</span>
                    </span>
                  )}
                </span>
                <Arrow className={cn(NUDGE, 'text-muted-foreground')} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(SECTION, 'grid md:grid-cols-12')} {...reveal(0)}>
        <figure className="md:col-span-8 md:col-start-5">
          <blockquote className={cn(serifItalic.className, 'text-[clamp(1.65rem,1.15rem+1.8vw,2.6rem)] italic leading-[1.18] text-balance')}>
            &ldquo;{QUOTE.quote}&rdquo;
          </blockquote>
          <figcaption className="meta mt-5">
            {QUOTE.name}, {QUOTE.role}
          </figcaption>
        </figure>
      </section>

      <section
        id="contact"
        className={cn(SECTION, 'scroll-mt-20 border-t border-border pt-12 md:pt-16')}
        {...reveal(0)}
      >
        <h2 className="font-serif text-[clamp(2.2rem,1.4rem+3vw,4.2rem)] leading-[1.04] tracking-[-0.015em] text-balance md:w-9/12">
          Have a machine learning system that has to hold up in production? I&apos;d like to hear about it.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href={LINKS.cal} target="_blank" rel="noreferrer" className={BUTTON}>
            Book a 30-minute call
            <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {CONTACTS.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="link inline-flex min-h-11 items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
