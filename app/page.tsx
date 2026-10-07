import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { Contributions } from '@/components/Contributions';
import { SparkCard } from '@/components/Sparkline';
import { EARLIER, WORK } from '@/content/work';
import { formatIndex } from '@/lib/work';
import { HERO, LINKS, QUOTE } from '@/content/site';

const GITHUB_USER = LINKS.github.split('/').pop() ?? '';

const CONTACTS = [
  { label: LINKS.email, href: `mailto:${LINKS.email}` },
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'GitHub', href: LINKS.github },
];

export default function Home() {
  return (
    <div className="container max-w-[52rem]">
      <section className="pb-14 pt-20 md:pb-16 md:pt-32">
        <h1 className="text-display-lg text-balance">{HERO.title}</h1>
        <p className="mt-8 font-mono text-sm leading-relaxed text-muted-foreground">{HERO.lede}</p>
      </section>

      <div className="pb-16 md:pb-20">
        <Contributions user={GITHUB_USER} />
      </div>

      <section id="work" className="scroll-mt-16 border-t border-border">
        <ol className="divide-y divide-border">
          {WORK.map((study, i) => {
            const words = study.title.split(' ');
            const tail = words.pop();
            const head = words.join(' ');
            return (
              <li key={study.slug}>
                <Link href={`/work/${study.slug}`} className="group grid grid-cols-[2rem_1fr] gap-x-3 py-10 md:grid-cols-[2.5rem_1fr] md:gap-x-4 md:py-12">
                  <span className="pt-[0.2rem] font-mono text-xs tabular-nums text-signal">{formatIndex(i)}</span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-muted-foreground">
                      {study.org} · {study.period}
                    </p>
                    <h2 className="mt-3 font-serif text-[1.75rem] leading-[1.12] tracking-[-0.01em] text-balance md:text-[2.25rem]">
                      {head}{' '}
                      <span className="whitespace-nowrap">
                        {tail}
                        <Arrow className="ml-2 h-[0.6em] w-[0.6em] text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-signal" />
                      </span>
                    </h2>
                    <p className="mt-4 max-w-[60ch] text-[0.975rem] leading-relaxed text-muted-foreground">{study.hook}</p>
                    {study.chart && (
                      <div className="mt-6">
                        <SparkCard chart={study.chart} />
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="border-t border-border py-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">Earlier</p>
        <ul className="space-y-2 font-mono text-sm">
          {EARLIER.map((item) => (
            <li key={item.href} className="flex flex-wrap gap-x-3">
              <Link href={item.href} className="link">
                {item.title}
              </Link>
              <span className="text-muted-foreground">{item.org}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border py-10">
        <blockquote className="font-serif text-xl italic leading-snug text-balance md:text-2xl">
          &ldquo;{QUOTE.quote}&rdquo;
        </blockquote>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          {QUOTE.name}, {QUOTE.role}
        </p>
      </section>

      <section id="contact" className="scroll-mt-20 pb-6 pt-4">
        <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            {CONTACTS.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="link" target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={LINKS.cal}
            target="_blank"
            rel="noreferrer"
            className="button group inline-flex items-center justify-center gap-2 self-start rounded-md bg-signal px-4 py-2.5 font-mono text-sm text-signal-foreground transition-colors hover:bg-signal/90 sm:self-auto"
          >
            Book a call
            <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
