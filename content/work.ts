import * as charts from './charts';
import type { CaseStudy, EarlierWork } from './types';

export const WORK: CaseStudy[] = [
  {
    slug: 'physics-first-solar',
    title: 'Solar forecasting with physics and machine learning',
    org: 'Renewcast',
    period: '2025-2026',
    role: 'Owned the solar forecasting stack',
    summary:
      "I rebuilt Renewcast's production solar forecasting stack, using plant physics as the baseline and machine learning to correct its error. I owned the path from data validation through training, evaluation and serving.",
    metrics: [
      { value: '15.3% → 6.2%', label: 'Portfolio forecast error, May to October 2025' },
    ],
    pipeline: {
      caption: 'The learned model corrects the physics forecast. Serving can fall back to physics when inputs or models fail.',
      stages: [
        { label: 'Weather and plant data' },
        { label: 'Plant physics' },
        { label: 'Learned correction' },
        { label: 'Production forecast' },
      ],
    },
    decisions: [
      {
        title: 'Learn the error left by physics',
        body: 'I calibrated a physical model for each plant, then trained LightGBM on the remaining error. Expressing that error relative to plant capacity lets the learned model work across plants of different sizes.',
      },
      {
        title: 'Treat data quality as part of modelling',
        body: 'I built capacity-change detection and filters for outages and curtailment. These keep temporary operating limits out of the capacity estimate and prevent bad inputs from becoming training targets.',
      },
      {
        title: 'Test models against production',
        body: 'I built an evaluation and release pipeline that compares candidates with forecasts customers actually received. Promotion requires sustained statistical improvement, and the winning experiment generates the serving configuration.',
      },
      {
        title: 'Keep serving available',
        body: 'I designed a fallback path through the full model, a lighter model and physics alone. Missing data or a failed learned model can reduce forecast accuracy without stopping delivery.',
      },
    ],
    results: [
      'The evaluation audit found that six of twelve manually selected models underperformed the production forecasts.',
    ],
    chart: charts.physicsFirstSolar,
    stack: ['Python', 'pvlib', 'LightGBM', 'MLflow', 'Databricks'],
  },
  {
    slug: 'portfolio-framework',
    title: 'A reusable framework for complex solar portfolios',
    org: 'Renewcast',
    period: '2026',
    role: 'Domain model, system design and pipeline implementation',
    summary:
      'I designed a shared forecasting framework and built portfolio pipelines using it. The design separates physical plants, meter observations and customer-facing forecasts, so different portfolio layouts can use the same modelling components.',
    metrics: [
      { value: '4', label: 'Client portfolios with different layouts' },
      { value: '1,189', label: 'Plants in the largest portfolio' },
    ],
    pipeline: {
      caption: 'Sites with meter history receive a learned correction. Physics fills the gaps so the portfolio forecast stays complete.',
      stages: [
        { label: 'Plants and weather' },
        { label: 'Physics forecast' },
        { label: 'Meter correction', note: 'where history exists' },
        { label: 'Portfolio aggregation' },
        { label: 'Serving output', note: 'asset, zone or portfolio' },
      ],
    },
    decisions: [
      {
        title: 'Separate plants, meters and forecast products',
        body: 'One meter can observe several plants, and one portfolio can produce several forecast products. I modelled those relationships separately so training data and serving outputs can have different boundaries.',
      },
      {
        title: 'Work with incomplete meter coverage',
        body: 'I combined learned meter corrections for covered sites with physics forecasts for the rest. A customer can receive a complete aggregate forecast without waiting for every site to have usable history.',
      },
      {
        title: 'Turn client variations into reusable routes',
        body: 'I defined routes for individual assets, whole portfolios, selected zones and meter-level corrections. New requirements compose existing data and modelling steps rather than requiring a separate pipeline.',
      },
    ],
    results: [
      'A 107-site portfolio achieved 10.0% weighted absolute forecast error over 14 months of out-of-sample evaluation.',
    ],
    caveat: 'The pipelines are implemented. The shared platform data model is a proposed design.',
    chart: charts.portfolioFramework,
    stack: ['Python', 'pvlib', 'H3', 'LightGBM', 'MLflow'],
  },
  {
    slug: 'fleet-nowcasting',
    title: 'Fleet-wide models for short-term forecast correction',
    org: 'Renewcast',
    period: '2026',
    role: 'Model design, training and evaluation',
    summary:
      'I designed and trained a small recurrent model that uses recent plant readings to correct the next four hours of a forecast. One model per technology learns across the solar or wind fleet, without per-plant training.',
    metrics: [
      { value: '21.9%', label: 'Lower solar error over the first two hours, backtest' },
      { value: '26.6%', label: 'Lower wind error over the first two hours, backtest' },
    ],
    pipeline: {
      caption: 'The correction uses the forecast already served and recent production readings. It leaves later forecast hours unchanged.',
      stages: [
        { label: 'Existing forecast' },
        { label: 'Recent plant readings' },
        { label: 'Fleet model', note: 'solar or wind' },
        { label: 'Four-hour correction' },
      ],
    },
    decisions: [
      {
        title: 'Learn shared behaviour across the fleet',
        body: 'I used a global GRU to learn how recent forecast errors evolve across plants. This improved on per-plant correction models and avoids maintaining a separate trained model for every asset.',
      },
      {
        title: 'Evaluate under serving conditions',
        body: 'Training uses historical forecasts that were actually served and readings with realistic delays. I held out each client and trained only on earlier months, with checks against future-data leakage.',
      },
      {
        title: 'Keep the correction bounded',
        body: 'The model corrects the original production forecast, never its own previous output. I constrained output to plant capacity and kept the original forecast when readings were more than two hours old.',
      },
    ],
    results: [
      'Evaluated on 224 solar and wind plants. Reported error reductions use fresh readings and exclude curtailed days.',
    ],
    caveat: 'Both models are registered as challengers. These are backtest results; the models are not serving yet.',
    chart: charts.fleetNowcasting,
    stack: ['PyTorch', 'Python', 'MLflow', 'Databricks'],
  },
  {
    slug: 'judge-gated-generation',
    title: 'An AI photo-editing pipeline with quality control',
    org: 'Katalo',
    period: '2026',
    role: 'AI pipeline, evaluation and inference infrastructure',
    summary:
      "I built Katalo's photo-editing pipeline for real-estate agencies. It combines image generation with automated quality checks, targeted repairs and a shared job queue across four AI providers.",
    metrics: [
      { value: '5', label: 'Photo-editing modes on one pipeline' },
      { value: '4', label: 'AI providers behind shared infrastructure' },
    ],
    pipeline: {
      caption: 'A vision judge checks edits against the human editorial rubric. Failed candidates receive repair instructions before another attempt.',
      stages: [
        { label: 'Listing photo' },
        { label: 'Image generation' },
        { label: 'Quality judge' },
        { label: 'Repair or approve' },
        { label: 'Client delivery' },
      ],
    },
    decisions: [
      {
        title: 'Make editorial rules enforceable',
        body: 'I translated the human editing handbook into a structured vision-model rubric. The judge reports scores and structural failures; code applies the acceptance rule before an image becomes eligible for delivery.',
      },
      {
        title: 'Turn rejection into a targeted repair',
        body: 'The judge returns specific fix instructions, which I feed into the next generation attempt. The pipeline can repair a failed candidate or switch model families, with a limit on attempts.',
      },
      {
        title: 'Evaluate what the customer receives',
        body: 'I built human-labelled judge calibration, blind model comparisons and listing-level publish simulations. They replay which image would reach the user and track false acceptance separately from false rejection.',
      },
      {
        title: 'Make inference recoverable',
        body: 'I built customer-level queue limits, adaptive provider limits and expiring capacity leases. Bulk requests share capacity, rate-limit errors reduce throughput, and crashed workers cannot occupy slots indefinitely.',
      },
    ],
    results: [
      'I also built the external generation API with idempotent requests and signed completion webhooks.',
    ],
    chart: charts.providerBackpressure,
    stack: ['TypeScript', 'Convex', 'Gemini', 'FAL', 'OpenRouter'],
  },
  {
    slug: 'bounded-autonomy',
    title: 'Building Otty, an autonomous career agent',
    org: 'Otty',
    period: '2026',
    role: 'Founder · product and engineering',
    summary:
      "I founded and built Otty, a career agent for candidates on WhatsApp. It evaluates jobs and submits applications within each candidate's approved rules, with durable career memory and tracked application state.",
    metrics: [
      { value: '5×', label: 'Lower cost per agent turn' },
      { value: '~0.9 s', label: 'Time to start responding, down from 6.3 s' },
    ],
    pipeline: {
      caption: 'One agent handles the conversation. Research workers assess jobs; a separate service checks permission and submits applications.',
      stages: [
        { label: 'Candidate goals' },
        { label: 'Job research' },
        { label: 'Permission check' },
        { label: 'Submission' },
        { label: 'Application tracking' },
      ],
    },
    decisions: [
      {
        title: 'Separate judgment from permission',
        body: "I gave the research worker tools to assess roles and built a separate submission path. That path checks the candidate's approved CV, preferences, limits and pause state at the moment of action.",
      },
      {
        title: 'Make career state durable',
        body: 'I separated approved facts and permissions from conversation memory, and built an event-based application history. Candidate state stays consistent when messages arrive late or the agent runtime changes.',
      },
      {
        title: 'Make the agent economical',
        body: 'I traced full journeys, pinned prompt-cache routing and loaded tools only when needed. I also batched writes and parallelised independent database reads to remove avoidable latency.',
      },
      {
        title: 'Bound paid work',
        body: 'I separated broad job retrieval from a capped model-review budget and made paid failures terminal. Retries cannot silently replay the same paid work.',
      },
    ],
    results: [
      'In an early rollout, Otty evaluated 449 roles and received provider confirmation for 20 application handoffs.',
    ],
    caveat: 'Early rollout with a small group of candidates.',
    chart: charts.agentEconomics,
    stack: ['TypeScript', 'Postgres', 'AI SDK', 'Cloud Run', 'OpenTelemetry'],
  },
];

export const EARLIER: EarlierWork[] = [
  {
    title: 'Portfolio pricing engine',
    org: 'Utility partner',
    period: '2024-2025',
    href: '/projects/portfolio-pricing',
    line: 'Risk-based pricing that balances growth against portfolio VaR.',
  },
  {
    title: 'Exempt supply matching',
    org: 'Utility partner',
    period: '2024-2025',
    href: '/projects/exempt-supply-matching',
    line: 'Matching SME consumers to local generators under UK exempt-supply rules.',
  },
  {
    title: 'MLOps foundation',
    org: 'tem.',
    period: '2024-2025',
    href: '/projects/mlops-foundation',
    line: 'A shared model contract and a champion-challenger loop.',
  },
  {
    title: 'Energy forecasting models',
    org: 'Energy-tech',
    period: '2023-2025',
    href: '/projects/forecasting-models',
    line: 'Load, generation and price forecasts behind core product features.',
  },
  {
    title: 'Robot failure detection',
    org: 'Datamole',
    period: '2020-2022',
    href: '/projects/robot-failure',
    line: 'Predictive maintenance from industrial robot telemetry.',
  },
];
