import type { Stage } from '@/content/types';
import { formatIndex } from '@/lib/work';
import { cn } from '@/lib/utils';

type PipelineProps = {
  stages: Stage[];
  caption?: string;
  className?: string;
};

const COLUMNS: Record<number, string> = {
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
};

function Arrowhead() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 8 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-2 w-2 shrink-0 rotate-90 text-signal/60 lg:mr-3 lg:rotate-0"
    >
      <path d="M0 4h5M2.5 1.5 5 4 2.5 6.5" />
    </svg>
  );
}

export function Pipeline({ stages, caption, className }: PipelineProps) {
  return (
    <figure className={className}>
      <ol
        aria-label="Pipeline"
        className={cn('grid grid-cols-1', COLUMNS[stages.length])}
      >
        {stages.map((stage, position) => {
          const last = position === stages.length - 1;
          return (
            <li
              key={stage.label}
              className="grid min-w-0 grid-cols-[1.25rem_1fr] lg:block"
            >
              <div className="grid h-full grid-rows-[auto_1fr_auto] justify-items-center pt-[3px] lg:h-auto lg:grid-cols-[auto_1fr_auto] lg:grid-rows-none lg:items-center lg:justify-items-start lg:pt-0">
                <span
                  aria-hidden="true"
                  className="block h-2 w-2 shrink-0 rounded-full bg-signal"
                />
                {!last && (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-full min-h-4 w-px bg-border lg:mx-3 lg:h-px lg:min-h-0 lg:w-full"
                    />
                    <Arrowhead />
                  </>
                )}
              </div>
              <div
                className={cn('min-w-0 break-words pr-4 lg:pt-5', !last && 'pb-8 lg:pb-0')}
              >
                <p className="font-mono text-[0.6875rem] tabular-nums tracking-[0.1em] text-signal">
                  {formatIndex(position)}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                  {stage.label}
                </p>
                {stage.note && (
                  <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
                    {stage.note}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      {caption && (
        <figcaption className="measure mt-10 text-sm leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
