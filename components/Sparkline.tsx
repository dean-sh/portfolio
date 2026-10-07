import type { Chart, FunnelChart, JudgeChart, LineChart } from '@/content/types';
import { Arrow } from './Arrow';
import { plotChart, TONE_COLOR } from '@/lib/chart';

const TONE_ORDER = { baseline: 0, context: 1, focus: 2 } as const;

export function Sparkline({ chart, className }: { chart: LineChart; className?: string }) {
  const series = [...plotChart({ ...chart, y: { format: chart.y.format } }).series].sort(
    (a, b) => TONE_ORDER[a.tone] - TONE_ORDER[b.tone],
  );
  return (
    <svg aria-hidden="true" viewBox="0 0 1000 1000" preserveAspectRatio="none" className={className}>
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

const CHIP = 'whitespace-nowrap rounded border px-1.5 py-1 font-mono text-[11px] leading-none min-[360px]:px-2';

function MiniJudge({ className }: { chart: JudgeChart; className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-start ${className ?? ''}`}>
      <div className="grid grid-cols-[auto_auto_auto_auto_auto] items-center gap-x-1.5 min-[360px]:gap-x-2">
        <span className={`${CHIP} border-border bg-background text-foreground`}>
          <span className="sm:hidden">Photo</span>
          <span className="hidden sm:inline">Edited photo</span>
        </span>
        <Arrow className="text-muted-foreground" />
        <span className={`${CHIP} border-signal/50 bg-background text-foreground`}>
          <span className="hidden min-[360px]:inline">LLM </span>judge
        </span>
        <Arrow className="text-muted-foreground" />
        <span className={`${CHIP} border-transparent text-signal-foreground`} style={{ background: TONE_COLOR.focus }}>
          Publish
        </span>
        <span className="col-start-1 col-end-4 mx-3 h-2.5 rounded-b-sm border-x border-b border-dashed border-muted-foreground/40" />
        <span className="col-start-1 col-end-4 mt-1 text-center font-mono text-[10px] leading-none text-muted-foreground">
          retry with fix notes
        </span>
      </div>
    </div>
  );
}

const SPARK_SIZE = 'mt-3 h-14 w-full md:h-16';

function SparkBody({ chart }: { chart: Chart }) {
  switch (chart.kind) {
    case 'funnel':
      return <MiniFunnel chart={chart} className={SPARK_SIZE} />;
    case 'judge':
      return <MiniJudge chart={chart} className={SPARK_SIZE} />;
    case 'line':
      return <Sparkline chart={chart} className={SPARK_SIZE} />;
  }
}

export function SparkCard({ chart }: { chart: Chart }) {
  return (
    <div className="rounded-md border border-border bg-surface px-4 py-3 transition-colors duration-200 group-hover:border-signal/40">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-[11px] leading-snug">
        <span className="text-muted-foreground">{chart.spark?.label ?? chart.title}</span>
        {chart.spark && <span className="font-medium text-signal">{chart.spark.value}</span>}
      </div>
      <SparkBody chart={chart} />
    </div>
  );
}
