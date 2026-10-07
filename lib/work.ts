import { EARLIER, WORK } from '@/content/work';
import type { CaseStudy } from '@/content/types';

export function formatIndex(position: number): string {
  return String(position + 1).padStart(2, '0');
}

export type CaseStudyEntry = {
  study: CaseStudy;
  next: CaseStudy;
};

export const ALL_CASE_STUDIES = [...WORK, ...EARLIER];

export function workImage(slug: string): string {
  return `/images/work/${slug}.jpg`;
}

export function findCaseStudy(slug: string): CaseStudyEntry | null {
  for (const list of [WORK, EARLIER]) {
    const position = list.findIndex((study) => study.slug === slug);
    if (position === -1) continue;
    return {
      study: list[position],
      next: list[(position + 1) % list.length],
    };
  }
  return null;
}
