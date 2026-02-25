import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Resume | Dean Shabi',
  description:
    'Resume for Dean Shabi – AI founder and senior data scientist building forecasting, pricing, and automation systems for renewable energy markets.',
};

const EXPERIENCE = [
  {
    role: 'Founder',
    company: 'Bloome AI',
    location: 'Remote',
    period: 'May 2025 – present',
    bullets: [
      'Launched Bloome AI, an AI job-matching assistant delivering five perfect roles every morning.',
      'Shipped Apply Pro for one-click, human-sounding outreach and polished tailored resumes.',
      'Piloting Hands-Free, a transparent agent that applies end-to-end under user supervision.',
      'Built an adaptive calibration engine that keeps matches high-signal with just a few approvals.',
    ],
    skills: ['AI Agents', 'Product Development', 'Full-Stack'],
  },
  {
    role: 'Senior Data Scientist',
    company: 'Renewcast',
    location: 'Italy · Remote',
    period: '2025 – present',
    bullets: [
      'Building high-precision forecasting models for renewable energy production using ML and NWP data.',
      'Integrating real-time meteorological data, telemetry, and spatial modeling at scale.',
      'Delivering scalable, API-driven forecast products for energy traders and grid operators.',
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

export default function ResumePage() {
  return (
    <div className="pb-20">
      <section className="section pb-12">
        <div className="container max-w-3xl space-y-6">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Resume</p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Dean Shabi
            </h1>
            <p className="text-muted-foreground">
              AI founder and senior data scientist specialising in renewable
              energy markets. I build forecasting, pricing, and automation
              systems with UK/EU traders, grid operators, and founders.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/#contact">Start a project</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:deanshabi@gmail.com">deanshabi@gmail.com</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>Prague, Czech Republic</span>
            <span>Remote with UK/EU teams</span>
          </div>
        </div>
      </section>

      <section className="container max-w-3xl space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
          <Separator className="mt-3" />
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((item) => (
            <Card key={`${item.role}-${item.company}`}>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.period} · {item.location}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mt-16 max-w-3xl space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Education</h2>
          <Separator className="mt-3" />
        </div>

        <div className="space-y-4">
          {EDUCATION.map((item) => (
            <Card key={item.degree}>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-medium">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mt-16 max-w-3xl space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
          <Separator className="mt-3" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
