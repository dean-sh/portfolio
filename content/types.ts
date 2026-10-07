export type Org = 'Renewcast' | 'Katalo' | 'Otty' | 'tem.' | 'Energy-tech' | 'Datamole';

export type Metric = {
  value: string;
  label: string;
};

export type Stage = {
  label: string;
  note?: string;
};

export type Decision = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  hook: string;
  org: Org;
  period: string;
  role: string;
  summary: string;
  metrics: Metric[];
  pipeline: { caption: string; stages: Stage[] };
  decisions: Decision[];
  results: string[];
  stack: string[];
  chart?: Chart;
};

export type ChartX =
  | { kind: 'month'; values: string[] }
  | { kind: 'number'; values: number[]; unit: string; label?: string };

export type ChartFormat = 'percent' | 'mwh';

export type ChartSeries = {
  label: string;
  tone: 'focus' | 'context' | 'baseline';
  values: number[];
};

type ChartCommon = {
  title: string;
  note: string;
  source: string;
  spark?: { label: string; value: string };
};

export type LineChart = ChartCommon & {
  kind: 'line';
  x: ChartX;
  y: { format: ChartFormat; min?: number; max?: number };
  series: ChartSeries[];
  points?: { at: number; label: string }[];
};

export type FunnelChart = ChartCommon & {
  kind: 'funnel';
  stages: { label: string; value: number }[];
};

export type JudgeChart = ChartCommon & {
  kind: 'judge';
  sees: string[];
  returns: string[];
  rule: string;
  pass: string;
  fail: string;
};

export type CompareChart = ChartCommon & {
  kind: 'compare';
  rows: { label: string; before: number; after: number; beforeLabel: string; afterLabel: string }[];
};

export type EquationChart = ChartCommon & {
  kind: 'equation';
  terms: { value: string; label: string }[];
  ops: string[];
};

export type TailChart = ChartCommon & {
  kind: 'tail';
  confidence: number;
};

export type Chart = LineChart | FunnelChart | JudgeChart | CompareChart | EquationChart | TailChart;


export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};
