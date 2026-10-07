import type { Chart, CompareChart, EquationChart, FunnelChart, JudgeChart, LineChart, TailChart } from '@/content/types';
import { Arrow } from './Arrow';
import { inDrawOrder, lossCurve, plotChart, TONE_COLOR, VIEWBOX } from '@/lib/chart';

export function Sparkline({ chart, className }: { chart: LineChart; className?: string }) {
  const series = inDrawOrder(plotChart({ ...chart, y: { format: chart.y.format } }).series);
  return (
    <svg aria-hidden="true" viewBox={VIEWBOX} preserveAspectRatio="none" className={className}>
      {series.map((s) => (
        <g key={s.label}>
          {s.area && <path d={s.area} fill={TONE_COLOR[s.tone]} fillOpacity={0.12} stroke="none" />}
          <path
            d={s.path}
            fill="none"
            stroke={TONE_COLOR[s.tone]}
            strokeWidth={s.tone === 'focus' ? 1.75 : 1.25}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={s.tone === 'baseline' ? '3 3' : undefined}
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
    </svg>
  );
}

function MiniFunnel({ chart, className }: { chart: FunnelChart; className?: string }) {
  const top = chart.stages[0].value;
  return (
    <div aria-hidden="true" className={`flex flex-col justify-between ${className ?? ''}`}>
      {chart.stages.map((stage) => (
        <span
          key={stage.label}
          className="block h-[5px] rounded-r-[3px]"
          style={{ width: `max(3px, ${(stage.value / top) * 100}%)`, background: TONE_COLOR.focus }}
        />
      ))}
    </div>
  );
}

const CHIP = 'whitespace-nowrap rounded-md border px-1.5 py-1.5 font-mono text-[11px] leading-none min-[360px]:px-2';

function Connector() {
  return (
    <span className="flex min-w-[14px] items-center text-muted-foreground">
      <span className="h-px flex-1 bg-muted-foreground/50" />
      <Arrow className="-ml-1.5 shrink-0" />
    </span>
  );
}

function MiniJudge({ className }: { chart: JudgeChart; className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-x-1 min-[360px]:gap-x-1.5">
        <span className={`${CHIP} border-border bg-background text-foreground`}>
          <span className="lg:hidden">Photo</span>
          <span className="hidden lg:inline">Edited photo</span>
        </span>
        <Connector />
        <span className={`${CHIP} border-signal/50 bg-background text-foreground`}>
          <span className="hidden min-[360px]:inline">LLM </span>judge
        </span>
        <Connector />
        <span className={`${CHIP} border-transparent text-signal-foreground`} style={{ background: TONE_COLOR.focus }}>
          Publish
        </span>
        <span className="col-start-1 col-end-4 mx-5 h-3 rounded-b-md border-x border-b border-dashed border-muted-foreground/45" />
        <span className="col-start-1 col-end-4 mt-1 whitespace-nowrap text-center font-mono text-[10px] leading-none text-muted-foreground">
          retry with fix notes
        </span>
      </div>
    </div>
  );
}

function MiniCompare({ chart, className }: { chart: CompareChart; className?: string }) {
  const labelled = chart.rows.length > 1;
  return (
    <div aria-hidden="true" className={`flex flex-col justify-center gap-2 ${className ?? ''}`}>
      {chart.rows.map((row) => {
        const max = Math.max(row.before, row.after);
        const bars = [
          { share: row.before / max, label: row.beforeLabel, color: TONE_COLOR.context },
          { share: row.after / max, label: row.afterLabel, color: TONE_COLOR.focus },
        ];
        return (
          <div key={row.label}>
            {labelled && <p className="mb-1 font-mono text-[10px] leading-none text-muted-foreground">{row.label}</p>}
            <div className="space-y-1">
              {bars.map((bar) => (
                <div key={bar.label} className="flex items-center gap-2">
                  <span
                    className="block h-[6px] shrink-0 rounded-r-[3px]"
                    style={{ width: `max(3px, calc((100% - 8rem) * ${bar.share}))`, background: bar.color }}
                  />
                  <span className="whitespace-nowrap font-mono text-[10px] leading-none text-muted-foreground">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MiniEquation({ chart, className }: { chart: EquationChart; className?: string }) {
  const last = chart.terms.length - 1;
  return (
    <div aria-hidden="true" className={`flex flex-wrap items-center gap-x-2 font-mono text-base tracking-tight sm:text-lg ${className ?? ''}`}>
      {chart.terms.map((term, i) => (
        <span key={term.label} className="flex items-center gap-x-2">
          <span className={i === last ? 'text-signal' : 'text-foreground'}>{term.value}</span>
          {i < last && <span className="text-muted-foreground">{chart.ops[i]}</span>}
        </span>
      ))}
    </div>
  );
}

function MiniTail({ chart, className }: { chart: TailChart; className?: string }) {
  const loss = lossCurve(chart.confidence);
  return (
    <div aria-hidden="true" className={`relative ${className ?? ''}`}>
      <svg viewBox={VIEWBOX} preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <path d={loss.area} fill={TONE_COLOR.context} fillOpacity={0.18} stroke="none" />
        <path d={loss.tail} fill={TONE_COLOR.focus} fillOpacity={0.35} stroke="none" />
        <path d={loss.curve} fill="none" stroke={TONE_COLOR.context} strokeWidth={1.25} vectorEffect="non-scaling-stroke" />
        <path d={loss.tailCurve} fill="none" stroke={TONE_COLOR.focus} strokeWidth={1.75} vectorEffect="non-scaling-stroke" />
      </svg>
      {[
        { at: loss.varAt, label: 'VaR', dashed: false },
        { at: loss.esAt, label: 'ES', dashed: true },
      ].map((mark) => (
        <span key={mark.label} className="absolute inset-y-0" style={{ left: `${mark.at * 100}%` }}>
          <span
            className={`absolute bottom-0 top-3 border-l ${mark.dashed ? 'border-dashed' : ''}`}
            style={{ borderColor: TONE_COLOR.focus }}
          />
          <span className="absolute top-0 pl-1 font-mono text-[10px] leading-none text-foreground">{mark.label}</span>
        </span>
      ))}
    </div>
  );
}

const SPARK_SIZE = 'mt-3 h-14 w-full md:h-16';

export function SparkBody({ chart, className = SPARK_SIZE }: { chart: Chart; className?: string }) {
  switch (chart.kind) {
    case 'funnel':
      return <MiniFunnel chart={chart} className={className} />;
    case 'judge':
      return <MiniJudge chart={chart} className={className} />;
    case 'line':
      return <Sparkline chart={chart} className={className} />;
    case 'compare':
      return <MiniCompare chart={chart} className={className} />;
    case 'equation':
      return <MiniEquation chart={chart} className={className} />;
    case 'tail':
      return <MiniTail chart={chart} className={className} />;
  }
}
