import { CONTACT_LINE, LINKS } from '@/content/site';
import { cn } from '@/lib/utils';
import { Arrow } from './Arrow';

const PROFILES = [
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'GitHub', href: LINKS.github },
];

export function CallButton({ children }: { children: string }) {
  return (
    <a
      href={LINKS.cal}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-signal px-5 text-sm font-medium text-signal-foreground transition-[transform,background-color] duration-200 hover:bg-signal-hover active:translate-y-px"
    >
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

export function Contact({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <section
      id="contact"
      data-reveal=""
      className={cn('scroll-mt-20 border-t border-border', compact ? 'pt-10' : 'pt-12 md:pt-16', className)}
    >
      <h2
        className={cn(
          'font-serif text-balance',
          compact
            ? 'max-w-[30ch] text-[1.75rem] leading-tight tracking-[-0.01em] md:text-[2rem]'
            : 'text-[clamp(2.2rem,1.4rem+3vw,4.2rem)] leading-[1.04] tracking-[-0.015em] md:w-9/12',
        )}
      >
        {CONTACT_LINE}
      </h2>
      <div className={cn('flex flex-wrap items-center gap-x-8 gap-y-4', compact ? 'mt-6' : 'mt-10')}>
        <CallButton>Book a 30-minute call</CallButton>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {PROFILES.map((profile) => (
            <li key={profile.href}>
              <a href={profile.href} className="link inline-flex min-h-11 items-center" target="_blank" rel="noreferrer">
                {profile.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
