import { WORK } from '@/content/work';
import type { CaseStudy } from '@/content/types';

export function formatIndex(position: number): string {
  return String(position + 1).padStart(2, '0');
}

export type CaseStudyEntry = {
  study: CaseStudy;
  index: string;
  prev: CaseStudy | null;
  next: CaseStudy | null;
};

export function findCaseStudy(slug: string): CaseStudyEntry | null {
  const position = WORK.findIndex((study) => study.slug === slug);
  if (position === -1) return null;
  return {
    study: WORK[position],
    index: formatIndex(position),
    prev: WORK[position - 1] ?? null,
    next: WORK[position + 1] ?? null,
  };
}
