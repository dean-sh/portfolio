import type { ChartSeries } from '@/content/types';
import { TONE_COLOR } from '@/lib/chart';

export function LineKey({ tone }: { tone: ChartSeries['tone'] }) {
  return (
    <svg aria-hidden="true" width="14" height="2" className="shrink-0 overflow-visible">
      <line
        x1="0"
        y1="1"
        x2="14"
        y2="1"
        stroke={TONE_COLOR[tone]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={tone === 'baseline' ? '3 3' : undefined}
      />
    </svg>
  );
}
