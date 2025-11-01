import Link from 'next/link';

export const metadata = {
  title: 'Résumé | Dean Shabi',
  description:
    'Résumé for Dean Shabi – AI founder and senior data scientist building forecasting, pricing, and automation systems for renewable energy markets.',
};

const EXPERIENCE = [
  {
    role: 'Founder',
    company: 'Bloome AI',
    location: 'Remote',
    period: 'May 2025 – present',
    description:
      '\nLaunched Bloome AI (https://www.bloome.ai), an AI job-matching assistant delivering five perfect roles every morning.\nShipped Apply Pro for one-click, human-sounding outreach and polished résumés tailored to each opportunity.\nPiloting Hands-Free, a transparent agent that researches companies and applies end-to-end under user supervision.\nBuilt an adaptive calibration engine that keeps matches high-signal with just a few approvals.\nDesigned a human-calm UX so job searches become a one-minute morning ritual instead of daily churn.',
    skills: ['AI Agents', 'Product Development', 'Entrepreneurship', 'Full-Stack Development'],
  },
  {
    role: 'Senior Data Scientist',
    company: 'Renewcast',
    location: 'Italy · Remote',
    period: '2025 – present',
    description:
      '\nBuilding high-precision forecasting models for renewable (wind, solar) energy production using machine learning, numerical weather prediction, and satellite data.\nImproving forecast accuracy and reliability by integrating real-time meteorological data, telemetry, and spatial modeling at scale.\nDelivering scalable, API-driven forecast products that support energy traders, grid operators, and renewable asset managers in optimizing operations and reducing imbalance penalties.',
    skills: ['Machine Learning', 'Weather Prediction', 'Satellite Data', 'Python', 'API Development', 'Spatial Modeling'],
  },
  {
    role: 'Founding Data Scientist',
    company: 'tem.energy',
    location: 'London · Remote',
    period: '2024 – May 2025',
    description:
      '\nLeading the AI backbone of RED, our flagship product for renewable energy.\nBuilt Rosso, an automated pricing engine that optimizes portfolio risk while ensuring growth.\nDelivered precise half-hourly, multi-year horizon forecasts and developed a modern ML stack for rapid iteration and scaling.',
    skills: ['AWS', 'Python', 'Grafana', 'PyTorch', 'dbt'],
  },
  {
    role: 'Data Scientist for Energy',
    company: 'AmpX',
    location: 'Prague & London · Remote',
    period: '2023 – 2024',
    description:
      '\nDeveloped advanced time series models for generation, load, and market price forecasting.\nCreated battery degradation estimation models for hundreds of assets.\nPioneered an end-to-end MLOps framework on AWS with Kubernetes.\nLed development of a novel PV power generation forecasting product and mentored colleagues in data science.',
    skills: ['AWS', 'Kubernetes', 'Python', 'Airflow', 'Grafana'],
  },
  {
    role: 'Data Scientist',
    company: 'Datamole AI',
    location: 'Prague',
    period: '2019 – 2022',
    description:
      '\nDelivered tailored, end-to-end ML projects with domain expert collaboration.\nProjects included animal sickness detection, predictive maintenance, anomaly detection, and time series applications.\nBuilt data pipelines using real-world data from robots, sensors, IIoT devices, and more across manufacturing, automotive, and agritech sectors.',
    skills: ['SQL', 'Docker', 'Python', 'Azure', 'Scikit-Learn'],
  },
  {
    role: 'Project Lead · Captain',
    company: 'Israeli Air Force',
    location: 'Israel',
    period: '2015 – 2019',
    description:
      '\nLed engineering teams in designing high-budget technological projects for F16 and F15 jet fighters.\nManaged collaboration with Israeli military industries, conducting R&D in RF, signal processing, and aviation.\nCreated ML models for computer vision and data analysis.',
    skills: ['Python', 'TensorFlow', 'MATLAB', 'Scikit-Learn', 'Keras'],
  },
  {
    role: 'Flight Researcher & Analyst',
    company: 'Israeli Air Force',
    location: 'Israel',
    period: '2014 – 2015',
    description:
      '\nManaged high-end, real-time RF systems for protection of Israeli jet fighters during missions.\nAnalyzed and researched vast amounts of data collected by these systems.\nConducted field testing, research, and evaluation via flight and laboratory tests.',
    skills: ['Data Analysis', 'RF Systems', 'Field Testing', 'Research'],
  },
];

const EDUCATION = [
  {
    degree: 'Machine Learning and AI Specialization',
    institution: 'Technion – Israel Institute of Technology',
    period: '2018 – 2019',
    details: 'Intensive programme covering Python, R, SQL, statistics, and machine learning. Final project: Movie recommender system using SVD (100% grade).',
  },
  {
    degree: "Officers' Training",
    institution: 'Israel Defence Force',
    period: '2014',
    details: 'Rigorous military leadership training; achieved rank of Captain through demonstrated technical leadership.',
  },
  {
    degree: 'B.Sc. Electrical & Electronics Engineering',
    institution: 'Tel Aviv University',
    period: '2010 – 2014',
    details: 'Specialised in electro-optical systems, control engineering, and bio-engineering.',
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
    items: ['Machine Learning', 'Time Series Forecasting', 'Deep Learning', 'NLP', 'Computer Vision', 'Predictive Modelling', 'Optimisation'],
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
    label: 'Libraries & Frameworks',
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'Keras', 'Grafana', 'Streamlit'],
  },
];

export default function ResumePage() {
  return (
    <div className="pb-24 bg-page dark:bg-[rgba(5,7,15,0.9)]">
      <section className="section pb-12">
        <div className="container space-y-6 text-balance">
          <p className="eyebrow">Résumé</p>
          <h1 className="text-4xl text-highlight dark:text-white md:text-5xl">Dean Shabi</h1>
          <p className="max-w-3xl text-lg text-copy-muted">
            AI founder and senior data scientist specialising in renewable energy markets. I build forecasting, pricing, and
            automation systems with UK/EU traders, grid operators, and founders — currently building{' '}
            <Link
              href="https://www.bloome.ai"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-4 transition hover:text-highlight dark:hover:text-white"
            >
              Bloome AI
            </Link>
            , the calmest way to discover and apply to new roles.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="/dean-shabi-cv.pdf"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
            <Link href="mailto:deanshabi@gmail.com" className="btn-ghost">
              deanshabi@gmail.com
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container space-y-8">
          <h2 className="text-2xl font-semibold text-highlight dark:text-white">Experience</h2>
          <div className="space-y-6">
            {EXPERIENCE.map((item) => {
              const points = item.description
                .split('\n')
                .map((line) => line.trim())
                .filter(Boolean);

              return (
                <article
                  key={`${item.role}-${item.company}`}
                  className="rounded-3xl border border-border/20 bg-surface p-8 shadow-sm dark:border-white/10 dark:bg-surface/70"
                >
                  <header className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-highlight dark:text-white">{item.role}</h3>
                      <p className="text-sm text-copy-muted">{item.company}</p>
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-copy-muted text-right">
                      {item.period}
                      <span className="mx-2">·</span>
                      {item.location}
                    </div>
                  </header>
                  <ul className="mt-4 space-y-2 text-sm text-copy-muted">
                    {points.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-copy-muted">
                    {item.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-border/30 px-3 py-1 dark:border-white/12">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container grid-gap-lg lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-highlight dark:text-white">Education</h2>
            <div className="space-y-5">
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-3xl border border-border/20 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-surface-muted/60"
                >
                  <p className="text-sm font-semibold text-highlight dark:text-white">{item.degree}</p>
                  <p className="text-sm text-copy-muted">{item.institution}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-copy-muted mt-2">{item.period}</p>
                  <p className="mt-3 text-sm text-copy-muted">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-highlight dark:text-white">Skills</h2>
            <div className="space-y-5">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="rounded-3xl border border-border/20 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-surface-muted/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-copy-muted">
                    {group.items.map((skill) => (
                      <span key={skill} className="rounded-full border border-border/30 px-3 py-1 dark:border-white/12">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
