export type Role = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
};

export type Degree = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Place = {
  city: string;
  country: string;
  countryCode: string;
};

export const SUMMARY =
  'Engineering lead and two-time founder. I spent seven years putting machine learning into production, mostly forecasting for energy markets, then built the AI behind Otty and Katalo. I now lead engineering at a stealth startup building critical infrastructure for aerospace, defence and robotics.';

export const BASE: Place = { city: 'Prague', country: 'Czech Republic', countryCode: 'CZ' };

export const REMOTE = 'Remote with UK and EU teams';

export const EXPERIENCE: Role[] = [
  {
    role: 'Engineering Lead',
    company: 'Stealth startup',
    location: 'Europe',
    period: '2026 to now',
    bullets: [
      'Lead engineering at a company building critical European infrastructure for aerospace, defence and robotics.',
    ],
    skills: ['Engineering leadership', 'Systems architecture', 'AI'],
  },
  {
    role: 'Founder',
    company: 'Otty',
    location: 'Remote',
    period: 'May 2025 to now',
    bullets: [
      'Built a career agent that finds roles, judges fit and applies for candidates over WhatsApp, within rules they approve.',
      'Kept judgment and permission apart. The model decides what fits, and code re-checks the candidate\'s rules before anything is submitted.',
      'Cut cost per agent turn 5x by fixing prompt-cache routing, loading tools only when needed and capping stale context.',
      'Moved the product across three agent runtimes in four months without changing what the agent is allowed to do.',
    ],
    skills: ['AI agents', 'TypeScript', 'Postgres', 'Product'],
  },
  {
    role: 'Co-founder',
    company: 'Katalo',
    location: 'Remote',
    period: 'Feb 2026 to Sep 2026',
    bullets: [
      'Built an image-editing pipeline where a calibrated vision judge decides what ships and its rejections become repair prompts.',
      'Built a shared queue and adaptive rate limiter for four AI providers. Capacity leases expire, so a crashed worker frees its slot.',
      'Released prompts and judge versions the way code ships, with snapshots, hashes and a staging step.',
    ],
    skills: ['LLM evals', 'Convex', 'TypeScript', 'Image models'],
  },
  {
    role: 'Senior Data Scientist',
    company: 'Renewcast',
    location: 'Italy · Remote',
    period: '2025 to Oct 2026',
    bullets: [
      'Owned the solar forecasting stack. Cut portfolio forecast error from 15% to 6% in five months by pairing plant physics with a learned correction.',
      'Built one model per fleet that corrects the next four hours from live plant data. It beat persistence on 98% of solar plant-months in backtests.',
      'Replaced hand-picked model releases with a statistical test against the forecasts customers received, documented in four ADRs.',
    ],
    skills: ['Machine learning', 'Weather prediction', 'Python', 'API development'],
  },
  {
    role: 'Founding Data Scientist',
    company: 'tem.energy',
    location: 'London · Remote',
    period: '2024 to May 2025',
    bullets: [
      'Led the AI behind RED, tem.\'s main product for renewable energy.',
      'Built Rosso, a pricing engine that trades portfolio risk off against growth.',
      'Built half-hourly forecasts with horizons of several years.',
    ],
    skills: ['AWS', 'Python', 'PyTorch', 'dbt'],
  },
  {
    role: 'Data Scientist for Energy',
    company: 'AmpX',
    location: 'Prague & London · Remote',
    period: '2023 to 2024',
    bullets: [
      'Built time series models for generation, load and market price forecasting.',
      'Built battery degradation models for hundreds of assets.',
      'Set up the company\'s MLOps platform on AWS and Kubernetes, from training to monitoring.',
    ],
    skills: ['AWS', 'Kubernetes', 'Airflow', 'Grafana'],
  },
  {
    role: 'Data Scientist',
    company: 'Datamole AI',
    location: 'Prague',
    period: '2019 to 2022',
    bullets: [
      'Delivered ML projects end to end for manufacturing, automotive and agritech clients.',
      'Worked on predictive maintenance, anomaly detection and time series forecasting.',
      'Built data pipelines for robot, sensor and IIoT data.',
    ],
    skills: ['SQL', 'Docker', 'Python', 'Azure'],
  },
  {
    role: 'Project Lead · Captain',
    company: 'Israeli Air Force',
    location: 'Israel',
    period: '2014 to 2019',
    bullets: [
      'Led engineering teams on large technology projects for F-16 and F-15 fighter jets.',
      'Ran RF and signal processing R&D with Israeli defence companies.',
      'Built ML models for computer vision and data analysis.',
    ],
    skills: ['Python', 'TensorFlow', 'MATLAB'],
  },
];

export const EDUCATION: Degree[] = [
  {
    degree: 'MSc Artificial Intelligence',
    institution: 'Technion, Israel Institute of Technology',
    period: '2018 to 2019',
  },
  {
    degree: 'BSc Electrical and Electronics Engineering',
    institution: 'Tel Aviv University',
    period: '2010 to 2014',
    details: 'Electro-optics, control engineering and bioengineering.',
  },
  {
    degree: 'BSc Physics',
    institution: 'Tel Aviv University',
    period: '2010 to 2014',
    details: 'Astrophysics and relativity.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Data science and ML',
    items: [
      'Machine learning',
      'Time series forecasting',
      'Deep learning',
      'NLP',
      'Computer vision',
      'Optimisation',
    ],
  },
  {
    label: 'Programming',
    items: ['Python', 'SQL', 'R', 'MATLAB', 'JavaScript', 'React', 'FastAPI'],
  },
  {
    label: 'Cloud and DevOps',
    items: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'MLflow', 'Airflow', 'dbt'],
  },
  {
    label: 'Libraries',
    items: [
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'Pandas',
      'Keras',
      'Streamlit',
    ],
  },
];
