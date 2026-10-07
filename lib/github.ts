export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionDay = {
  date: string;
  count: number;
  level: ContributionLevel;
};

export type ContributionCalendar = {
  total: number;
  weeks: (ContributionDay | null)[][];
};

const ONE_DAY = 60 * 60 * 24;
const MIN_DAYS = 300;

function attr(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
}

function quantile(sorted: number[], p: number): number {
  return sorted[Math.floor(p * (sorted.length - 1))];
}

export function parseCalendar(html: string): ContributionCalendar | null {
  const counts = new Map<string, number>();
  for (const match of html.matchAll(/<tool-tip\b[^>]*\sfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const amount = match[2].match(/^(\d+|No) contributions?/);
    counts.set(match[1], !amount || amount[1] === 'No' ? 0 : Number(amount[1]));
  }

  const days: { date: string; count: number }[] = [];
  for (const [tag] of html.matchAll(/<td\b[^>]*\sdata-date="[^"]+"[^>]*>/g)) {
    const date = attr(tag, 'data-date');
    const id = attr(tag, 'id');
    if (!date || !id) continue;
    days.push({ date, count: counts.get(id) ?? 0 });
  }
  if (days.length < MIN_DAYS) return null;
  days.sort((a, b) => a.date.localeCompare(b.date));

  const active = days.map((d) => d.count).filter((n) => n > 0).sort((a, b) => a - b);
  const cuts = active.length ? [0.25, 0.5, 0.75].map((p) => quantile(active, p)) : [1, 1, 1];
  const level = (n: number): ContributionLevel =>
    n === 0 ? 0 : n <= cuts[0] ? 1 : n <= cuts[1] ? 2 : n <= cuts[2] ? 3 : 4;

  const weeks: (ContributionDay | null)[][] = [];
  let week: (ContributionDay | null)[] = Array(new Date(`${days[0].date}T00:00:00Z`).getUTCDay()).fill(null);
  for (const day of days) {
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
    week.push({ ...day, level: level(day.count) });
  }
  weeks.push(week);

  return { total: days.reduce((sum, d) => sum + d.count, 0), weeks };
}

export async function getContributions(user: string): Promise<ContributionCalendar | null> {
  // At build time a GitHub outage should drop the section, not fail the deploy.
  // During a daily refresh it throws instead, so Next keeps serving the last good page.
  const building = process.env.NEXT_PHASE === 'phase-production-build';
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, {
      headers: { 'User-Agent': 'deanshabi.com' },
      next: { revalidate: ONE_DAY },
    });
    if (!res.ok) throw new Error(`GitHub contributions returned ${res.status}`);
    const calendar = parseCalendar(await res.text());
    if (!calendar) throw new Error('GitHub contributions markup changed');
    return calendar;
  } catch (error) {
    if (building) return null;
    throw error;
  }
}
