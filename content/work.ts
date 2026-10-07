import * as charts from './charts';
import type { CaseStudy, EarlierWork } from './types';

export const WORK: CaseStudy[] = [
  {
    slug: 'physics-first-solar',
    title: 'Solar forecasts were off by 15%. Five months later, 6%.',
    hook: 'Most of a solar plant\'s output comes down to sun angle, panel layout and temperature. Physics handles that part. I trained the model only on what physics gets wrong.',
    org: 'Renewcast',
    period: '2025-2026',
    role: 'Owned the solar forecasting stack',
    summary:
      'Renewcast sells solar production forecasts to European energy companies. I rebuilt its forecasting stack so a physical model of each plant does most of the work and machine learning only fixes what physics gets wrong. Portfolio error fell every month for five months.',
    metrics: [
      { value: '15.3% → 6.2%', label: 'Portfolio forecast error, May to October 2025' },
    ],
    pipeline: {
      caption: 'Physics produces the forecast and a learned model corrects it. If data or the model fails, serving falls back to physics alone.',
      stages: [
        { label: 'Weather and plant data' },
        { label: 'Plant physics' },
        { label: 'Learned correction' },
        { label: 'Production forecast' },
      ],
    },
    decisions: [
      {
        title: 'Learn only the error physics leaves',
        body: 'Each plant gets a calibrated physical model. LightGBM trains on the gap between that model and what the plant actually produced, measured as a share of capacity, so one model works for plants of any size.',
      },
      {
        title: 'Stop trusting the configured capacity',
        body: 'The capacity in the config was often wrong. I detect real capacity changes from the data and filter out outages and curtailment, so a temporary cap never becomes something the model learns.',
      },
      {
        title: 'Release a model only when it beats production',
        body: 'A new model replaces the current one only if it beats the forecasts customers actually received by more than two standard errors, over at least four weeks. The winning run writes the serving config itself, so nobody edits it by hand.',
      },
      {
        title: 'Keep forecasts going when parts fail',
        body: 'If data is missing or the learned model breaks, serving drops to a lighter model and then to physics alone. Accuracy can dip. Customers still get a forecast.',
      },
    ],
    results: [
      'The audit behind the new release rule found that six of twelve hand-picked models were worse than the forecasts already in production.',
    ],
    chart: charts.physicsFirstSolar,
    stack: ['Python', 'pvlib', 'LightGBM', 'MLflow', 'Databricks'],
  },
  {
    slug: 'portfolio-framework',
    title: 'One forecasting system for portfolios that all look different',
    hook: 'One client had 1,189 plants behind 1,104 meters. Another needed forecasts for individual zones. A third had meter data for only some sites. Each one used to mean a new pipeline.',
    org: 'Renewcast',
    period: '2026',
    role: 'Designed the framework and built the pipelines',
    summary:
      'Renewcast\'s forecasting pipeline assumed one ID per plant, with the data already prepared. Portfolios broke that assumption. I modelled plants, meters and the forecasts we sell as separate things, so each new portfolio reuses the same steps instead of needing its own pipeline.',
    metrics: [
      { value: '4', label: 'Client portfolios with different layouts' },
      { value: '1,189', label: 'Plants in the largest portfolio' },
    ],
    pipeline: {
      caption: 'Sites with meter history get a learned correction. The rest use physics, so the portfolio forecast never leaves a site out.',
      stages: [
        { label: 'Plants and weather' },
        { label: 'Physics forecast' },
        { label: 'Meter correction', note: 'where history exists' },
        { label: 'Portfolio total' },
        { label: 'Delivered forecast', note: 'asset, zone or portfolio' },
      ],
    },
    decisions: [
      {
        title: 'Plants, meters and forecasts are different things',
        body: 'One meter can measure several plants, and one portfolio can be sold as several forecasts. Modelling those relationships separately lets training follow the meters while delivery follows whatever grouping the client buys.',
      },
      {
        title: 'Start before every site has meter data',
        body: 'Sites with usable meter history get a learned correction and the others get the physics forecast. The client gets a complete portfolio forecast without waiting for every site to build up history.',
      },
      {
        title: 'Build new clients from existing routes',
        body: 'Forecasting one asset, a whole portfolio, a single zone or meter-level corrections are all routes built from the same steps. A new client requirement is usually a new combination of steps that already exist.',
      },
    ],
    results: [
      'A 107-site portfolio scored 10.0% weighted absolute error over 14 months, each month forecast by a model that had never seen it.',
    ],
    caveat: 'The pipelines run today. The shared platform data model is still a proposal.',
    chart: charts.portfolioFramework,
    stack: ['Python', 'pvlib', 'H3', 'LightGBM', 'MLflow'],
  },
  {
    slug: 'fleet-nowcasting',
    title: 'Weather forecasts can\'t see what a plant did an hour ago. This model can.',
    hook: 'A small network reads each plant\'s latest readings and corrects the next four hours. One model covers the whole solar fleet. In backtests it cut short-term error by 21.9%.',
    org: 'Renewcast',
    period: '2026',
    role: 'Model design, training and evaluation',
    summary:
      'Renewcast\'s forecasts come from weather models, so they miss what a plant is doing right now. Soiling, a tripped inverter or a cloud bank 20 km off course all show up in the readings first. I trained a small recurrent network that reads the latest readings next to the forecast customers already received and corrects the next four hours. One model covers the solar fleet and another covers the wind fleet.',
    metrics: [
      { value: '21.9%', label: 'Lower solar error in the first two hours, backtest' },
      { value: '26.6%', label: 'Lower wind error in the first two hours, backtest' },
    ],
    pipeline: {
      caption: 'The model reads the forecast customers already got and the latest readings. Anything beyond four hours is left as it was.',
      stages: [
        { label: 'Delivered forecast' },
        { label: 'Latest plant readings' },
        { label: 'Fleet model', note: 'solar or wind' },
        { label: 'Four-hour correction' },
      ],
    },
    decisions: [
      {
        title: 'One model for the whole fleet',
        body: 'A single GRU learns how forecast errors develop across plants. It beat per-plant models, and it means maintaining two models instead of 224.',
      },
      {
        title: 'Test it the way it will run',
        body: 'Training uses forecasts that were actually delivered and readings with realistic delays. I held out each client in turn and scored each month with a model trained only on earlier months. A check rejects any feature that leaks the future.',
      },
      {
        title: 'Never correct its own output',
        body: 'The model always corrects the original forecast, never one it already corrected. Output stays within plant capacity. If the newest reading is more than two hours old, the original forecast goes out unchanged.',
      },
    ],
    results: [
      'Tested on 224 solar and wind plants. The figures use fresh readings and leave out curtailed days, when the grid operator capped output.',
    ],
    caveat: 'These are backtest results. Both models are registered as challengers and aren\'t serving yet.',
    chart: charts.fleetNowcasting,
    stack: ['PyTorch', 'Python', 'MLflow', 'Databricks'],
  },
  {
    slug: 'judge-gated-generation',
    title: 'AI can stage a living room. It shouldn\'t move the walls.',
    hook: 'Image models are good at furniture and bad at architecture. I built the pipeline that checks every edit and repairs the ones that change the room.',
    org: 'Katalo',
    period: '2026',
    role: 'AI pipeline, evals and inference infrastructure',
    summary:
      'Katalo stages, renovates and declutters listing photos for real-estate agencies. Image models are good at furniture and bad at walls, and a photo that misrepresents a property can\'t be published. I built the pipeline that generates each edit, checks it and repairs the ones that fail.',
    metrics: [
      { value: '95%', label: 'Precision against human reviewers' },
      { value: '91%', label: 'Accuracy against human reviewers' },
    ],
    pipeline: {
      caption: 'A vision model checks every edit against the rules human editors follow. A failed edit comes back with fix instructions for the next attempt.',
      stages: [
        { label: 'Listing photo' },
        { label: 'Image generation' },
        { label: 'Quality judge' },
        { label: 'Repair or approve' },
        { label: 'Delivery' },
      ],
    },
    decisions: [
      {
        title: 'Turn the editing handbook into a rubric',
        body: 'I rewrote the handbook human editors use as a structured rubric for a vision model. The model scores each edit and flags structural failures like a moved window. Plain code then decides whether the image can ship.',
      },
      {
        title: 'Use rejections as repair instructions',
        body: 'When the judge rejects an edit, it says what to fix. Those instructions go into the next attempt, which can also switch to a different model family. Attempts are capped.',
      },
      {
        title: 'Measure what the agency would see',
        body: 'I calibrated the judge against human labels and replay each listing to see which image would actually have been published. Wrong approvals and wrong rejections are counted separately, because they cost different things.',
      },
      {
        title: 'Share four providers without falling over',
        body: 'Each provider has its own rate limits and failure modes. Per-customer limits stop one bulk upload from blocking everyone else. After a 429 the limiter halves how many requests it sends at once, and capacity leases expire, so a crashed worker can\'t hold a slot.',
      },
    ],
    results: [
      'Agencies can also call the pipeline through an API. A retried request never generates twice, and completion webhooks are signed.',
    ],
    chart: charts.kataloJudge,
    stack: ['TypeScript', 'Convex', 'Gemini', 'FAL', 'OpenRouter'],
  },
  {
    slug: 'bounded-autonomy',
    title: 'An AI that applies to jobs for you, only where you said yes',
    hook: 'Otty finds roles, judges fit and applies over WhatsApp. The model decides what fits. Code checks your rules before anything goes out.',
    org: 'Otty',
    period: '2026',
    role: 'Founder · product and engineering',
    summary:
      'Otty is a career agent you talk to on WhatsApp. It researches roles, decides which ones fit and applies under your name, but only within rules you\'ve approved. I founded the company and built the product.',
    metrics: [
      { value: '5×', label: 'Lower cost per agent turn' },
      { value: '~0.9 s', label: 'Time to first response, down from 6.3 s' },
    ],
    pipeline: {
      caption: 'One agent talks to the candidate and research workers assess jobs. A separate service checks permission before anything is submitted.',
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
        title: 'The agent judges fit. Code grants permission.',
        body: 'Research workers can assess a role but can\'t apply to it. Every application goes through a separate path that checks the candidate\'s approved CV, preferences, limits and pause setting at the moment of submission.',
      },
      {
        title: 'Keep facts and memory apart',
        body: 'Approved facts and permissions live in the database. Conversation memory can shape a reply but can never authorise an action. Each application\'s status is rebuilt from an event log, so a late email can\'t roll it back.',
      },
      {
        title: 'Find where the cost actually goes',
        body: 'Tracing whole user journeys showed a prompt cache that never hit, every tool loaded on every call and database reads running one after another. Fixing those cut cost per turn 5× and time to first response from 6.3 s to about 0.9 s.',
      },
      {
        title: 'Cap the paid work',
        body: 'Finding jobs is cheap, so the search is wide. Paying a model to review them is expensive, so I capped that budget. The system never retries a failed paid call, so one bug can\'t spend the money twice.',
      },
    ],
    results: [
      'In its first four weeks, Otty chose to apply to 22% of the roles it judged. 21% of the applications it sent got an employer response, and 8.5% led to an interview.',
    ],
    caveat: 'Early rollout with a small group of candidates.',
    chart: charts.ottyFunnel,
    stack: ['TypeScript', 'Postgres', 'AI SDK', 'Cloud Run', 'OpenTelemetry'],
  },
];

export const EARLIER: EarlierWork[] = [
  {
    title: 'Portfolio pricing engine',
    org: 'Utility partner',
    period: '2024-2025',
    href: '/projects/portfolio-pricing',
  },
  {
    title: 'Exempt supply matching',
    org: 'Utility partner',
    period: '2024-2025',
    href: '/projects/exempt-supply-matching',
  },
  {
    title: 'MLOps foundation',
    org: 'tem.',
    period: '2024-2025',
    href: '/projects/mlops-foundation',
  },
  {
    title: 'Energy forecasting models',
    org: 'Energy-tech',
    period: '2023-2025',
    href: '/projects/forecasting-models',
  },
  {
    title: 'Robot failure detection',
    org: 'Datamole',
    period: '2020-2022',
    href: '/projects/robot-failure',
  },
];
