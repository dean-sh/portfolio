import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { HERO } from '@/content/site';
import { OPEN_GRAPH } from '@/lib/metadata';
import { BASE, EDUCATION, EXPERIENCE, REMOTE, SKILL_GROUPS, SUMMARY } from '@/content/resume';

const DESCRIPTION =
  'Resume of Dean Shabi, an engineering lead and two-time founder in Prague with seven years of machine learning in production, mostly energy forecasting.';

export const metadata: Metadata = {
  title: 'Resume',
  description: DESCRIPTION,
  alternates: { canonical: '/resume' },
  openGraph: { ...OPEN_GRAPH, type: 'profile', url: '/resume', title: `Resume · ${HERO.name}`, description: DESCRIPTION },
};

const LOCATIONS = [`${BASE.city}, ${BASE.country}`, REMOTE];

const HEADING = 'font-serif text-[1.75rem] leading-tight tracking-[-0.01em] md:text-[2rem]';

function ResumeLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      <a href="#contact" className="link inline-flex min-h-11 items-center">
        Contact me
      </a>
      <a href="/dean-shabi-cv.pdf" className="link inline-flex min-h-11 items-center">
        Download as PDF
      </a>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="container pb-24 pt-10">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="space-y-8 lg:sticky lg:top-28">
            <p className="meta">Resume</p>
            <ResumeLinks className="flex flex-col items-start text-sm" />
            <div className="space-y-1 text-sm text-muted-foreground">
              {LOCATIONS.map((location) => (
                <p key={location}>{location}</p>
              ))}
            </div>
          </div>
        </aside>

        <div className="min-w-0 lg:col-span-9">
          <div className="rise">
            <h1 className="font-serif text-[clamp(2.2rem,1.5rem+2.6vw,3.6rem)] leading-[1.05] tracking-[-0.015em]">{HERO.name}</h1>
            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-muted-foreground">{SUMMARY}</p>
            <div className="mt-6 lg:hidden">
              <ResumeLinks className="flex flex-wrap gap-x-6 text-sm" />
              <p className="meta mt-2">{LOCATIONS.join(' · ')}</p>
            </div>
          </div>

          <section className="rise mt-16" style={{ '--i': 1 } as CSSProperties}>
            <h2 className={HEADING}>Experience</h2>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {EXPERIENCE.map((item) => (
                <li key={`${item.role}-${item.company}`} className="py-8 md:grid md:grid-cols-[11rem_1fr] md:gap-8">
                  <div className="hidden text-sm text-muted-foreground md:block">
                    <p className="font-mono text-foreground">{item.period}</p>
                    <p className="mt-1">{item.location}</p>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sans text-lg font-medium leading-snug">
                      {item.role}
                      <span className="font-normal text-muted-foreground"> · {item.company}</span>
                    </h3>
                    <p className="meta mt-1.5 md:hidden">
                      {item.period} · {item.location}
                    </p>
                    <ul className="mt-4 max-w-[62ch] space-y-2 text-[0.95rem] leading-[1.65] text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="grid grid-cols-[1rem_1fr]">
                          <span aria-hidden="true" className="mt-[0.8em] block w-2.5 border-t border-signal/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground">{item.skills.join(' · ')}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16" data-reveal="">
            <h2 className={HEADING}>Education</h2>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {EDUCATION.map((item) => (
                <li key={item.degree} className="py-6 md:grid md:grid-cols-[11rem_1fr] md:gap-8">
                  <p className="hidden font-mono text-sm md:block">{item.period}</p>
                  <div className="min-w-0">
                    <p className="font-medium">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                      <span className="md:hidden"> · {item.period}</span>
                    </p>
                    {item.details && <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">{item.details}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16" data-reveal="">
            <h2 className={HEADING}>Skills</h2>
            <dl className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <dt className="text-sm font-medium">{group.label}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{group.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Contact compact className="mt-16" />
        </div>
      </div>
    </div>
  );
}
