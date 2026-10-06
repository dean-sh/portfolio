import type { Chart, ChartFormat, ChartSeries, ChartX } from '@/content/types';

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
  refs: { at: number; label: string }[];
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
  switch (format) {
    case 'percent':
      return `${value.toFixed(1)}%`;
    case 'mwh':
      return `${Math.round(value).toLocaleString('en-GB')} MWh`;
    case 'ms':
      return `${Math.round(value).toLocaleString('en-GB')} ms`;
    case 'tokens':
      return `${(value / 1000).toFixed(1)}k`;
    case 'count':
      return Math.round(value).toLocaleString('en-GB');
  }
}

function formatTick(value: number, format: ChartFormat): string {
  switch (format) {
    case 'percent':
      return `${value}%`;
    case 'tokens':
      return value === 0 ? '0' : `${value / 1000}k`;
    case 'mwh':
    case 'ms':
    case 'count':
      return value.toLocaleString('en-GB');
  }
}

function clockMinutes(value: string): number {
  const [h, m] = value.split(':').map(Number);
  return h * 60 + m;
}

function elapsed(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
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
    case 'week': {
      const short = (v: string) => {
        const [, m, d] = v.split('-').map(Number);
        return `${d} ${MONTHS[m - 1]}`;
      };
      const raw = x.values.map((_, i) => i);
      return {
        raw,
        labels: x.values.map((v) => `Week of ${short(v)}`),
        ticks: evenTicks(raw.length),
        tickLabel: (i) => short(x.values[i]),
      };
    }
    case 'clock': {
      const raw = x.values.map(clockMinutes);
      const first = Math.ceil(raw[0] / 30) * 30;
      return {
        raw,
        labels: x.values,
        ticks: ticksBetween(first, raw[raw.length - 1], 30),
        tickLabel: (v) => `${String(Math.floor(v / 60)).padStart(2, '0')}:${String(v % 60).padStart(2, '0')}`,
      };
    }
    case 'elapsed': {
      const raw = x.values;
      const span = raw[raw.length - 1] - raw[0];
      const step = Math.max(60, Math.round(niceStep(span / 60, 6)) * 60);
      return {
        raw,
        labels: raw.map(elapsed),
        ticks: ticksBetween(raw[0], raw[raw.length - 1], step),
        tickLabel: (v) => `${v / 60} h`,
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

function linePath(xs: number[], ys: number[], step: boolean): string {
  return xs
    .map((x, i) => {
      const px = (x * SIZE).toFixed(1);
      const py = ((1 - ys[i]) * SIZE).toFixed(1);
      if (i === 0) return `M${px} ${py}`;
      if (!step) return `L${px} ${py}`;
      const prev = ((1 - ys[i - 1]) * SIZE).toFixed(1);
      return `L${px} ${prev}L${px} ${py}`;
    })
    .join('');
}

export function plotChart(chart: Chart): Plot {
  const axis = axisX(chart.x);
  const lo = axis.raw[0];
  const hi = axis.raw[axis.raw.length - 1];
  const xFrac = (v: number) => (hi === lo ? 0 : (v - lo) / (hi - lo));
  const xs = axis.raw.map(xFrac);

  const all = chart.series.flatMap((s) => s.values).concat((chart.refs ?? []).map((r) => r.y));
  const dataMin = Math.min(...all);
  const dataMax = Math.max(...all);
  const step = niceStep((chart.y.max ?? dataMax) - (chart.y.min ?? dataMin), 4);
  const yMin = chart.y.min ?? Math.floor(dataMin / step) * step;
  const yMax = chart.y.max ?? Math.ceil(dataMax / step) * step;
  const yFrac = (v: number) => (yMax === yMin ? 0 : (v - yMin) / (yMax - yMin));

  const series: PlotSeries[] = chart.series.map((s) => {
    const ys = s.values.map(yFrac);
    const path = linePath(xs, ys, Boolean(s.step));
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
      at: chart.x.kind === 'month' || chart.x.kind === 'week' ? xs[t] : xFrac(t),
      label: axis.tickLabel(t),
    })),
    yTicks: ticksBetween(yMin, yMax, niceStep(yMax - yMin, 4)).map((v) => ({
      at: yFrac(v),
      label: formatTick(v, chart.y.format),
    })),
    refs: (chart.refs ?? []).map((r) => ({ at: yFrac(r.y), label: r.label })),
    series,
    points: (chart.points ?? []).map((p) => ({ x: xs[p.at], y: focus.ys[p.at], label: p.label })),
  };
}
