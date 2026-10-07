'use client';

import { useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';
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

function Values({ series, at }: { series: HoverSeries[]; at: number }) {
  return series.map((s) => (
    <li key={s.label} className="flex items-center gap-2 md:whitespace-nowrap">
      <LineKey tone={s.tone} />
      <span className="shrink-0 font-mono font-medium tabular-nums text-foreground">{s.display[at]}</span>
      <span className="min-w-0 text-muted-foreground">{s.label}</span>
    </li>
  ));
}

// Wraps the plot. Phones get a readout docked above it, which shows the last point until someone touches the chart.
// Wider screens get a tooltip beside the pointer.
export function ChartHover({
  xs,
  xLabels,
  series,
  children,
}: {
  xs: number[];
  xLabels: string[];
  series: HoverSeries[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const last = xs.length - 1;

  function track(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setIndex(nearest(xs, (event.clientX - rect.left) / rect.width));
  }

  function step(event: KeyboardEvent<HTMLDivElement>) {
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
  const docked = index ?? last;

  return (
    <div className="mt-6">
      <div aria-hidden="true" className="mb-3 text-xs md:hidden">
        <p className="font-mono text-muted-foreground">{xLabels[docked]}</p>
        <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
          <Values series={ordered} at={docked} />
        </ul>
      </div>

      <div className="h-56 pb-7 pl-12 pr-1 pt-3 md:h-64">
        <div className="relative h-full w-full">
          {children}
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
            onFocus={() => setIndex((i) => i ?? last)}
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
                  className="pointer-events-none absolute left-[var(--tooltip-x)] top-0 z-10 min-w-[9rem] translate-x-[var(--tooltip-shift)] border border-border bg-background px-3 py-2 text-xs max-md:hidden"
                  style={
                    {
                      '--tooltip-x': `${x * 100}%`,
                      '--tooltip-shift': x > 0.6 ? 'calc(-100% - 12px)' : '12px',
                    } as CSSProperties
                  }
                >
                  <p className="mb-1.5 font-mono text-muted-foreground">{xLabels[index]}</p>
                  <ul className="space-y-1">
                    <Values series={ordered} at={index} />
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
