import type { Chart as ChartSpec } from '@/content/types';
import { plotChart, TONE_COLOR } from '@/lib/chart';
import { ChartHover } from './ChartHover';
import { LineKey } from './LineKey';

const TONE_ORDER = { baseline: 0, context: 1, focus: 2 } as const;

function edgeShift(at: number): string {
  if (at < 0.04) return 'translateX(0)';
  if (at > 0.96) return 'translateX(-100%)';
  return 'translateX(-50%)';
}

export function Chart({ chart }: { chart: ChartSpec }) {
  const plot = plotChart(chart);
  const multi = plot.series.length > 1;
  const drawn = [...plot.series].sort((a, b) => TONE_ORDER[a.tone] - TONE_ORDER[b.tone]);
  const focus = plot.series.find((s) => s.tone === 'focus');
  const last = plot.xs.length - 1;

  return (
    <figure>
      <figcaption className="max-w-[62ch]">
        <p className="text-base font-medium leading-snug">{chart.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{chart.note}</p>
      </figcaption>

      {multi && (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted-foreground">
          {[...plot.series].reverse().map((s) => (
            <li key={s.label} className="flex items-center gap-2">
              <LineKey tone={s.tone} />
              {s.label}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 h-56 pb-7 pl-12 pr-1 pt-3 md:h-64">
        <div className="relative h-full w-full">
          {plot.yTicks.map((tick) => (
            <div
              key={tick.label}
              aria-hidden="true"
              className="absolute inset-x-0 border-t border-border"
              style={{ bottom: `${tick.at * 100}%` }}
            >
              <span className="absolute -left-12 w-10 -translate-y-1/2 text-right font-mono text-[11px] tabular-nums text-muted-foreground">
                {tick.label}
              </span>
            </div>
          ))}

          {plot.refs.map((ref) => (
            <div
              key={ref.label}
              aria-hidden="true"
              className="absolute inset-x-0 border-t border-muted-foreground/40"
              style={{ bottom: `${ref.at * 100}%` }}
            >
              <span className="absolute bottom-1 right-0 font-mono text-[11px] text-muted-foreground">
                {ref.label}
              </span>
            </div>
          ))}

          <svg
            aria-hidden="true"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            {drawn.map((s) => (
              <g key={s.label}>
                {s.area && <path d={s.area} fill={TONE_COLOR[s.tone]} fillOpacity={0.1} stroke="none" />}
                <path
                  d={s.path}
                  fill="none"
                  stroke={TONE_COLOR[s.tone]}
                  strokeWidth={s.tone === 'focus' ? 2 : 1.5}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeDasharray={s.tone === 'baseline' ? '4 4' : undefined}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
          </svg>

          {focus && (
            <span
              aria-hidden="true"
              className="absolute h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full ring-2 ring-background"
              style={{ left: `${plot.xs[last] * 100}%`, bottom: `${focus.ys[last] * 100}%`, background: TONE_COLOR.focus }}
            />
          )}

          {plot.points.map((point) => (
            <div
              key={point.label}
              aria-hidden="true"
              className="absolute"
              style={{ left: `${point.x * 100}%`, bottom: `${point.y * 100}%` }}
            >
              <span
                className="absolute h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full ring-2 ring-background"
                style={{ background: TONE_COLOR.focus }}
              />
              <span
                className="absolute bottom-2.5 whitespace-nowrap font-mono text-[11px] text-foreground"
                style={{ transform: edgeShift(point.x) }}
              >
                {point.label}
              </span>
            </div>
          ))}

          {plot.xTicks.map((tick) => (
            <span
              key={`${tick.label}-${tick.at}`}
              aria-hidden="true"
              className="absolute top-full mt-2 whitespace-nowrap font-mono text-[11px] text-muted-foreground"
              style={{ left: `${tick.at * 100}%`, transform: edgeShift(tick.at) }}
            >
              {tick.label}
            </span>
          ))}

          <ChartHover
            xs={plot.xs}
            xLabels={plot.xLabels}
            series={plot.series.map(({ label, tone, ys, display }) => ({ label, tone, ys, display }))}
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">{chart.source}</p>
        <details className="group font-mono text-[11px] text-muted-foreground">
          <summary className="hover:text-foreground">
            <span className="group-open:hidden">Show data</span>
            <span className="hidden group-open:inline">Hide data</span>
          </summary>
          <div className="mt-3 max-h-72 overflow-auto border-t border-border">
            <table className="w-full text-left tabular-nums">
              <thead>
                <tr className="text-foreground">
                  <th className="py-1.5 pr-4 font-normal" />
                  {plot.series.map((s) => (
                    <th key={s.label} className="py-1.5 pr-4 font-normal">
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plot.xLabels.map((label, i) => (
                  <tr key={`${label}-${i}`} className="border-t border-border">
                    <td className="py-1 pr-4">{label}</td>
                    {plot.series.map((s) => (
                      <td key={s.label} className="py-1 pr-4 text-foreground">
                        {s.display[i]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </figure>
  );
}
