'use client';

import { useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import type { ChartSeries } from '@/content/types';
import { TONE_COLOR } from '@/lib/chart';
import { LineKey } from './LineKey';

type HoverSeries = {
  label: string;
  tone: ChartSeries['tone'];
  ys: number[];
  display: string[];
};

function nearest(xs: number[], frac: number): number {
  let best = 0;
  for (let i = 1; i < xs.length; i++) {
    if (Math.abs(xs[i] - frac) < Math.abs(xs[best] - frac)) best = i;
  }
  return best;
}

export function ChartHover({
  xs,
  xLabels,
  series,
}: {
  xs: number[];
  xLabels: string[];
  series: HoverSeries[];
}) {
  const [index, setIndex] = useState<number | null>(null);

  function track(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setIndex(nearest(xs, (event.clientX - rect.left) / rect.width));
  }

  function step(event: KeyboardEvent<HTMLDivElement>) {
    const last = xs.length - 1;
    const current = index ?? last;
    const next =
      event.key === 'ArrowLeft'
        ? Math.max(0, current - 1)
        : event.key === 'ArrowRight'
          ? Math.min(last, current + 1)
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : null;
    if (event.key === 'Escape') setIndex(null);
    if (next === null) return;
    event.preventDefault();
    setIndex(next);
  }

  const x = index === null ? 0 : xs[index];
  const ordered = [...series].sort((a, b) => Number(b.tone === 'focus') - Number(a.tone === 'focus'));
  const readout =
    index === null
      ? ''
      : `${xLabels[index]}. ${ordered.map((s) => `${s.label} ${s.display[index]}`).join('. ')}`;

  return (
    <div
      tabIndex={0}
      role="group"
      aria-label="Chart values. Use the arrow keys to move between points."
      className="absolute inset-0 cursor-crosshair touch-pan-y"
      onPointerMove={track}
      onPointerDown={track}
      onPointerLeave={(event) => {
        if (event.pointerType !== 'touch') setIndex(null);
      }}
      onPointerCancel={() => setIndex(null)}
      onKeyDown={step}
      onFocus={() => setIndex((i) => i ?? xs.length - 1)}
      onBlur={() => setIndex(null)}
    >
      <span className="sr-only" aria-live="polite">
        {readout}
      </span>
      {index !== null && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-px bg-foreground/25"
            style={{ left: `${x * 100}%` }}
          />
          {series.map((s) => (
            <span
              key={s.label}
              aria-hidden="true"
              className="pointer-events-none absolute h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full ring-2 ring-background"
              style={{ left: `${x * 100}%`, bottom: `${s.ys[index] * 100}%`, background: TONE_COLOR[s.tone] }}
            />
          ))}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-10 border border-border bg-background px-3 py-2 font-mono text-xs md:left-[var(--tooltip-x)] md:right-auto md:min-w-[9rem] md:translate-x-[var(--tooltip-shift)]"
            style={{
              '--tooltip-x': `${x * 100}%`,
              '--tooltip-shift': x > 0.6 ? 'calc(-100% - 12px)' : '12px',
            } as CSSProperties}
          >
            <p className="mb-1.5 text-muted-foreground">{xLabels[index]}</p>
            <ul className="space-y-1">
              {ordered.map((s) => (
                <li key={s.label} className="flex items-center gap-2 md:whitespace-nowrap">
                  <LineKey tone={s.tone} />
                  <span className="shrink-0 font-medium text-foreground">{s.display[index]}</span>
                  <span className="min-w-0 text-muted-foreground">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
