'use client';

import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { value: '6+ years', label: 'Shipping AI systems for renewable trading & grid ops' },
  { value: '15% → 6%', label: 'Portfolio nMAE cut in 5 months (Renewcast)' },
  { value: '↑57%', label: 'Wind forecasting accuracy uplift delivered' },
  { value: '£50/MWh', label: 'Cost savings unlocked through supply matching' },
];

export default function Hero() {
  return (
    <section id="top" className="section">
      <div className="container grid items-start gap-14 lg:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)]">
        <div className="space-y-10 text-balance">
          <header className="space-y-4">
            <p className="eyebrow text-xs uppercase tracking-[0.28em] text-copy-muted">
              Dean Shabi · AI Engineer &amp; Data Scientist
            </p>
            <h1 className="text-4xl text-highlight dark:text-white md:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              I design, build, and deploy AI-powered forecasting, pricing, and automation systems for UK/EU renewable energy markets.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-copy-muted">
              Equal parts ML engineer and data scientist, I partner with traders, grid operators, and founders to move ideas
              from notebooks into reliable production workflows—driving measurable uplifts in accuracy, risk control, and revenue resilience.
            </p>
          </header>

          <div className="flex flex-wrap gap-3">
            <Link href="/#works" className="btn-primary">
              Explore my work
            </Link>
            <Link href="/resume" className="btn-ghost">
              View résumé
            </Link>
          </div>

          <dl className="grid gap-3 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/20 bg-surface p-5 shadow-sm dark:border-white/10 dark:bg-surface/70">
                <dt className="text-xl font-semibold text-highlight dark:text-white">{stat.value}</dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.28em] text-copy-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="card flex flex-col gap-8 bg-surface-muted p-8 dark:border-white/12 dark:bg-surface-muted/70">
          <figure className="relative flex flex-col items-center gap-4 text-center">
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-border/20 bg-gradient-to-br from-surface to-surface-muted dark:border-white/10">
              <Image
                src="/images/profile.png"
                alt="Dean Shabi"
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm font-medium text-highlight dark:text-white">Dean Shabi</p>
            <p className="text-xs uppercase tracking-[0.28em] text-copy-muted">Based in Prague · Remote</p>
          </figure>

          <div className="space-y-3 rounded-2xl border border-accent/35 bg-surface p-6 shadow-sm dark:bg-surface/80">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-soft">
              Collaboration Spotlight
            </p>
            <p className="text-sm leading-relaxed text-copy-muted">
              Collaborating with UK/EU renewable energy teams to move AI research into trader-ready products.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="https://calendar.app.google/WfxUTtTh5aXpijdL6"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Book a call
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Start a project
            </Link>
            <Link href="/#works" className="text-sm font-medium text-accent-soft hover:text-accent">
              View recent engagements
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
