import Link from 'next/link';
import type { CaseStudy } from '@/content/types';
import { workImage } from '@/lib/work';
import { Arrow } from './Arrow';
import { Photo } from './Photo';

export const titleId = (study: CaseStudy) => `title-${study.slug}`;

export function StudyRow({ study }: { study: CaseStudy }) {
  const [metric] = study.metrics;
  return (
    <Link
      href={`/work/${study.slug}`}
      aria-labelledby={titleId(study)}
      className="group flex items-center gap-4 border-t border-border py-5 transition-colors duration-300 hover:border-signal/40"
    >
      <Photo src={workImage(study.slug)} sizes="80px" className="h-14 w-20 shrink-0 rounded-lg" />
      <span className="min-w-0 flex-1">
        <span className="meta block">
          {study.org} · {study.period}
        </span>
        <span
          id={titleId(study)}
          className="mt-1 block text-[0.95rem] leading-snug transition-colors duration-200 group-hover:text-signal"
        >
          {study.title}
        </span>
        {metric && (
          <span className="mt-1.5 block text-xs leading-snug">
            <span className="font-mono text-signal">{metric.value}</span>
            <span className="ml-2 text-muted-foreground">{metric.label}</span>
          </span>
        )}
      </span>
      <Arrow className="text-muted-foreground transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-signal" />
    </Link>
  );
}
