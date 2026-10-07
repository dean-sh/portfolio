import type { Chart } from './types';

export const physicsFirstSolar: Chart = {
  kind: 'line',
  title: 'Solar forecast error after the rebuild',
  note: 'Monthly average error as a share of plant capacity.',
  source: 'Renewcast solar portfolio, May to October 2025.',
  x: { kind: 'month', values: ["2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10"] },
  y: { format: 'percent', min: 0 },
  series: [{ label: 'Portfolio nMAE', tone: 'focus', values: [15.3, 11.1, 10.1, 9.4, 7.4, 6.2] }],
  points: [{ at: 0, label: '15.3%' }, { at: 5, label: '6.2%' }],
  sparkLabel: 'Portfolio error by month, May to October 2025',
};

export const portfolioFramework: Chart = {
  kind: 'line',
  title: 'Forecast against metered energy, 107-site portfolio',
  note: 'Monthly energy in MWh. Each month was forecast without seeing that month\'s data.',
  source: '107-site portfolio, July 2025 to August 2026.',
  x: { kind: 'month', values: ["2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"] },
  y: { format: 'mwh', min: 0 },
  series: [
    { label: 'Metered', tone: 'context', values: [2976, 3064, 2228, 1346, 697, 397, 573, 862, 2527, 2649, 3020, 3335, 3266, 2792] },
    { label: 'Forecast', tone: 'focus', values: [2898, 3287, 2162, 1280, 681, 341, 673, 899, 2415, 2667, 2908, 3197, 3244, 2791] },
  ],
  sparkLabel: 'Forecast vs metered energy, by month',
};

export const fleetNowcasting: Chart = {
  kind: 'line',
  title: 'Solar forecast error over the next four hours',
  note: 'Average error at each step ahead. Persistence is slightly better for the first 30 minutes and the fleet model is better from 45 minutes. Both hand back to the delivered forecast at four hours.',
  source: 'Backtest of an earlier version of the fleet model on Renewcast\'s solar fleet.',
  x: { kind: 'number', values: [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240], unit: ' min' },
  y: { format: 'percent', min: 0 },
  series: [
    { label: 'Served forecast', tone: 'context', values: [6.07, 6.06, 5.98, 6.06, 6.12, 6.09, 6.03, 6.09, 6.14, 6.13, 6.08, 6.15, 6.21, 6.18, 6.1, 6.22] },
    { label: 'Persistence', tone: 'baseline', values: [2.74, 3.67, 4.31, 4.63, 4.95, 5.16, 5.34, 5.57, 5.53, 5.68, 5.76, 5.85, 5.97, 5.99, 6.04, 6.22] },
    { label: 'Fleet GRU', tone: 'focus', values: [3.06, 3.75, 4.09, 4.39, 4.66, 4.93, 5.08, 5.34, 5.25, 5.46, 5.63, 5.71, 5.68, 5.74, 6.0, 6.22] },
  ],
  sparkLabel: 'Fleet model vs delivered forecast, error by minutes ahead',
};

export const ottyFunnel: Chart = {
  kind: 'funnel',
  title: 'From roles judged to interviews, first four weeks',
  note: 'Each percentage is the share kept from the stage above. The agent turned down most roles, and every application it sent went through the candidate\'s rules first.',
  source: 'Otty production data, first four weeks.',
  stages: [
    { label: 'Roles judged', value: 438 },
    { label: 'Chosen to apply', value: 97 },
    { label: 'Applications submitted', value: 47 },
    { label: 'Submission confirmed', value: 27 },
    { label: 'Employer responses', value: 10 },
    { label: 'Interviews', value: 4 },
  ],
  sparkLabel: 'Roles judged to interviews, first four weeks',
};

export const kataloJudge: Chart = {
  kind: 'judge',
  title: 'How the judge decided',
  note: 'A vision model compared every edited photo with the original and scored it against the rubric human editors used. The model only reported. Plain code made the call. Of the edits it approved, 95% were approved by human reviewers too.',
  source: 'Precision measured against human reviewers.',
  sees: ['Original photo', 'Edited photo', 'Editors\' rubric'],
  returns: ['Score from 1 to 5', 'Structural failures', 'Fix instructions'],
  rule: 'Score of 4 or more and no structural failure',
  pass: 'Publish to the listing',
  fail: 'Retry with the fix instructions, up to 3 attempts',
  sparkLabel: 'How the LLM judge decided',
};

export const pricingTail: Chart = {
  kind: 'tail',
  title: 'What every price accounts for',
  note: 'An illustrative distribution of portfolio losses. VaR marks the loss exceeded only 5% of the time. Expected Shortfall is the average of those worst cases, which is where volatile energy markets hurt.',
  source: 'Illustrative shape.',
  confidence: 0.95,
  sparkLabel: 'Portfolio loss distribution, illustrative',
};

export const exemptEquation: Chart = {
  kind: 'equation',
  title: 'One pairing, one year',
  note: 'A solar farm generating about 7 GWh a year, matched with a business complex of 20 to 25 SMEs. Up to 85% of the output is used locally, and every exempt MWh skips about £50 in policy levies.',
  source: 'Worked example from the project.',
  terms: [
    { value: '6 GWh', label: 'Used locally a year' },
    { value: '£50/MWh', label: 'Levies avoided' },
    { value: '£300,000', label: 'Potential saving a year' },
  ],
  ops: ['×', '='],
  sparkLabel: 'One pairing, one year',
};

export const forecastingCompare: Chart = {
  kind: 'compare',
  title: 'Forecast error against the benchmark',
  note: 'MAPE for load and generation, aggregated across hundreds of production sites and indexed so the benchmark is 100.',
  source: 'Production evaluation across client sites.',
  rows: [{ label: 'MAPE, indexed', before: 100, after: 70, beforeLabel: 'Benchmark 100', afterLabel: 'Global models under 70' }],
  sparkLabel: 'Forecast error vs benchmark, indexed',
};

export const mlopsCompare: Chart = {
  kind: 'compare',
  title: 'Before and after the rebuild',
  note: 'Deploy prep fell from 4 to 5 days to under one, and the team tested three times as many challengers a week.',
  source: 'Six weeks from concept to rollout.',
  rows: [
    { label: 'Deploy prep', before: 4.5, after: 1, beforeLabel: '4-5 days', afterLabel: 'under 1 day' },
    { label: 'Challengers per week', before: 1, after: 3, beforeLabel: '1×', afterLabel: '3×' },
  ],
  sparkLabel: 'Before and after the rebuild',
};

export const robotCompare: Chart = {
  kind: 'compare',
  title: 'Unplanned downtime, before and after',
  note: 'Indexed so downtime before the system is 100.',
  source: 'Automotive production lines, Datamole AI.',
  rows: [{ label: 'Unplanned downtime, indexed', before: 100, after: 65, beforeLabel: 'Before 100', afterLabel: 'After under 65' }],
  sparkLabel: 'Unplanned downtime, indexed',
};

