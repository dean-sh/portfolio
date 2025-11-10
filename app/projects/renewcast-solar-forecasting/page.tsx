import { ProjectDetails } from "@/components/ProjectDetails";

export const metadata = {
  title: "Renewcast · Solar Forecasting Product | Dean Shabi",
  description:
    "Cutting portfolio solar forecasting error from 15% to 6% nMAE with physics-aware models, optimisation, and ML ensembles.",
};

export default function RenewcastSolarForecastingPage() {
  return (
    <ProjectDetails
      title="Renewcast · Solar Forecasting Product"
      subtitle="Re-architecting day-ahead and intraday solar forecasts with a physics-aware core, optimisation engine, and ML adapters that delivered a 2.5× accuracy boost."
      image="/images/renewcast.png"
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
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Summary</h2>
        <p className="text-lg text-highlight/90 dark:text-white/90">
          As the sole AI Engineer and Data Scientist for Renewcast, I rebuilt the solar forecasting stack from the ground up—combining interpretable physical models, mathematically rigorous optimisation, and adaptive machine learning. In five months the platform moved from reactive, error-prone forecasts to a physics-aware system trusted by trading and operations teams.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Portfolio nMAE",
              value: "15% → 6%",
              detail: "2.5× more accurate",
            },
            {
              label: "Error Reduction",
              value: "60%",
              detail: "Lower imbalance cost",
            },
            {
              label: "Sites Covered",
              value: "100s",
              detail: "Utility & C&I",
            },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border/20 bg-surface-muted/70 p-5 text-center dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">
                {metric.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-highlight dark:text-white">{metric.value}</p>
              <p className="text-sm text-copy-muted">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Approach</h2>
        <div className="space-y-6">
          <article className="rounded-2xl border border-border/15 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-highlight dark:text-white">1. Physical foundations</h3>
            <p>
              Modelled clear-sky irradiance, tracker geometry, temperature losses, shading, and site topology to create a physics baseline that traders could interrogate. The deterministic layer ensures forecasts remain interpretable while capturing site-specific behaviour such as single-axis tracker stow positions and historical curtailment.
            </p>
          </article>
          <article className="rounded-2xl border border-border/15 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-highlight dark:text-white">2. Optimisation engine</h3>
            <p>
              Built a rolling-origin backtesting framework aligned to trading hours, with loss functions weighted by market penalties. Bayesian optimisation tuned hyperparameters per site, and feature selection routines guarded against weather bias drift—all orchestrated through MLflow tracking and automated reports.
            </p>
          </article>
          <article className="rounded-2xl border border-border/15 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-highlight dark:text-white">3. Advanced ML layer</h3>
            <p>
              Layered a global gradient-boosted model with site-specific adapters and residual neural nets to correct remaining bias. Quantile regression delivered calibrated P50/P90 forecasts, enabling risk-aware bidding and reserve planning for every asset.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Performance evolution</h2>
        <p>
          Within five months, portfolio error dropped from 15% to 6% nMAE. The interactive Plotly chart embedded on the live site lets stakeholders explore gains across individual assets and time horizons.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[480px] divide-y divide-border/30 text-left text-sm dark:divide-white/10">
            <thead className="text-xs uppercase tracking-[0.2em] text-copy-muted">
              <tr>
                <th className="py-3 pr-6">Month</th>
                <th className="py-3">nMAE (%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20 dark:divide-white/5">
              {[
                { month: "2025-05", value: "15.3" },
                { month: "2025-06", value: "11.1" },
                { month: "2025-07", value: "10.1" },
                { month: "2025-08", value: "9.4" },
                { month: "2025-09", value: "7.4" },
                { month: "2025-10", value: "6.2" },
              ].map((row) => (
                <tr key={row.month}>
                  <td className="py-3 pr-6 text-highlight dark:text-white/90">{row.month}</td>
                  <td className="py-3 text-copy-muted">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">New capabilities in progress</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/20 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-highlight dark:text-white">Stow-aware &amp; wind-aware forecasting</h3>
            <p>
              Building high-resolution wind models (6 m height) with stow-position forecasts for Normal, East, West, and Flat tracker modes. These modules anticipate defence operations and quantify expected production loss under high-wind events.
            </p>
          </div>
          <div className="rounded-2xl border border-border/20 bg-surface-muted/70 p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-highlight dark:text-white">Nowcasting &amp; area forecasting</h3>
            <p>
              Rolling out 0–6 hour nowcasts that fuse satellite imagery with ground telemetry, plus regional aggregation models that capture shared cloud regimes across fleets to strengthen multi-site trading positions.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Integration &amp; delivery</h2>
        <ul className="grid gap-3 text-sm text-copy-muted sm:grid-cols-2">
          <li className="rounded-2xl border border-border/20 bg-surface-muted/70 p-4 dark:border-white/10 dark:bg-white/5">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">Cadence</span>
            <span className="mt-2 block text-highlight dark:text-white">Day-ahead &amp; intraday refreshes</span>
          </li>
          <li className="rounded-2xl border border-border/20 bg-surface-muted/70 p-4 dark:border-white/10 dark:bg-white/5">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">Resolution</span>
            <span className="mt-2 block text-highlight dark:text-white">15-minute intervals</span>
          </li>
          <li className="rounded-2xl border border-border/20 bg-surface-muted/70 p-4 dark:border-white/10 dark:bg-white/5">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">Delivery</span>
            <span className="mt-2 block text-highlight dark:text-white">API, SFTP, Renewcast portal</span>
          </li>
          <li className="rounded-2xl border border-border/20 bg-surface-muted/70 p-4 dark:border-white/10 dark:bg-white/5">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">Stack</span>
            <span className="mt-2 block text-highlight dark:text-white">
              Python · Xarray · LightGBM · PyTorch · MLflow · Docker · CI/CD
            </span>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Why it matters</h2>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <span className="font-semibold text-highlight dark:text-white">60% fewer forecasting errors</span> that reduce imbalance costs and contract penalties.
          </li>
          <li>
            <span className="font-semibold text-highlight dark:text-white">2.5× accuracy uplift</span> that strengthens trading signals and operational planning confidence.
          </li>
          <li>
            <span className="font-semibold text-highlight dark:text-white">Physics + ML synergy</span> delivering explainable forecasts at scale across diverse assets.
          </li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-accent/40 bg-accent/10 p-8 text-center dark:border-white/20 dark:bg-white/10">
        <h2 className="text-2xl font-bold text-highlight dark:text-white">Let’s talk</h2>
        <p className="text-copy-muted">
          Ready to transform your solar forecasts with physics-aware machine learning? I’d love to hear about your challenges and explore how we can replicate these gains.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent/15 px-6 py-3 text-sm font-semibold text-accent-contrast transition hover:bg-accent/25 dark:text-white"
        >
          Book a short assessment →
        </a>
      </section>
    </ProjectDetails>
  );
}

