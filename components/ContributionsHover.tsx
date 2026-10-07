'use client';

import { useState, type PointerEvent, type ReactNode } from 'react';
import { MONTHS } from '@/lib/chart';

type Tip = { left: number; top: number; frac: number; count: number; date: string };

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function ContributionsHover({ children }: { children: ReactNode }) {
  const [tip, setTip] = useState<Tip | null>(null);

  function show(event: PointerEvent<HTMLDivElement>) {
    const cell = (event.target as HTMLElement).closest<HTMLElement>('[data-date]');
    if (!cell) return setTip(null);
    const box = event.currentTarget.getBoundingClientRect();
    const rect = cell.getBoundingClientRect();
    const left = rect.left - box.left + rect.width / 2;
    setTip({
      left,
      top: rect.top - box.top,
      frac: left / box.width,
      count: Number(cell.dataset.count),
      date: cell.dataset.date ?? '',
    });
  }

  const shift = !tip ? '-50%' : tip.frac < 0.15 ? '-12px' : tip.frac > 0.85 ? 'calc(-100% + 12px)' : '-50%';

  return (
    <div className="relative" onPointerOver={show} onPointerLeave={() => setTip(null)}>
      {children}
      {tip && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-10 whitespace-nowrap border border-border bg-background px-2.5 py-1.5 text-xs shadow-sm"
          style={{ left: tip.left, top: tip.top - 8, transform: `translate(${shift}, -100%)` }}
        >
          <span className="font-mono font-medium text-foreground">
            {tip.count === 0 ? 'No' : tip.count.toLocaleString('en-GB')} contribution{tip.count === 1 ? '' : 's'}
          </span>
          <span className="text-muted-foreground"> · {formatDate(tip.date)}</span>
        </div>
      )}
    </div>
  );
}
