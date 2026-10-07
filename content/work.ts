import * as charts from './charts';
import type { CaseStudy } from './types';

export const WORK: CaseStudy[] = [
  {
    slug: 'fleet-nowcasting',
    title: 'Weather forecasts can\'t see what a plant did an hour ago. This model can.',
    hook: 'A small network reads each plant\'s latest readings and corrects the next four hours. One model covers the whole solar fleet.',
    org: 'Renewcast',
    period: '2026',
    role: 'Model design, training and evaluation',
    summary:
      'Renewcast\'s forecasts come from weather models, so they miss what a plant is doing right now. Soiling, a tripped inverter or a cloud bank 20 km off course all show up in the readings first. I trained a small recurrent network that reads the latest readings next to the forecast customers already received and corrects the next four hours. One model covers the solar fleet and another covers the wind fleet.',
    metrics: [
      { value: '21.9%', label: 'Less short-term solar error, in backtests' },
      { value: '26.6%', label: 'Less short-term wind error, in backtests' },
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
      'Across 224 solar and wind plants, the correction cut error in the first two hours by 21.9% for solar and 26.6% for wind.',
    ],
    chart: charts.fleetNowcasting,
    stack: ['PyTorch', 'Python', 'MLflow', 'Databricks'],
  },
  {
    slug: 'bounded-autonomy',
    title: 'An AI that applies to jobs for you, only where you said yes',
    hook: 'Otty finds roles and applies for you over WhatsApp. The model decides what fits. Code checks your rules before anything goes out.',
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
    chart: charts.ottyFunnel,
    stack: ['TypeScript', 'Postgres', 'AI SDK', 'Cloud Run', 'OpenTelemetry'],
  },
  {
    slug: 'physics-first-solar',
    title: 'Cutting solar forecast error from 15% to 6% in five months',
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
      'Portfolio error fell from 15.3% to 6.2% between May and October 2025, lower every month.',
      'The new release rule also caught six hand-picked models that were worse than what was already in production.',
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
      'Renewcast\'s forecasting pipeline assumed one ID per plant, with the data already prepared. Portfolios broke that assumption. I modelled plants, meters and the forecasts Renewcast sells as separate things, so each new portfolio reuses the same steps instead of needing its own pipeline.',
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
      'By October 2026, four client portfolios ran on the framework, the largest with 1,189 plants. On a 107-site portfolio, forecast error averaged 10% over 14 months.',
    ],
    chart: charts.portfolioFramework,
    stack: ['Python', 'pvlib', 'H3', 'LightGBM', 'MLflow'],
  },
  {
    slug: 'judge-gated-generation',
    title: 'AI can stage a living room. It shouldn\'t move the walls.',
    hook: 'Image models are good at furniture and bad at architecture. I built the pipeline that checks every edit and repairs the ones that change the room.',
    org: 'Katalo',
    period: '2026',
    role: 'Co-founder · AI pipeline, evals and infrastructure',
    summary:
      'Katalo staged, renovated and decluttered listing photos for real-estate agencies. Image models are good at furniture and bad at walls, and a photo that misrepresents a property can\'t be published. I built the pipeline that generated each edit, checked it and repaired the ones that failed.',
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
        body: 'I calibrated the judge against human labels and replayed each listing to see which image would actually have been published. Wrong approvals and wrong rejections are counted separately, because they cost different things.',
      },
      {
        title: 'Share four providers without falling over',
        body: 'Each provider has its own rate limits and failure modes. Per-customer limits stop one bulk upload from blocking everyone else, and the system slows down on its own when a provider pushes back.',
      },
    ],
    results: [
      'Agencies could also call the pipeline through an API. A retried request never generated twice, and completion webhooks were signed.',
    ],
    chart: charts.kataloJudge,
    stack: ['TypeScript', 'Convex', 'Gemini', 'FAL', 'OpenRouter'],
  },
];

export const EARLIER: CaseStudy[] = [
  {
    slug: 'portfolio-pricing',
    title: 'Pricing energy contracts against the risk of the whole portfolio',
    hook: 'Large industrial tenders were priced by hand, with no view of the rest of the portfolio. I built an engine that prices each tender against the risk of the whole book and cut pricing time by 95%.',
    org: 'tem.',
    period: '2024-2025',
    role: 'Designed and built the pricing engine',
    summary:
      'I built a modular pricing engine at tem. Analysts swap pricing strategies and test them against hundreds of simulated markets, with Value at Risk and Expected Shortfall built into every price.',
    metrics: [
      { value: '95%', label: 'Less time to price a tender' },
      { value: '10×', label: 'More scenarios tested per quote' },
    ],
    pipeline: {
      caption: 'Every quote is tested in simulated markets alongside the contracts already signed, so the price carries the risk it adds.',
      stages: [
        { label: 'Contract book' },
        { label: 'Market simulation', note: 'Monte Carlo' },
        { label: 'Risk metrics', note: 'VaR and ES' },
        { label: 'Pricing strategy' },
        { label: 'Analyst app', note: 'Streamlit' },
      ],
    },
    decisions: [
      {
        title: 'Price each deal against the whole book',
        body: 'A new contract changes the risk of everything already signed. The engine simulates the full book with the new contract in it, so the price reflects the risk that contract adds.',
      },
      {
        title: 'Price in the tail, too',
        body: 'Value at Risk says how bad a bad month gets. Expected Shortfall says how bad the worst months get. Energy markets have fat tails, so pricing on VaR alone would hide the losses that matter most.',
      },
      {
        title: 'Two speeds of risk model',
        body: 'Statistical VaR and ES models give a fast baseline for standard quotes. Monte Carlo runs with thousands of market paths handle contracts that interact in non-linear ways.',
      },
      {
        title: 'Keep analysts in charge',
        body: 'A Streamlit app lets analysts swap strategies and compare them side by side. The engine does the maths, and the people who own the price make the call.',
      },
    ],
    results: [
      'Pricing a tender takes 95% less time, with 10 times as many scenarios tested per quote.',
    ],
    chart: charts.pricingTail,
    stack: ['Python', 'Monte Carlo', 'Streamlit'],
  },
  {
    slug: 'exempt-supply-matching',
    title: 'Matching small businesses with local renewables to skip £50/MWh in levies',
    hook: 'Great Britain lets generators under 5 MW sell straight to nearby businesses and skip most policy levies. Each deal needs a compatible pair, so I built the system that finds them.',
    org: 'tem.',
    period: '2024-2025',
    role: 'Built the matching platform',
    summary:
      'I built a platform that pairs SMEs with local generators under 5 MW and keeps every pair inside the Supplier Exempt Class A limits. The matched power skips about £50/MWh in non-commodity costs, and the generator still gets its agreed price.',
    metrics: [
      { value: '£50/MWh', label: 'Levies avoided per matched MWh' },
      { value: '60+', label: 'Generator and business pairings' },
      { value: '35%', label: 'Of candidate pairs became deals' },
    ],
    pipeline: {
      caption: 'Every candidate pair is scored on how well generation lines up with demand, then checked against the exemption limits before a contract is drafted.',
      stages: [
        { label: 'Site data', note: 'demand, output, location' },
        { label: 'Load matching' },
        { label: 'Pair scoring' },
        { label: 'Compliance checks', note: '5 MW and 2.5 MW limits' },
        { label: 'Contracts and reports' },
      ],
    },
    decisions: [
      {
        title: 'Match on load shape and location',
        body: 'A good pair needs the business to use power when the generator makes it. Load profiling lines up generation with consumption before the scoring picks a pair.',
      },
      {
        title: 'Forecast demand to size each deal',
        body: 'Consumption forecasts estimate how much of a generator\'s output each business will actually use, which sets how much of the exemption a pairing is worth.',
      },
      {
        title: 'Keep compliance in the loop',
        body: 'Each pair has to stay under 5 MW in total and 2.5 MW to homes. Compliance checks run on every match and update when the rules change, and contracts are generated with legal validation.',
      },
    ],
    results: [
      'More than 60 pairings and over £3M of value for SMEs and utilities, with 35% of candidate pairs becoming deals.',
    ],
    chart: charts.exemptEquation,
    stack: ['Python', 'PyTorch', 'Optimisation', 'Graph algorithms'],
  },
  {
    slug: 'forecasting-models',
    title: 'Forecasting load, solar and prices for hundreds of sites at once',
    hook: 'Every site had its own weather, market and asset data, and forecasting them one at a time didn\'t scale. Global models that learn across sites cut forecast error by more than 30% against the benchmark.',
    org: 'Energy-tech',
    period: '2023-2025',
    role: 'Led model development',
    summary:
      'I led the development of long-term forecasting models for UK energy-tech firms. They power product features, inform trading decisions and cut balancing costs, across load, solar generation, battery state and market prices.',
    metrics: [
      { value: '>30%', label: 'Lower MAPE than the benchmark' },
      { value: '4', label: 'Forecast types: load, solar, battery, price' },
    ],
    pipeline: {
      caption: 'Weather, history and market data feed one prediction engine, and an API serves every product that uses the forecasts.',
      stages: [
        { label: 'Weather data' },
        { label: 'Energy history' },
        { label: 'Market signals' },
        { label: 'Prediction engine', note: 'global models' },
        { label: 'API' },
      ],
    },
    decisions: [
      {
        title: 'One model for many sites',
        body: 'A global model learns shared patterns from hundreds of time series at once. That helps it generalise to sites it has seen little of.',
      },
      {
        title: 'Transfer what the network learns',
        body: 'Networks reuse what they learned on other sites and tasks. That raised accuracy and cut training time, most of all for sites with little data.',
      },
      {
        title: 'Test the model families properly',
        body: 'I compared ARIMA, LightGBM ensembles and RNN, LSTM and Transformer networks, and built hybrids that combine statistical and ML models.',
      },
      {
        title: 'Make every run reproducible',
        body: 'MLflow tracks experiments, versions models and stores results, so any forecast can be traced back to the run that made it.',
      },
    ],
    results: [
      'The forecasts power core features in energy management platforms with thousands of users. Sub-hourly forecasts cut balancing costs and penalties, an estimated saving of millions a year.',
    ],
    chart: charts.forecastingCompare,
    stack: ['Python', 'PyTorch', 'MLflow', 'AWS', 'Docker'],
  },
  {
    slug: 'mlops-foundation',
    title: 'One model contract, so every forecast ships the same way',
    hook: 'Solar, wind and pricing models each had their own packaging and runtime, so a small experiment meant pipeline surgery. A shared model contract and one package format cut deploy prep from days to under one.',
    org: 'tem.',
    period: '2024-2025',
    role: 'Platform R&D',
    summary:
      'Forecasting work had spread across solar, wind and pricing, and the tooling grew one model at a time. We rebuilt the path from notebook to production around a model contract, MLflow packaging and a challenger-versus-champion loop.',
    metrics: [
      { value: '<1 day', label: 'Deploy prep, down from 4-5 days' },
      { value: '3×', label: 'Challengers tested per week' },
      { value: '6 weeks', label: 'Concept to rollout' },
    ],
    pipeline: {
      caption: 'Every model carries its contract inside the artifact, so the same pipeline can test, compare and serve any of them.',
      stages: [
        { label: 'Model contract' },
        { label: 'MLflow package' },
        { label: 'Challenger', note: 'registered with metadata' },
        { label: 'Side-by-side test', note: 'same data, same pipeline' },
        { label: 'Champion swap' },
      ],
    },
    decisions: [
      {
        title: 'Put the contract inside the model',
        body: 'The contract says what every model takes in, what it returns and what it needs to run. It ships inside the model, so a mismatch shows up the moment a pipeline loads it.',
      },
      {
        title: 'One package format for everything',
        body: 'Every model is packaged the same way with MLflow. Experiments, tests and production all run the exact same package.',
      },
      {
        title: 'Make challengers earn the slot',
        body: 'A new model registers as a challenger and runs on the same data slices as the production champion. It replaces the champion only after winning for several weeks.',
      },
      {
        title: 'Make releases boring',
        body: 'Shipping a model or rolling one back became a one-line change instead of a deployment project.',
      },
    ],
    results: [
      'Past models stay reproducible, solar and wind moved into one repository, and the roadmap opened up to physics integrations, nowcasting and ensembles.',
    ],
    chart: charts.mlopsCompare,
    stack: ['Python', 'MLflow', 'Kubernetes', 'CI/CD'],
  },
  {
    slug: 'robot-failure',
    title: 'Catching robot failures on the line before they happen',
    hook: 'Robots on automotive production lines failed without warning, and an unplanned stop holds up the whole line. Anomaly detection on live sensor data flagged problems early and cut unplanned downtime by more than 35%.',
    org: 'Datamole',
    period: '2020-2022',
    role: 'Built the anomaly detection models',
    summary:
      'At Datamole AI I built anomaly detection models that predict robot failures in automotive manufacturing. The system reads multivariate sensor data in real time and flags the patterns that come before a failure.',
    metrics: [
      { value: '>35%', label: 'Less unplanned downtime' },
    ],
    pipeline: {
      caption: 'Sensor signals are cleaned and turned into features in real time. Models score them, and alerts go to the maintenance team.',
      stages: [
        { label: 'Sensor data' },
        { label: 'Signal processing' },
        { label: 'Feature extraction' },
        { label: 'Anomaly models', note: 'supervised and unsupervised' },
        { label: 'Alerts', note: 'per failure type' },
        { label: 'Maintenance view' },
      ],
    },
    decisions: [
      {
        title: 'Balance false alarms against misses',
        body: 'False alarms send crews to healthy robots and misses let failures through. Thresholds are set per failure type and severity, so each trade-off is made on purpose.',
      },
      {
        title: 'Clean the signal first',
        body: 'Factory sensor data is noisy and high-dimensional. Careful filtering and time series features that capture early signs of failure came before any model.',
      },
      {
        title: 'Work across robots and factories',
        body: 'The models had to hold up across robot types, configurations and plants, so they combine statistical methods, deep learning and domain knowledge from industry specialists.',
      },
      {
        title: 'Output a maintenance team can act on',
        body: 'Alerts say what is likely failing and how urgent it is, so the team can act without a data scientist in the room.',
      },
    ],
    results: [
      'Maintenance teams fixed problems before breakdowns, doing targeted preventive work instead of major repairs.',
    ],
    chart: charts.robotCompare,
    stack: ['Python', 'PyTorch', 'Kafka', 'InfluxDB', 'Docker'],
  },
];
