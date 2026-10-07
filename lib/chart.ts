import type { ChartFormat, ChartSeries, ChartX, LineChart } from '@/content/types';

export type PlotSeries = {
  label: string;
  tone: ChartSeries['tone'];
  path: string;
  area?: string;
  ys: number[];
  display: string[];
};

export type Plot = {
  xs: number[];
  xLabels: string[];
  xTicks: { at: number; label: string }[];
  yTicks: { at: number; label: string }[];
  series: PlotSeries[];
  points: { x: number; y: number; label: string }[];
};

export const TONE_COLOR: Record<ChartSeries['tone'], string> = {
  focus: 'var(--chart-focus)',
  context: 'var(--chart-context)',
  baseline: 'var(--chart-context)',
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const SIZE = 1000;

export function formatValue(value: number, format: ChartFormat): string {
  return format === 'percent' ? `${value.toFixed(1)}%` : `${Math.round(value).toLocaleString('en-GB')} MWh`;
}

function formatTick(value: number, format: ChartFormat): string {
  return format === 'percent' ? `${value}%` : value.toLocaleString('en-GB');
}

function niceStep(span: number, count: number): number {
  const raw = span / Math.max(count, 1);
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const unit = raw / magnitude;
  const nice = unit <= 1 ? 1 : unit <= 2 ? 2 : unit <= 2.5 ? 2.5 : unit <= 5 ? 5 : 10;
  return nice * magnitude;
}

function ticksBetween(min: number, max: number, step: number): number[] {
  const out: number[] = [];
  for (let v = Math.ceil(min / step) * step; v <= max + step * 1e-9; v += step) {
    out.push(Number(v.toFixed(6)));
  }
  return out;
}

function axisX(x: ChartX): { raw: number[]; labels: string[]; ticks: number[]; tickLabel: (v: number) => string } {
  const evenTicks = (n: number, max = 6) => {
    if (n <= max) return Array.from({ length: n }, (_, i) => i);
    const step = (n - 1) / (max - 1);
    return Array.from({ length: max }, (_, i) => Math.round(i * step));
  };
  switch (x.kind) {
    case 'month': {
      const parse = (v: string) => v.split('-').map(Number);
      const labels = x.values.map((v) => {
        const [y, m] = parse(v);
        return `${MONTHS[m - 1]} ${y}`;
      });
      const raw = x.values.map((_, i) => i);
      return {
        raw,
        labels,
        ticks: evenTicks(raw.length, 7),
        tickLabel: (i) => {
          const [y, m] = parse(x.values[i]);
          return i === 0 || m === 1 ? `${MONTHS[m - 1]} ${String(y).slice(2)}` : MONTHS[m - 1];
        },
      };
    }
    case 'number': {
      const raw = x.values;
      const step = niceStep(raw[raw.length - 1] - raw[0], 6);
      const fmt = (v: number) => `${v.toLocaleString('en-GB')}${x.unit}`;
      return {
        raw,
        labels: raw.map((v) => (x.label ? `${x.label} ${fmt(v)}` : fmt(v))),
        ticks: ticksBetween(raw[0], raw[raw.length - 1], step),
        tickLabel: fmt,
      };
    }
  }
}

function linePath(xs: number[], ys: number[]): string {
  return xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${(x * SIZE).toFixed(1)} ${((1 - ys[i]) * SIZE).toFixed(1)}`).join('');
}

export function plotChart(chart: LineChart): Plot {
  const axis = axisX(chart.x);
  const lo = axis.raw[0];
  const hi = axis.raw[axis.raw.length - 1];
  const xFrac = (v: number) => (hi === lo ? 0 : (v - lo) / (hi - lo));
  const xs = axis.raw.map(xFrac);

  const all = chart.series.flatMap((s) => s.values);
  const dataMin = Math.min(...all);
  const dataMax = Math.max(...all);
  const step = niceStep((chart.y.max ?? dataMax) - (chart.y.min ?? dataMin), 4);
  const yMin = chart.y.min ?? Math.floor(dataMin / step) * step;
  const yMax = chart.y.max ?? Math.ceil(dataMax / step) * step;
  const yFrac = (v: number) => (yMax === yMin ? 0 : (v - yMin) / (yMax - yMin));

  const series: PlotSeries[] = chart.series.map((s) => {
    const ys = s.values.map(yFrac);
    const path = linePath(xs, ys);
    const area =
      chart.series.length === 1
        ? `${path}L${(xs[xs.length - 1] * SIZE).toFixed(1)} ${SIZE}L${(xs[0] * SIZE).toFixed(1)} ${SIZE}Z`
        : undefined;
    return {
      label: s.label,
      tone: s.tone,
      path,
      area,
      ys,
      display: s.values.map((v) => formatValue(v, chart.y.format)),
    };
  });

  const focus = series.find((s) => s.tone === 'focus') ?? series[0];

  return {
    xs,
    xLabels: axis.labels,
    xTicks: axis.ticks.map((t) => ({
      at: chart.x.kind === 'month' ? xs[t] : xFrac(t),
      label: axis.tickLabel(t),
    })),
    yTicks: ticksBetween(yMin, yMax, niceStep(yMax - yMin, 4)).map((v) => ({
      at: yFrac(v),
      label: formatTick(v, chart.y.format),
    })),
    series,
    points: (chart.points ?? []).map((p) => ({ x: xs[p.at], y: focus.ys[p.at], label: p.label })),
  };
}
