import { ProjectDetails } from "@/components/ProjectDetails";

export const metadata = {
  title: "Rebuilding Our MLOps Foundation | Dean Shabi",
  description:
    "How a shared model contract, MLflow packaging, and a challenger-vs-champion loop restored speed and safety for renewable forecasting releases.",
};

export default function MLOpsFoundationCaseStudy() {
  return (
    <ProjectDetails
      title="Rebuilding Our MLOps Foundation for Faster, Safer Forecasting"
      subtitle="Introducing a shared Model Contract, MLflow packaging, and a challenger-vs-champion loop that made experimentation fast and deployments boring."
      image="/images/mlops-loop-en.jpg"
      industry="Renewable energy forecasting"
      client="Platform R&D"
      tags={[
        "MLOps",
        "MLflow",
        "Model Contract",
        "Forecasting",
        "Python",
        "Kubernetes",
        "CI/CD",
        "Data Contracts",
      ]}
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Project Overview</h2>
        <p className="text-lg text-highlight/90 dark:text-white/90">
          Building breakthrough forecasting models is only half the work. The other half is operational: keeping models deployable,
          maintainable, and comparable as they evolve. Our research velocity kept climbing, yet the path from notebook to production
          became fragile. This case study covers how we rebuilt that path so reliability and experimentation could reinforce one another.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Timeline", value: "6 weeks", detail: "concept to rollout" },
            { label: "Release cadence", value: "+3×", detail: "challengers per week" },
            { label: "Deploy prep", value: "<1 day", detail: "down from 4-5" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border/20 bg-surface-muted/70 p-5 text-center dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-highlight dark:text-white">{metric.value}</p>
              <p className="text-sm text-copy-muted">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Why We Needed a New Foundation</h2>
        <p>
          As forecasting work scaled across solar, wind, and pricing initiatives, four pressures converged. Data scientists needed freedom to
          iterate, engineering needed reproducible artefacts, pipelines needed a consistent interface, and the business needed measurable
          uplifts deployed safely. Our tooling, however, had grown organically. Every model carried slightly different runtimes, packaging
          rules, and implicit knowledge—meaning a “small” experiment required pipeline surgery.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Data scientists",
              text: "Wanted to add features or swap dependencies without filing ops tickets or rewriting orchestration logic.",
            },
            {
              title: "Engineering",
              text: "Needed deterministic packaging, reproducible environments, and built-in smoke tests before promoting runs.",
            },
            {
              title: "Pipelines",
              text: "Required a consistent contract so champions and challengers could be swapped with zero code changes.",
            },
            {
              title: "The business",
              text: "Needed measurable improvements—like nMAE reductions—rolled out safely and predictably.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/15 bg-surface-muted/70 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-copy-muted">{item.title}</h3>
              <p className="mt-2 text-sm text-copy-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <p>
          Our goal became simple: make experimentation fast, and deployment boring.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">The Turning Point: A Shared Model Contract</h2>
        <p>
          We introduced a Model Contract—an explicit definition of what every model must provide. The contract sits inside the artifact, so
          when a model loads, its expectations travel with it. Pipelines stop relying on tribal knowledge; the model describes itself.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "What the contract includes",
              bullets: [
                "Input schema and feature query logic",
                "Output structure, quantiles, and metadata",
                "Runtime requirements (Python/CUDA/env vars)",
                "Packaging + health-check rules",
              ],
            },
            {
              title: "What it unlocked",
              bullets: [
                "Instant schema drift detection",
                "Comparable assumptions across generations",
                "Pipelines agnostic to architecture",
                "Faster onboarding for new contributors",
              ],
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-border/15 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold text-highlight dark:text-white">{card.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {card.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Standardising Packaging with MLflow</h2>
        <p>
          Next, we adopted MLflow’s `pyfunc` interface as the universal packaging format. Every artifact now carries the contract, model
          weights, dependencies, inference logic, and lineage metadata. The exact same bundle is used for local experiments, challenger
          evaluation, CI/CD testing, and production inference.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Package once, run anywhere",
              bullets: [
                "No bespoke Dockerfiles per experiment",
                "CI loads artifacts exactly like prod",
                "Blue/green deploys are MLflow URI swaps",
                "Rollbacks are instant registry pointer changes",
              ],
            },
            {
              title: "Operational gains",
              bullets: [
                "Research ↔ deployment parity",
                "Automated dependency locking",
                "Cross-team sharing via registry IDs",
                "Consistent smoke tests + health checks",
              ],
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-border/15 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold text-highlight dark:text-white">{card.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {card.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Introducing the Challenger vs. Champion Loop</h2>
        <p>
          Forecasting gains are rarely obvious in a single notebook run. Different weather regimes, asset classes, and time horizons can flip
          a “better” model into a regression. We implemented a rigorous challenger-vs-champion process so only consistently superior
          challengers advance.
        </p>
        <ol className="list-decimal space-y-3 pl-6 text-sm">
          {[
            "Champion snapshot pinned from the production registry.",
            "Any new candidate registers as a challenger with its contract + metadata.",
            "Both run on identical data slices through the same inference pipelines.",
            "Metrics compare accuracy, stability, edge-case handling, and runtime cost.",
            "Promotion requires the challenger to outperform the champion across multiple weeks.",
          ].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          Because every model shares the contract + MLflow format, we can compare older architectures vs. newer ones, different feature sets,
          alternate weather providers, and even physics-informed hybrids—without rewriting code or pipelines.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">What This Enabled</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Experiments run quickly, yet deployments stay predictable and low risk.",
            "Validation is repeatable and fair, with identical flows for every challenger.",
            "Past models remain reproducible because their contracts capture the full context.",
            "New models no longer require pipeline changes; pipelines read the contract and adapt.",
            "Solar and wind forecasting work now co-exists inside one unified ML repository.",
            "Roadmaps unlocked advanced physics integrations, lead-time-aware features, nowcasting, and ensembles.",
          ].map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-border/15 bg-surface-muted/70 p-5 text-sm text-copy-muted dark:border-white/10 dark:bg-white/5"
            >
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">The Result</h2>
        <p>
          We now operate on an MLOps foundation that supports rapid renewable forecasting research without compromising reliability. Models
          can evolve dramatically while the system around them stays stable. The same scaffolding powers ongoing initiatives—from advanced
          physics integrations to multi-model ensembles—ensuring innovation and operational safety move in lockstep.
        </p>
        <div className="rounded-3xl border border-accent/40 bg-accent/10 p-8 text-center dark:border-white/20 dark:bg-white/10">
          <p className="text-lg font-semibold text-highlight dark:text-white">Innovation can happen quickly, and production remains stable.</p>
          <p className="text-sm text-copy-muted">
            Reliability and experimentation no longer compete—they reinforce each other. Ready to build something similar? Let’s talk.
          </p>
          <a
            href="/#contact"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent/15 px-6 py-3 text-sm font-semibold text-accent-contrast transition hover:bg-accent/25 dark:text-white"
          >
            Book a short assessment →
          </a>
        </div>
      </section>
    </ProjectDetails>
  );
}
