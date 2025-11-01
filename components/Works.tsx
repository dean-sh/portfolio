'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    title: 'High-Accuracy Forecasting Models',
    description:
      'Led the development of long-term load, generation, and price forecasting models—including PV generation, battery degradation, and price forecasting. These models power core product features, support trading decisions, and reduce balancing costs.',
    tags: ['Energy-Tech', 'Forecasting', 'ML'],
    image: '/images/energy-demand.jpg',
    category: 'Renewable Energy AI',
    link: '/projects/forecasting-models',
    metric: '↑57% forecasting accuracy uplift',
  },
  {
    id: 2,
    title: 'Portfolio Pricing Engine',
    description:
      'Built a risk-based pricing optimisation algorithm that enables energy companies to grow rapidly while balancing risk and competitiveness—a critical edge in volatile energy markets.',
    tags: ['Energy-Tech', 'Optimization', 'Risk Analysis'],
    image: '/images/financial-analytics.jpg',
    category: 'Energy Trading',
    link: '/projects/portfolio-pricing',
    metric: '↓ portfolio VaR while scaling revenue',
  },
  {
    id: 3,
    title: 'Exempt Supply Matching Algorithm',
    description:
      'Created a unique matching algorithm under UK regulations that optimally pairs SME energy consumers with local generators, unlocking ~£50/MWh in cost savings—generating millions in new revenue.',
    tags: ['Algorithm', 'Energy', 'Optimization'],
    image: '/images/renewcast.png',
    category: 'Energy Trading',
    link: '/projects/exempt-supply-matching',
    metric: '≈£50/MWh cost savings unlocked',
  },
  {
    id: 4,
    title: 'EV Driver Behaviour Simulator',
    description:
      'Developed a modular, agent-based simulator to model heterogeneous electric vehicle charging behaviours across diverse driver populations, with an interactive Streamlit dashboard for scenario testing.',
    tags: ['Simulation', 'Energy', 'Python'],
    image: '/images/ev-simulator.jpg',
    category: 'Grid Optimization',
    link: '/projects/ev-simulator',
    metric: 'Validated rollout and tariff decisions',
  },
  {
    id: 5,
    title: 'Robot Failure Detection',
    description: 'Implemented anomaly detection algorithms to identify and predict robot failures in automotive manufacturing.',
    tags: ['Anomaly Detection', 'Manufacturing', 'Automotive'],
    image: '/images/robot-failure.jpg',
    category: 'Other AI',
    link: '/projects/robot-failure',
    metric: 'Predictive maintenance for robotics',
  },
  {
    id: 6,
    title: 'Reducing Fruit Waste with ML',
    description: 'Developed computer vision models to detect fruit ripeness and reduce waste in the food supply chain.',
    tags: ['Computer Vision', 'AgriTech', 'Sustainability'],
    image: '/images/fruit-waste.jpg',
    category: 'Other AI',
    link: '/projects/fruit-waste',
    metric: 'Reduced supply-chain fruit waste',
  },
  {
    id: 7,
    title: "UK's Wind Energy Generation ⚡💨",
    description:
      'Developed an advanced machine learning model for day-ahead wind power forecasting with remarkable improvements in accuracy, exceeding existing solutions by up to 57%.',
    tags: ['Energy', 'Forecasting', 'ML'],
    image: '/images/wind-energy.jpg',
    category: 'Renewable Energy AI',
    link: '/projects/wind-forecasting',
    metric: '↑57% day-ahead accuracy vs incumbent',
  },
  {
    id: 8,
    title: 'AI Agents for Stock Analysis 🤖',
    description:
      'Created an Equity Analyst Copilot using CrewAI agents framework to revolutionize stock analysis, leveraging specialized AI agents with access to SEC filings, financial documents, and latest stock values.',
    tags: ['AI', 'Agents', 'Finance'],
    image: '/images/equity-copilot.jpg',
    category: 'Other AI',
    link: '/projects/equity-copilot',
    metric: '60% research prep time saved',
  },
  {
    id: 9,
    title: 'Open Source MLOps Tools ⚙️',
    description:
      'Comparative analysis of open-source MLOps tools including TensorFlow Serving, MLflow, AWS SageMaker, Seldon Core, and BentoML for efficient deployment and serving of ML models.',
    tags: ['MLOps', 'Tools', 'AI'],
    image: '/images/mlops-tools.jpg',
    category: 'Other AI',
    link: '/projects/mlops-tools',
    metric: 'Deployments shifted from weeks to hours',
  },
  {
    id: 10,
    title: 'Streamlit Advanced Guide 📊🤖',
    description:
      'Exploration of advanced Streamlit features and tips for maximizing its utility, covering topics like multipage apps, logo integration, third-party libraries, data caching, and query parameter usage.',
    tags: ['Streamlit', 'Tools', 'Data Science'],
    image: '/images/streamlit-guide.jpg',
    category: 'Other AI',
    link: '/projects/streamlit-guide',
    metric: 'Production-ready Streamlit patterns',
  },
];

const FILTERS = ['Featured', 'Renewable Energy AI', 'Energy Trading', 'Grid Optimization', 'Other AI'];

const FEATURED_IDS = [1, 2, 3, 4, 7];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<string>('Featured');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'Featured') {
      return PROJECTS.filter((project) => FEATURED_IDS.includes(project.id));
    }

    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="works" className="section bg-page/80 dark:bg-transparent">
      <div className="container space-y-12">
        <header className="max-w-3xl space-y-5 text-balance">
          <p className="eyebrow">Selected Work</p>
          <h2 className="text-3xl text-highlight dark:text-white md:text-4xl">
            AI-powered projects for energy, trading, and beyond.
          </h2>
          <p className="text-lg text-copy-muted">
            Filter by focus area to see the forecasting systems, pricing engines, optimisation models, and tooling shipped
            with founders and cross-functional teams.
          </p>
        </header>

        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? 'border-accent bg-accent/15 text-accent-contrast shadow-sm dark:text-white dark:bg-[rgba(56,189,248,0.12)] dark:shadow-glow'
                    : 'border-border/30 text-copy-muted hover:border-border/60 hover:text-highlight dark:border-white/12 dark:hover:border-white/25 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col gap-6 rounded-3xl border border-border/20 bg-surface p-8 shadow-sm transition hover:border-accent hover:shadow-md dark:border-white/10 dark:bg-surface/70 dark:hover:bg-surface"
            >
              <div className="relative h-52 overflow-hidden rounded-2xl border border-border/20 dark:border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.3em] text-copy-muted">{project.category}</span>
                <h3 className="text-2xl font-semibold text-highlight dark:text-white">{project.title}</h3>
                <p className="text-sm text-copy-muted">{project.description}</p>
                <p className="text-sm font-semibold text-highlight dark:text-white">{project.metric}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-copy-muted">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border/25 px-3 py-1 dark:border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition hover:text-accent dark:hover:text-white"
              >
                View project →
              </Link>
            </article>
          ))}
        </div>

        {activeFilter === 'Featured' && (
          <div className="space-y-4 rounded-3xl border border-border/20 bg-surface-muted/70 p-8 shadow-sm dark:border-white/10 dark:bg-surface-muted/60">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">More projects</p>
            <ul className="space-y-3 text-sm text-copy-muted">
              {PROJECTS.filter((project) => !FEATURED_IDS.includes(project.id)).map((project) => (
                <li key={project.id}>
                  <Link href={project.link} className="text-highlight transition hover:text-accent dark:text-white">
                    {project.title}
                  </Link>
                  <span className="ml-2 text-copy-muted">— {project.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
