import type { Stage } from '@/content/types';

export function Pipeline({ stages, caption }: { stages: Stage[]; caption?: string }) {
  const last = stages.length - 1;
  return (
    <figure>
      <ol aria-label="How it works, step by step">
        {stages.map((stage, i) => (
          <li key={stage.label} className="grid grid-cols-[2rem_1fr] gap-x-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/50 bg-surface font-mono text-xs text-signal">
                {i + 1}
              </span>
              {i < last && <span aria-hidden="true" className="w-px flex-1 bg-border" />}
            </div>
            <div className={i < last ? 'pb-6' : ''}>
              <p className="pt-1 text-base font-medium leading-snug">{stage.label}</p>
              {stage.note && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.note}</p>}
            </div>
          </li>
        ))}
      </ol>
      {caption && (
        <figcaption className="mt-6 max-w-[62ch] text-[0.975rem] leading-relaxed text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
