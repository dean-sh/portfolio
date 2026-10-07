import { ProjectDetails } from"@/components/ProjectDetails";

export const metadata = {
 title:"Rebuilding our MLOps foundation | Dean Shabi",
 description:
"How we rebuilt the release path for renewable forecasting models with a shared model contract, MLflow packaging and a challenger-vs-champion loop.",
};

export default function MLOpsFoundationCaseStudy() {
 return (
 <ProjectDetails
 title="Rebuilding our MLOps foundation for faster, safer forecasting"
 subtitle="We added a shared model contract, MLflow packaging and a challenger-vs-champion loop. Experiments got fast. Deployments got boring."
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
 <h2 className="text-2xl font-bold text-foreground">Overview</h2>
 <p className="text-lg text-foreground">
 Forecasting work had spread across solar, wind and pricing, and our tooling grew one model at a time. Every model had its own
 slightly different runtime and packaging, plus know-how nobody wrote down. A small experiment meant pipeline surgery, so we
 rebuilt the path from notebook to production.
 </p>
 <div className="grid gap-4 sm:grid-cols-3">
 {[
 { label:"Timeline", value:"6 weeks", detail:"concept to rollout" },
 { label:"Release cadence", value:"+3×", detail:"challengers per week" },
 { label:"Deploy prep", value:"<1 day", detail:"down from 4-5 days" },
 ].map((metric) => (
 <div
 key={metric.label}
 className="rounded-lg border border-border bg-muted p-5 text-center"
 >
 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{metric.label}</p>
 <p className="mt-3 text-3xl font-semibold text-foreground">{metric.value}</p>
 <p className="text-sm text-muted-foreground">{metric.detail}</p>
 </div>
 ))}
 </div>
 </section>

 <section className="space-y-5">
 <h2 className="text-2xl font-bold text-foreground">A shared model contract</h2>
 <p>
 We wrote a model contract that defines what every model must provide. It ships inside the model artifact, so pipelines read it
 on load instead of relying on what someone remembers.
 </p>
 <div className="grid gap-4 md:grid-cols-2">
 {[
 {
 title:"What it defines",
 bullets: [
"Input schema and feature query logic",
"Output structure, quantiles and metadata",
"Python, CUDA and environment variable requirements",
"Packaging and health-check rules",
 ],
 },
 {
 title:"What it gave us",
 bullets: [
"Instant schema drift detection",
"Faster onboarding for new contributors",
 ],
 },
 ].map((card) => (
 <article
 key={card.title}
 className="rounded-lg border border-border bg-muted p-6"
 >
 <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
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
 <h2 className="text-2xl font-bold text-foreground">One package format with MLflow</h2>
 <p>
 We packaged every model with MLflow&apos;s <code>pyfunc</code> interface. Each artifact carries the contract, weights,
 dependencies, inference logic and lineage metadata. Local experiments, challenger evaluation, CI/CD tests and production
 inference all run the same bundle.
 </p>
 <div className="grid gap-4 md:grid-cols-2">
 {[
 {
 title:"Releases",
 bullets: [
"No custom Dockerfile per experiment",
"CI loads artifacts the same way production does",
"Blue/green deploys are MLflow URI swaps",
"Rollbacks are instant registry pointer changes",
 ],
 },
 {
 title:"Shared tooling",
 bullets: [
"Automated dependency locking",
"Teams share models by registry ID",
"Every model gets the same smoke tests and health checks",
 ],
 },
 ].map((card) => (
 <article
 key={card.title}
 className="rounded-lg border border-border bg-muted p-6"
 >
 <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
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
 <h2 className="text-2xl font-bold text-foreground">The challenger-vs-champion loop</h2>
 <p>
 One notebook run rarely proves a forecasting gain. A model that wins in one weather regime, asset class or time horizon can lose
 in another. So every new model has to beat the production model, the champion, before it ships.
 </p>
 <ol className="list-decimal space-y-3 pl-6 text-sm">
 {[
"We pin a snapshot of the champion from the production registry.",
"Each new candidate registers as a challenger with its contract and metadata.",
"Both run on identical data slices through the same inference pipelines.",
"We compare accuracy, stability, edge-case handling and runtime cost.",
"The challenger replaces the champion only after beating it for multiple weeks.",
 ].map((step) => (
 <li key={step}>{step}</li>
 ))}
 </ol>
 <p>
 Every model shares the contract and the MLflow format, so the same loop compares old and new architectures, feature sets, weather
 providers and physics-informed hybrids. None of it needs new pipeline code.
 </p>
 </section>

 <section className="space-y-5">
 <h2 className="text-2xl font-bold text-foreground">What changed</h2>
 <div className="grid gap-4 md:grid-cols-3">
 {[
"Past models stay reproducible because their contracts record the full context.",
"Solar and wind forecasting now live in one ML repository.",
"The roadmap opened up to physics integrations, lead-time-aware features, nowcasting and ensembles.",
 ].map((item) => (
 <article
 key={item}
 className="rounded-lg border border-border bg-muted p-5 text-sm text-muted-foreground"
 >
 {item}
 </article>
 ))}
 </div>
 </section>

 <section className="space-y-4">
 <div className="rounded-lg border border-border bg-muted p-8 text-center">
 <p className="text-lg font-semibold text-foreground">Want the same setup for your models?</p>
 <a
 href="/#contact"
 className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
 >
 Book a short assessment →
 </a>
 </div>
 </section>
 </ProjectDetails>
 );
}
