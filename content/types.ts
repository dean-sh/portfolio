export type Org = 'Renewcast' | 'Katalo' | 'Otty';

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
  org: Org;
  period: string;
  role: string;
  summary: string;
  metrics: Metric[];
  pipeline: { caption: string; stages: Stage[] };
  decisions: Decision[];
  results: string[];
  caveat?: string;
  stack: string[];
  chart?: Chart;
};

export type ChartX =
  | { kind: 'month'; values: string[] }
  | { kind: 'week'; values: string[] }
  | { kind: 'clock'; values: string[] }
  | { kind: 'elapsed'; values: number[] }
  | { kind: 'number'; values: number[]; unit: string; label?: string };

export type ChartFormat = 'percent' | 'mwh' | 'ms' | 'tokens' | 'count';

export type ChartSeries = {
  label: string;
  tone: 'focus' | 'context' | 'baseline';
  values: number[];
  step?: boolean;
};

export type Chart = {
  title: string;
  note: string;
  source: string;
  x: ChartX;
  y: { format: ChartFormat; min?: number; max?: number };
  series: ChartSeries[];
  refs?: { y: number; label: string }[];
  points?: { at: number; label: string }[];
};

export type EarlierWork = {
  title: string;
  org: string;
  period: string;
  href: string;
  line: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};
