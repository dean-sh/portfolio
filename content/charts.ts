import type { Chart } from './types';

export const physicsFirstSolar: Chart = {
  kind: 'line',
  title: 'Solar forecast error after the rebuild',
  note: 'Monthly average error as a share of plant capacity.',
  source: 'Renewcast portfolio nMAE, May to October 2025.',
  x: { kind: 'month', values: ["2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10"] },
  y: { format: 'percent', min: 0 },
  series: [{ label: 'Portfolio nMAE', tone: 'focus', values: [15.3, 11.1, 10.1, 9.4, 7.4, 6.2] }],
  points: [{ at: 0, label: '15.3%' }, { at: 5, label: '6.2%' }],
  spark: { label: 'Portfolio error by month', value: '15.3% → 6.2%' },
};

export const portfolioFramework: Chart = {
  kind: 'line',
  title: 'Forecast against metered energy, 107-site portfolio',
  note: 'Monthly energy in MWh. Each month was forecast by a model that never saw it in training.',
  source: 'Meter-head backtest, July 2025 to August 2026, 14 monthly folds.',
  x: { kind: 'month', values: ["2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"] },
  y: { format: 'mwh', min: 0 },
  series: [
    { label: 'Metered', tone: 'context', values: [2976, 3064, 2228, 1346, 697, 397, 573, 862, 2527, 2649, 3020, 3335, 3266, 2792] },
    { label: 'Forecast', tone: 'focus', values: [2898, 3287, 2162, 1280, 681, 341, 673, 899, 2415, 2667, 2908, 3197, 3244, 2791] },
  ],
  spark: { label: 'Forecast vs metered energy, by month', value: '10.0% error' },
};

export const fleetNowcasting: Chart = {
  kind: 'line',
  title: 'Solar forecast error over the next four hours',
  note: 'The fleet model halves the error 15 minutes ahead, and the gain fades by four hours. Persistence simply assumes the latest error carries on.',
  source: 'Leave-one-client-out backtest on served forecasts, fresh readings, 231 plant-months.',
  x: { kind: 'number', values: [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240], unit: ' min' },
  y: { format: 'percent', min: 0 },
  series: [
    { label: 'Served forecast', tone: 'context', values: [6.07, 6.06, 5.98, 6.06, 6.12, 6.09, 6.03, 6.09, 6.14, 6.13, 6.08, 6.15, 6.21, 6.18, 6.1, 6.22] },
    { label: 'Persistence', tone: 'baseline', values: [2.74, 3.67, 4.31, 4.63, 4.95, 5.16, 5.34, 5.57, 5.53, 5.68, 5.76, 5.85, 5.97, 5.99, 6.04, 6.22] },
    { label: 'Fleet GRU', tone: 'focus', values: [3.06, 3.75, 4.09, 4.39, 4.66, 4.93, 5.08, 5.34, 5.25, 5.46, 5.63, 5.71, 5.68, 5.74, 6.0, 6.22] },
  ],
  spark: { label: 'Fleet model vs delivered forecast, error by minutes ahead', value: '21.9% lower' },
};

export const ottyFunnel: Chart = {
  kind: 'funnel',
  title: 'From roles judged to interviews, first four weeks',
  note: 'Each percentage is the share kept from the stage above. The agent turned down most roles, and every application it sent went through the candidate\'s rules first.',
  source: 'Otty production data, 7 candidates, 10 August to 7 September 2026.',
  stages: [
    { label: 'Roles judged', value: 438 },
    { label: 'Chosen to apply', value: 97 },
    { label: 'Applications submitted', value: 47 },
    { label: 'Submission confirmed', value: 27 },
    { label: 'Employer responses', value: 10 },
    { label: 'Interviews', value: 4 },
  ],
  spark: { label: 'Roles judged to interviews, first four weeks', value: '8.5% of applications led to interviews' },
};

export const kataloJudge: Chart = {
  kind: 'judge',
  title: 'How the judge decides',
  note: 'A vision model compares every edited photo with the original and scores it against the rubric human editors use. The model only reports. Plain code makes the call. Of the edits it approved, 95% were approved by human reviewers too.',
  source: 'Katalo judge prompt and pipeline code. Precision and accuracy from calibration against human-labelled edits.',
  sees: ['Original photo', 'Edited photo', 'Editors\' rubric'],
  returns: ['Score from 1 to 5', 'Structural failures', 'Fix instructions'],
  rule: 'Score of 4 or more and no structural failure',
  pass: 'Publish to the listing',
  fail: 'Retry with the fix instructions, up to 3 attempts',
  spark: { label: 'How the LLM judge decides', value: '95% precision' },
};


