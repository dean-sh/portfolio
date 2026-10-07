import type { Chart as ChartSpec, CompareChart, EquationChart, FunnelChart, JudgeChart, LineChart, TailChart } from '@/content/types';
import { inDrawOrder, lossCurve, plotChart, TONE_COLOR, VIEWBOX } from '@/lib/chart';
import { Arrow } from './Arrow';
import { ChartHover } from './ChartHover';
import { LineKey } from './LineKey';

function edgeShift(at: number): string {
  if (at < 0.04) return 'translateX(0)';
  if (at > 0.96) return 'translateX(-100%)';
  return 'translateX(-50%)';
}

function LineChartView({ chart }: { chart: LineChart }) {
  const plot = plotChart(chart);
  const multi = plot.series.length > 1;
  const drawn = inDrawOrder(plot.series);
  const focus = plot.series.find((s) => s.tone === 'focus');
  const last = plot.xs.length - 1;

  return (
    <figure>
      <figcaption className="max-w-[62ch]">
        <p className="text-base font-medium leading-snug">{chart.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{chart.note}</p>
      </figcaption>

      {multi && (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
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


          <svg
            aria-hidden="true"
            viewBox={VIEWBOX}
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

          {focus && !plot.points.some((point) => point.x === plot.xs[last]) && (
            <span
              aria-hidden="true"
              className="absolute h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full ring-2 ring-surface"
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
                className="absolute top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-surface"
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
        <p className="text-xs leading-relaxed text-muted-foreground">{chart.source}</p>
        <details className="group text-xs text-muted-foreground">
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

function FunnelView({ chart }: { chart: FunnelChart }) {
  const top = chart.stages[0].value;
  return (
    <figure>
      <figcaption className="max-w-[62ch]">
        <p className="text-base font-medium leading-snug">{chart.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{chart.note}</p>
      </figcaption>
      <ol className="mt-7 space-y-2.5">
        {chart.stages.map((stage, i) => {
          const share = stage.value / top;
          const kept = i === 0 ? 100 : Math.round((stage.value / chart.stages[i - 1].value) * 100);
          return (
            <li key={stage.label} className="grid gap-y-0.5 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-x-4">
              <span className="text-sm leading-snug">{stage.label}</span>
              <div className="relative h-7">
                <span
                  className="absolute inset-y-1 left-0 rounded-r-[4px]"
                  style={{ width: `max(3px, calc((100% - 5.5rem) * ${share}))`, background: TONE_COLOR.focus }}
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-sm tabular-nums"
                  style={{ left: `calc(max(3px, calc((100% - 5.5rem) * ${share})) + 0.6rem)` }}
                >
                  {kept}%
                </span>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">{chart.source}</p>
    </figure>
  );
}

const BOX_LABEL = 'font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground';

function JudgeBox({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-md border border-border bg-background/60 p-4">
      <p className={BOX_LABEL}>{label}</p>
      <ul className="mt-3 space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-muted-foreground">
      <Arrow className="rotate-90 md:rotate-0" />
    </div>
  );
}

function JudgeView({ chart }: { chart: JudgeChart }) {
  return (
    <figure>
      <figcaption className="max-w-[62ch]">
        <p className="text-base font-medium leading-snug">{chart.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{chart.note}</p>
      </figcaption>
      <div className="mt-8 grid gap-2 md:grid-cols-[1fr_1.5rem_1fr_1.5rem_1.25fr] md:gap-1">
        <JudgeBox label="The judge saw" items={chart.sees} />
        <FlowArrow />
        <JudgeBox label="It returned" items={chart.returns} />
        <FlowArrow />
        <div className="rounded-md border border-signal/50 bg-background/60 p-4">
          <p className={BOX_LABEL}>Code decided</p>
          <p className="mt-3 text-sm">{chart.rule}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="grid grid-cols-[0.75rem_1fr] gap-x-2">
              <span className="mt-[0.45em] h-2 w-2 rounded-full" style={{ background: TONE_COLOR.focus }} />
              <span>
                <span className="font-medium">Yes.</span> {chart.pass}
              </span>
            </li>
            <li className="grid grid-cols-[0.75rem_1fr] gap-x-2">
              <span className="mt-[0.45em] h-2 w-2 rounded-full bg-muted-foreground/50" />
              <span>
                <span className="font-medium">No.</span> {chart.fail}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">{chart.source}</p>
    </figure>
  );
}

function Caption({ chart }: { chart: ChartSpec }) {
  return (
    <figcaption className="max-w-[62ch]">
      <p className="text-base font-medium leading-snug">{chart.title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{chart.note}</p>
    </figcaption>
  );
}

function Source({ chart }: { chart: ChartSpec }) {
  return <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{chart.source}</p>;
}

function CompareView({ chart }: { chart: CompareChart }) {
  return (
    <figure>
      <Caption chart={chart} />
      <ul className="mt-5 flex gap-x-5 text-xs text-muted-foreground">
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: TONE_COLOR.context }} />
          Before
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: TONE_COLOR.focus }} />
          After
        </li>
      </ul>
      <div className="mt-6 space-y-7">
        {chart.rows.map((row) => {
          const max = Math.max(row.before, row.after);
          const bars = [
            { share: row.before / max, label: row.beforeLabel, color: TONE_COLOR.context },
            { share: row.after / max, label: row.afterLabel, color: TONE_COLOR.focus },
          ];
          return (
            <div key={row.label}>
              <p className="text-sm">{row.label}</p>
              <div className="mt-2.5 space-y-1.5">
                {bars.map((bar) => (
                  <div key={bar.label} className="relative h-7">
                    <span
                      className="absolute inset-y-1 left-0 rounded-r-[4px]"
                      style={{ width: `max(3px, calc((100% - 11rem) * ${bar.share}))`, background: bar.color }}
                    />
                    <span
                      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-sm tabular-nums"
                      style={{ left: `calc(max(3px, calc((100% - 11rem) * ${bar.share})) + 0.6rem)` }}
                    >
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Source chart={chart} />
    </figure>
  );
}

function EquationView({ chart }: { chart: EquationChart }) {
  const last = chart.terms.length - 1;
  return (
    <figure>
      <Caption chart={chart} />
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-6">
        {chart.terms.map((term, i) => (
          <div key={term.label} className="flex items-end gap-x-6">
            <div>
              <p className={`font-mono text-3xl tracking-tight md:text-4xl ${i === last ? 'text-signal' : 'text-foreground'}`}>
                {term.value}
              </p>
              <p className="mt-1.5 text-xs text-muted-foreground">{term.label}</p>
            </div>
            {i < last && (
              <span aria-hidden="true" className="hidden pb-6 font-mono text-2xl text-muted-foreground sm:inline">
                {chart.ops[i]}
              </span>
            )}
          </div>
        ))}
      </div>
      <Source chart={chart} />
    </figure>
  );
}

function TailView({ chart }: { chart: TailChart }) {
  const loss = lossCurve(chart.confidence);
  const pct = Math.round(chart.confidence * 100);
  return (
    <figure>
      <Caption chart={chart} />
      <div aria-hidden="true" className="relative mt-10 h-48 md:h-56">
        <svg viewBox={VIEWBOX} preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
          <path d={loss.area} fill={TONE_COLOR.context} fillOpacity={0.18} stroke="none" />
          <path d={loss.tail} fill={TONE_COLOR.focus} fillOpacity={0.3} stroke="none" />
          <path d={loss.curve} fill="none" stroke={TONE_COLOR.context} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
          <path d={loss.tailCurve} fill="none" stroke={TONE_COLOR.focus} strokeWidth={2} vectorEffect="non-scaling-stroke" />
          <line x1="0%" x2="100%" y1="100%" y2="100%" stroke="hsl(var(--border))" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
        {[
          { at: loss.varAt, label: `VaR ${pct}%`, dashed: false, top: 'top-0' },
          { at: loss.esAt, label: 'Expected Shortfall', dashed: true, top: 'top-10' },
        ].map((mark) => (
          <div key={mark.label} className="absolute inset-y-0" style={{ left: `${mark.at * 100}%` }}>
            <span
              className={`absolute bottom-0 ${mark.top} border-l ${mark.dashed ? 'border-dashed' : ''}`}
              style={{ borderColor: TONE_COLOR.focus }}
            />
            <span
              className={`absolute ${mark.top} -translate-y-full whitespace-nowrap pb-1 font-mono text-[11px] text-foreground ${mark.at > 0.6 ? '-translate-x-full pr-1.5' : 'pl-1.5'}`}
            >
              {mark.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>Small losses</span>
        <span>Large losses</span>
      </div>
      <Source chart={chart} />
    </figure>
  );
}

export function Chart({ chart }: { chart: ChartSpec }) {
  switch (chart.kind) {
    case 'funnel':
      return <FunnelView chart={chart} />;
    case 'judge':
      return <JudgeView chart={chart} />;
    case 'line':
      return <LineChartView chart={chart} />;
    case 'compare':
      return <CompareView chart={chart} />;
    case 'equation':
      return <EquationView chart={chart} />;
    case 'tail':
      return <TailView chart={chart} />;
  }
}
