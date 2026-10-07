import { Fragment } from 'react';
import { Section, SectionLabel } from '@/components/Section';
import { HERO, LINKS } from '@/content/site';

export const metadata = {
  title: 'Resume',
  description: 'Dean Shabi. Engineering lead, AI engineer and two-time founder.',
  alternates: { canonical: '/resume' },
};

const EXPERIENCE = [
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
    role: 'AI Lead',
    company: 'Katalo',
    location: 'Remote',
    period: 'Feb 2026 to now',
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
    period: '2025 to 2026',
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

const EDUCATION = [
  {
    degree: 'Machine learning and AI specialisation',
    institution: 'Technion, Israel Institute of Technology',
    period: '2018 to 2019',
    details:
      'Python, R, SQL, statistics and machine learning.',
  },
  {
    degree: 'BSc Electrical and Electronics Engineering',
    institution: 'Tel Aviv University',
    period: '2010 to 2014',
    details:
      'Electro-optics, control engineering and bioengineering.',
  },
  {
    degree: 'BSc Physics',
    institution: 'Tel Aviv University',
    period: '2010 to 2014',
    details: 'Astrophysics and relativity.',
  },
];

const SKILL_GROUPS = [
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

const LOCATIONS = ['Prague, Czech Republic', 'Remote with UK and EU teams'];

export default function ResumePage() {
  return (
    <>
      <header className="container pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="prose-col space-y-6">
          <SectionLabel>Resume</SectionLabel>
          <h1 className="text-display-lg">{HERO.name}</h1>
          <p className="measure text-lg leading-relaxed text-muted-foreground md:text-xl">
            Engineering lead and two-time founder. I spent seven years putting
            machine learning into production, mostly forecasting for energy
            markets, then built the AI behind Otty and Katalo. I now lead
            engineering at a stealth startup building critical infrastructure
            for aerospace, defence and robotics.
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
