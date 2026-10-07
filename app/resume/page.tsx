import Link from 'next/link';
import { HERO } from '@/content/site';

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
    role: 'Co-founder',
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
    degree: 'MSc Artificial Intelligence',
    institution: 'Technion, Israel Institute of Technology',
    period: '2018 to 2019',
    details: '',
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

const HEADING = 'font-serif text-[1.75rem] leading-tight tracking-[-0.01em] md:text-[2rem]';

export default function ResumePage() {
  return (
    <div className="container pb-24 pt-10">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-3">
          <div className="space-y-8 lg:sticky lg:top-28">
            <p className="meta">Resume</p>
            <div className="space-y-3 text-sm">
              <Link href="/#contact" className="link block">
                Contact me
              </Link>
              <a href="/dean-shabi-cv.pdf" className="link block">
                Download as PDF
              </a>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              {LOCATIONS.map((location) => (
                <p key={location}>{location}</p>
              ))}
            </div>
          </div>
        </aside>

        <div className="min-w-0 lg:col-span-9" data-reveal="">
          <h1 className="font-serif text-[clamp(2.2rem,1.5rem+2.6vw,3.6rem)] leading-[1.05] tracking-[-0.015em]">{HERO.name}</h1>
          <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-muted-foreground">
            Engineering lead and two-time founder. I spent seven years putting machine learning into production, mostly
            forecasting for energy markets, then built the AI behind Otty and Katalo. I now lead engineering at a stealth
            startup building critical infrastructure for aerospace, defence and robotics.
          </p>

          <section className="mt-16">
            <h2 className={HEADING}>Experience</h2>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {EXPERIENCE.map((item) => (
                <li key={`${item.role}-${item.company}`} className="grid gap-4 py-8 md:grid-cols-[11rem_1fr] md:gap-8">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-mono text-foreground">{item.period}</p>
                    <p className="mt-1">{item.location}</p>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sans text-lg font-medium leading-snug">
                      {item.role}
                      <span className="font-normal text-muted-foreground"> · {item.company}</span>
                    </h3>
                    <ul className="mt-4 max-w-[62ch] space-y-2 text-[0.95rem] leading-[1.65] text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="grid grid-cols-[1rem_1fr]">
                          <span aria-hidden="true" className="mt-[0.8em] block h-px w-2.5 bg-signal/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground">{item.skills.join(' · ')}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16">
            <h2 className={HEADING}>Education</h2>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {EDUCATION.map((item) => (
                <li key={item.degree} className="grid gap-3 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
                  <p className="font-mono text-sm">{item.period}</p>
                  <div className="min-w-0">
                    <p className="font-medium">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    {item.details && <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">{item.details}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16">
            <h2 className={HEADING}>Skills</h2>
            <dl className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <dt className="text-sm font-medium">{group.label}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{group.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}
