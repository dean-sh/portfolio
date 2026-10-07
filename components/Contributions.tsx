import type { CSSProperties } from 'react';
import { getContributions, type ContributionCalendar } from '@/lib/github';
import { cn } from '@/lib/utils';
import { ContributionsHover } from './ContributionsHover';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MOBILE_WEEKS = 26;
const LEVELS = [0, 1, 2, 3, 4] as const;

function monthStarts(weeks: ContributionCalendar['weeks']): { week: number; label: string }[] {
  const out: { week: number; label: string }[] = [];
  let previous = -1;
  weeks.forEach((week, i) => {
    const first = week.find(Boolean);
    if (!first) return;
    const month = Number(first.date.slice(5, 7)) - 1;
    if (month !== previous && i < weeks.length - 2) {
      if (previous !== -1 || i < 2) out.push({ week: i, label: MONTHS[month] });
      previous = month;
    }
  });
  return out;
}

export async function Contributions({ user }: { user: string }) {
  const calendar = await getContributions(user);
  if (!calendar) return null;
  const { weeks, total } = calendar;
  const firstMobile = Math.max(0, weeks.length - MOBILE_WEEKS);
  const latest = weeks.at(-1)?.filter(Boolean).at(-1)?.date;
  const days = weeks.flat().filter((d): d is NonNullable<typeof d> => d !== null);
  const busiest = days.reduce((a, b) => (b.count > a.count ? b : a), days[0]);
  const summary = `${total.toLocaleString('en-GB')} contributions in the last year across ${days.length} days. Busiest day ${busiest.date} with ${busiest.count}.`;

  return (
    <section
      aria-label="GitHub contributions"
      className="rounded-lg border border-border bg-surface p-5 shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)] md:p-6"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-xs text-muted-foreground">
        <p>
          <span className="font-mono font-medium text-foreground">{total.toLocaleString('en-GB')}</span> contributions in
          the last year
        </p>
        <a href={`https://github.com/${user}`} className="link" target="_blank" rel="noreferrer">
          github.com/{user}
        </a>
      </div>

      <p className="sr-only">{summary}</p>
      <ContributionsHover>
        <div aria-hidden="true" className="relative mb-2 h-3 text-[10px] leading-none text-muted-foreground">
          {monthStarts(weeks).map(({ week, label }) => (
            <span
              key={week}
              className={cn('absolute left-[var(--d)] max-sm:left-[var(--m)]', week < firstMobile && 'max-sm:hidden')}
              style={
                {
                  '--d': `${(week / weeks.length) * 100}%`,
                  '--m': `${((week - firstMobile) / MOBILE_WEEKS) * 100}%`,
                } as CSSProperties
              }
            >
              {label}
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[3px] sm:grid-cols-[repeat(53,minmax(0,1fr))]"
        >
          {weeks.map((week, i) => (
            <div key={i} className={cn('grid grid-rows-7 gap-[3px]', i < firstMobile && 'max-sm:hidden')}>
              {week.map((day, j) =>
                day ? (
                  <span
                    key={day.date}
                    data-date={day.date}
                    data-count={day.count}
                    className={cn(
                      'aspect-square rounded-[2px] outline outline-1 outline-offset-1 outline-transparent transition-[outline-color] hover:outline-foreground/60',
                      day.date === latest && 'pulse-ring',
                    )}
                    style={{ background: `var(--gh-${day.level})`, color: 'var(--gh-4)' }}
                  />
                ) : (
                  <span key={`pad-${j}`} className="aspect-square" />
                ),
              )}
            </div>
          ))}
        </div>
      </ContributionsHover>

      <div aria-hidden="true" className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
        <span className="mr-1">Less</span>
        {LEVELS.map((level) => (
          <span key={level} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: `var(--gh-${level})` }} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </section>
  );
}
