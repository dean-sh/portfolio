import { ProjectDetails } from"@/components/ProjectDetails";
import { PerformanceChart } from"@/components/ui/PerformanceChart";

type PerformancePoint = {
 month: string;
 value: number;
};

const performanceTrend: PerformancePoint[] = [
 { month:"2025-05", value: 15.3 },
 { month:"2025-06", value: 11.1 },
 { month:"2025-07", value: 10.1 },
 { month:"2025-08", value: 9.4 },
 { month:"2025-09", value: 7.4 },
 { month:"2025-10", value: 6.2 },
];

export const metadata = {
 title:"Renewcast · Solar Forecasting Product | Dean Shabi",
 description:
"Cutting portfolio solar forecasting error from 15% to 6% nMAE with physics-aware models, optimisation, and ML ensembles.",
};

export default function RenewcastSolarForecastingPage() {
 return (
 <ProjectDetails
 title="Renewcast · Solar Forecasting Product"
 subtitle="Re-architecting day-ahead and intraday solar forecasts with a physics-aware core, optimisation engine, and ML adapters that delivered a 2.5× accuracy boost."
 image="/images/chelsea-WvusC5M-TM8-unsplash.jpg"
 industry="Utility-scale & distributed solar"
 client="Renewcast"
 tags={[
"Solar Forecasting",
"Physics-Informed ML",
"Bayesian Optimisation",
"Quantile Regression",
"MLflow",
"Xarray",
"LightGBM",
"PyTorch",
"Docker",
 ]}
 >
 <section className="space-y-6">
 <h2 className="text-2xl font-bold text-foreground">Summary</h2>
 <p className="text-lg text-foreground">
 As the sole AI Engineer and Data Scientist for Renewcast, I rebuilt the solar forecasting stack from the ground up -combining interpretable physical models, mathematically rigorous optimisation, and adaptive machine learning. Over a five-month continuous improvement program, each sprint stacked measurable gains until the platform shifted from reactive, error-prone forecasts to a physics-aware system trusted by trading and operations teams.
 </p>
 <div className="grid gap-4 sm:grid-cols-3">
 {[
 {
 label:"Portfolio nMAE",
 value:"15% → 6%",
 detail:"2.5× more accurate",
 },
 {
 label:"Error Reduction",
 value:"60%",
 detail:"Lower imbalance cost",
 },
 {
 label:"Sites Covered",
 value:"100s",
 detail:"Utility & C&I",
 },
 {
 label:"Delivery Timeline",
 value:"5 months",
 detail:"Concept → production",
 },
 ].map((metric) => (
 <div
 key={metric.label}
 className="rounded-lg border border-border bg-muted p-5 text-center"
 >
 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
 {metric.label}
 </p>
 <p className="mt-3 text-3xl font-semibold text-foreground">{metric.value}</p>
 <p className="text-sm text-muted-foreground">{metric.detail}</p>
 </div>
 ))}
 </div>
 </section>

 <section className="space-y-4">
 <h2 className="text-2xl font-bold text-foreground">Approach</h2>
 <p className="text-muted-foreground">
 Each workstream ran in overlapping, two-week sprints so the full physics core, optimisation engine, and ML adapters could hit production inside the five-month rebuild window -treating the engagement as a continuous improvement loop rather than a one-off rebuild.
 </p>
 <div className="space-y-6">
 <article className="rounded-lg border border-border bg-muted p-6">
 <h3 className="text-xl font-semibold text-foreground">1. Physical foundations</h3>
 <p>
 Modelled clear-sky irradiance, tracker geometry, temperature losses, shading, and site topology to create a physics baseline that traders could interrogate. The deterministic layer ensures forecasts remain interpretable while capturing site-specific behaviour such as single-axis tracker stow positions and historical curtailment.
 </p>
 </article>
 <article className="rounded-lg border border-border bg-muted p-6">
 <h3 className="text-xl font-semibold text-foreground">2. Optimisation engine</h3>
 <p>
 Built a rolling-origin backtesting framework aligned to trading hours, with loss functions weighted by market penalties. Bayesian optimisation tuned hyperparameters per site, and feature selection routines guarded against weather bias drift -all orchestrated through MLflow tracking and automated reports.
 </p>
 </article>
 <article className="rounded-lg border border-border bg-muted p-6">
 <h3 className="text-xl font-semibold text-foreground">3. Advanced ML layer</h3>
 <p>
 Layered a global gradient-boosted model with site-specific adapters and residual neural nets to correct remaining bias. Quantile regression delivered calibrated P50/P90 forecasts, enabling risk-aware bidding and reserve planning for every asset.
 </p>
 </article>
 </div>
 </section>

 <section className="space-y-6">
 <h2 className="text-2xl font-bold text-foreground">Performance evolution</h2>
 <p>
 Within five months, portfolio error dropped from 15% to 6% nMAE through an uninterrupted cadence of improvements. Explore the monthly glide path below -the chart highlights how each optimisation sprint compressed error bands and built confidence for traders.
 </p>
 <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
 <PerformanceChart data={performanceTrend} />
 <div className="overflow-x-auto rounded-lg border border-border bg-muted p-4">
 <table className="min-w-[320px] divide-y divide-border text-left text-sm">
 <thead className="text-xs uppercase tracking-wider text-muted-foreground">
 <tr>
 <th className="py-3 pr-6">Month</th>
 <th className="py-3">nMAE (%)</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-border">
 {performanceTrend.map((row) => (
 <tr key={row.month}>
 <td className="py-3 pr-6 text-foreground/90">{row.month}</td>
 <td className="py-3 text-muted-foreground">{row.value.toFixed(1)}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 <section className="space-y-6">
 <h2 className="text-2xl font-bold text-foreground">New capabilities in progress</h2>
 <p className="text-muted-foreground">
 With the five-month continuous-improvement phase live, the next wave targets resilience modules that extend the same tempo to new product surfaces.
 </p>
 <div className="grid gap-5 lg:grid-cols-2">
 <div className="rounded-lg border border-border bg-muted p-6">
 <h3 className="text-lg font-semibold text-foreground">Stow-aware &amp; wind-aware forecasting</h3>
 <p>
 Building high-resolution wind models (6 m height) with stow-position forecasts for Normal, East, West, and Flat tracker modes. These modules anticipate defence operations and quantify expected production loss under high-wind events.
 </p>
 </div>
 <div className="rounded-lg border border-border bg-muted p-6">
 <h3 className="text-lg font-semibold text-foreground">Nowcasting &amp; area forecasting</h3>
 <p>
 Rolling out 0–6 hour nowcasts that fuse satellite imagery with ground telemetry, plus regional aggregation models that capture shared cloud regimes across fleets to strengthen multi-site trading positions.
 </p>
 </div>
 </div>
 </section>

 <section className="space-y-4">
 <h2 className="text-2xl font-bold text-foreground">Integration &amp; delivery</h2>
 <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
 <li className="rounded-lg border border-border bg-muted p-4">
 <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cadence</span>
 <span className="mt-2 block text-foreground">Day-ahead &amp; intraday refreshes</span>
 </li>
 <li className="rounded-lg border border-border bg-muted p-4">
 <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resolution</span>
 <span className="mt-2 block text-foreground">15-minute intervals</span>
 </li>
 <li className="rounded-lg border border-border bg-muted p-4">
 <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Delivery</span>
 <span className="mt-2 block text-foreground">API, SFTP, Renewcast portal</span>
 </li>
 <li className="rounded-lg border border-border bg-muted p-4">
 <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stack</span>
 <span className="mt-2 block text-foreground">
 Python · Xarray · LightGBM · PyTorch · MLflow · Docker · CI/CD
 </span>
 </li>
 <li className="rounded-lg border border-border bg-muted p-4">
 <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Timeline</span>
 <span className="mt-2 block text-foreground">Concept to production in 5 months</span>
 </li>
 </ul>
 </section>

 <section className="space-y-4">
 <h2 className="text-2xl font-bold text-foreground">Why it matters</h2>
 <ul className="list-disc space-y-3 pl-6">
 <li>
 <span className="font-semibold text-foreground">60% fewer forecasting errors</span> that reduce imbalance costs and contract penalties.
 </li>
 <li>
 <span className="font-semibold text-foreground">2.5× accuracy uplift</span> that strengthens trading signals and operational planning confidence.
 </li>
 <li>
 <span className="font-semibold text-foreground">5-month turnaround</span> proving the team can deliver transformational forecasting upgrades without multi-year programmes.
 </li>
 <li>
 <span className="font-semibold text-foreground">Physics + ML synergy</span> delivering explainable forecasts at scale across diverse assets.
 </li>
 </ul>
 </section>

 <section className="space-y-3 rounded-lg border border-border bg-muted p-8 text-center">
 <h2 className="text-2xl font-bold text-foreground">Let’s talk</h2>
 <p className="text-muted-foreground">
 Ready to transform your solar forecasts with physics-aware machine learning? I’d love to hear about your challenges and explore how we can replicate these gains.
 </p>
 <a
 href="/#contact"
 className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
 >
 Book a short assessment →
 </a>
 </section>
 </ProjectDetails>
 );
}
