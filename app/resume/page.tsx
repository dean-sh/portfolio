import { Fragment } from 'react';
import { Section, SectionLabel } from '@/components/Section';
import { HERO, LINKS } from '@/content/site';

export const metadata = {
  title: 'Resume',
  description: 'Resume for Dean Shabi, engineering lead, AI engineer and two-time founder.',
  alternates: { canonical: '/resume' },
};

const EXPERIENCE = [
  {
    role: 'Engineering Lead',
    company: 'Stealth startup',
    location: 'Europe',
    period: '2026 – present',
    bullets: [
      'Leading engineering for a company building critical European infrastructure across aerospace, defence and robotics.',
    ],
    skills: ['Engineering Leadership', 'Systems Architecture', 'AI'],
  },
  {
    role: 'Founder',
    company: 'Otty',
    location: 'Remote',
    period: 'May 2025 – present',
    bullets: [
      'Built a career agent that searches, judges fit and applies for candidates over WhatsApp, inside a mandate they set.',
      'Split judgment from authority: the model decides, deterministic code revalidates the mandate before any action.',
      'Cut agent turn cost 5x by fixing prompt-cache routing, trimming tool contracts and capping stale context.',
      'Ran the product on three agent runtimes in four months without redesigning what the agent is allowed to do.',
    ],
    skills: ['AI Agents', 'TypeScript', 'Postgres', 'Product'],
  },
  {
    role: 'AI Lead',
    company: 'Katalo',
    location: 'Remote',
    period: 'Feb 2026 – present',
    bullets: [
      'Designed a judge-gated image generation pipeline: a calibrated vision judge decides what ships, and its rejections become repair prompts.',
      'Built an AIMD rate limiter and nested-cap queue across four AI providers, with database leases so crashed workers free capacity.',
      'Put prompts and judge versions under the same release discipline as code: snapshots, hashes and staged promotion.',
    ],
    skills: ['LLM Evals', 'Convex', 'TypeScript', 'Image Models'],
  },
  {
    role: 'Senior Data Scientist',
    company: 'Renewcast',
    location: 'Italy · Remote',
    period: '2025 – 2026',
    bullets: [
      'Sole owner of the solar forecasting stack. Cut portfolio nMAE from 15% to 6% in five months with a physics-first residual model.',
      'Built a fleet-wide GRU nowcasting head that beats persistence on 98% of plant-months in leave-one-client-out backtests.',
      'Replaced leaderboard promotion with a paired statistical gate against served forecasts, documented in four ADRs.',
    ],
    skills: ['Machine Learning', 'Weather Prediction', 'Python', 'API Development'],
  },
  {
    role: 'Founding Data Scientist',
    company: 'tem.energy',
    location: 'London · Remote',
    period: '2024 – May 2025',
    bullets: [
      'Led the AI backbone of RED, the flagship product for renewable energy.',
      'Built Rosso, an automated pricing engine that optimizes portfolio risk while ensuring growth.',
      'Delivered precise half-hourly, multi-year horizon forecasts with a modern ML stack.',
    ],
    skills: ['AWS', 'Python', 'PyTorch', 'dbt'],
  },
  {
    role: 'Data Scientist for Energy',
    company: 'AmpX',
    location: 'Prague & London · Remote',
    period: '2023 – 2024',
    bullets: [
      'Developed advanced time series models for generation, load, and market price forecasting.',
      'Created battery degradation estimation models for hundreds of assets.',
      'Pioneered an end-to-end MLOps framework on AWS with Kubernetes.',
    ],
    skills: ['AWS', 'Kubernetes', 'Airflow', 'Grafana'],
  },
  {
    role: 'Data Scientist',
    company: 'Datamole AI',
    location: 'Prague',
    period: '2019 – 2022',
    bullets: [
      'Delivered tailored, end-to-end ML projects across manufacturing, automotive, and agritech.',
      'Projects included predictive maintenance, anomaly detection, and time series applications.',
      'Built data pipelines using data from robots, sensors, and IIoT devices.',
    ],
    skills: ['SQL', 'Docker', 'Python', 'Azure'],
  },
  {
    role: 'Project Lead · Captain',
    company: 'Israeli Air Force',
    location: 'Israel',
    period: '2014 – 2019',
    bullets: [
      'Led engineering teams designing high-budget technological projects for F16 and F15 fighters.',
      'Managed collaboration with military industries, conducting R&D in RF and signal processing.',
      'Created ML models for computer vision and data analysis.',
    ],
    skills: ['Python', 'TensorFlow', 'MATLAB'],
  },
];

const EDUCATION = [
  {
    degree: 'Machine Learning and AI Specialization',
    institution: 'Technion – Israel Institute of Technology',
    period: '2018 – 2019',
    details:
      'Intensive programme covering Python, R, SQL, statistics, and machine learning.',
  },
  {
    degree: 'B.Sc. Electrical & Electronics Engineering',
    institution: 'Tel Aviv University',
    period: '2010 – 2014',
    details:
      'Specialised in electro-optical systems, control engineering, and bio-engineering.',
  },
  {
    degree: 'B.Sc. Physics',
    institution: 'Tel Aviv University',
    period: '2010 – 2014',
    details: 'Focused on astrophysics and theory of relativity.',
  },
];

const SKILL_GROUPS = [
  {
    label: 'Data Science & ML',
    items: [
      'Machine Learning',
      'Time Series Forecasting',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'Optimisation',
    ],
  },
  {
    label: 'Programming',
    items: ['Python', 'SQL', 'R', 'MATLAB', 'JavaScript', 'React', 'FastAPI'],
  },
  {
    label: 'Cloud & DevOps',
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

const LOCATIONS = ['Prague, Czech Republic', 'Remote with UK/EU teams'];

export default function ResumePage() {
  return (
    <>
      <header className="container pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="prose-col space-y-6">
          <SectionLabel>Resume</SectionLabel>
          <h1 className="text-display-lg">{HERO.name}</h1>
          <p className="measure text-lg leading-relaxed text-muted-foreground md:text-xl">
            Engineering lead and two-time founder. I spent seven years
            taking machine learning into production in energy markets, then
            built two AI products from nothing. Now I lead engineering on
            critical infrastructure for aerospace, defence and robotics.
          </p>
          <p className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
            <a href={`mailto:${LINKS.email}`} className="link text-foreground">
              {LINKS.email}
            </a>
            <span aria-hidden="true">·</span>
            <a href="/dean-shabi-cv.pdf" className="link text-foreground">
              PDF
            </a>
            {LOCATIONS.map((location) => (
              <Fragment key={location}>
                <span aria-hidden="true">·</span>
                <span>{location}</span>
              </Fragment>
            ))}
          </p>
        </div>
      </header>

      <Section index="01" label="Experience">
        <ol className="divide-y divide-border">
          {EXPERIENCE.map((item) => (
            <li
              key={`${item.role}-${item.company}`}
              className="space-y-4 py-8 first:pt-0 last:pb-0 md:grid md:grid-cols-[11rem_1fr] md:gap-6 md:space-y-0"
            >
              <div className="space-y-1 font-mono text-sm text-muted-foreground">
                <p className="tabular-nums">{item.period}</p>
                <p>{item.location}</p>
              </div>
              <div className="min-w-0 space-y-4">
                <div className="space-y-1">
                  <h2 className="text-display-sm">{item.role}</h2>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
                <ul className="measure list-disc space-y-2 pl-4 text-[0.9375rem] leading-relaxed text-muted-foreground marker:text-border">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="font-mono text-xs text-muted-foreground">
                  {item.skills.join(' · ')}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="02" label="Education">
        <ol className="divide-y divide-border">
          {EDUCATION.map((item) => (
            <li
              key={item.degree}
              className="space-y-4 py-8 first:pt-0 last:pb-0 md:grid md:grid-cols-[11rem_1fr] md:gap-6 md:space-y-0"
            >
              <p className="font-mono text-sm tabular-nums text-muted-foreground">
                {item.period}
              </p>
              <div className="min-w-0 space-y-1">
                <p className="font-medium">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <p className="measure pt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.details}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="03" label="Skills">
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="space-y-3">
              <p className="label">{group.label}</p>
              <p className="font-mono text-sm leading-relaxed">
                {group.items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
