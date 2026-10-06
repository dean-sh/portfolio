import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { EARLIER, WORK } from '@/content/work';
import { formatIndex } from '@/lib/work';
import { HERO, LINKS, QUOTE } from '@/content/site';

const CONTACTS = [
  { label: LINKS.email, href: `mailto:${LINKS.email}` },
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'GitHub', href: LINKS.github },
  { label: 'Book a call', href: LINKS.cal },
];

export default function Home() {
  return (
    <div className="container max-w-[52rem]">
      <section className="pb-20 pt-24 md:pt-36">
        <h1 className="text-display-lg text-balance">{HERO.title}</h1>
        <p className="mt-8 font-mono text-sm leading-relaxed text-muted-foreground">{HERO.lede}</p>
      </section>

      <section id="work" className="scroll-mt-16 border-t border-border">
        <ol className="divide-y divide-border">
          {WORK.map((study, i) => {
            const words = study.title.split(' ');
            const tail = words.pop();
            const head = words.join(' ');
            return (
              <li key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 py-6 md:grid-cols-[2.5rem_1fr_7rem]"
                >
                  <span className="font-mono text-xs tabular-nums text-signal">{formatIndex(i)}</span>
                  <span className="text-xl leading-snug md:text-2xl">
                    {head}{' '}
                    <span className="whitespace-nowrap">
                      {tail}
                      <Arrow className="ml-2 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                  <span className="col-start-2 mt-1 font-mono text-xs text-muted-foreground md:col-start-3 md:mt-0 md:text-right">
                    {study.org}
                  </span>
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

      <section id="contact" className="scroll-mt-16 border-t border-border py-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          {CONTACTS.map((c) => (
            <li key={c.href}>
              <a href={c.href} className="link" target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
