export default function About() {
  return (
    <section id="about" className="section">
      <div className="container space-y-12">
        <header className="max-w-3xl space-y-5 text-balance">
          <p className="eyebrow">Background &amp; Expertise</p>
          <h2 className="text-3xl text-white md:text-4xl">
            Energy-market practitioner turned AI founder.
          </h2>
          <div className="space-y-4 text-sm text-copy-muted">
            <p>
              Physics and electrical engineering roots, followed by 6+ years building production AI systems for UK/EU
              renewable energy trading, pricing, and grid operations.
            </p>
            <p>
              From Bloome AI to tem.energy, AmpX, and Datamole, I partner directly with founders, traders, and operators to
              turn ambiguous problems into measurable forecasting, optimisation, and automation products.
            </p>
            <p>
              I lean in as a hands-on lead—setting strategy, designing systems, and shipping alongside teams with clear
              governance and post-launch rituals.
            </p>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-surface/70 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-copy-muted">Where I create value</h3>
              <ul className="mt-4 space-y-3 text-sm text-copy-muted">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>Renewable energy forecasting and weather-aware modelling for trading and grid decisions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>Risk-based pricing and optimisation engines with clear KPIs and regulatory fit.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>Operational analytics and automation that teams can maintain after handoff.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-surface-muted/60 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-copy-muted">Energy market fluency</h3>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-copy-muted">
                {['Ofgem regulations', 'REGOs', 'Balancing mechanism', 'Trading frameworks'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-surface/70 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-copy-muted">Measured outcomes</h3>
              <dl className="mt-6 grid grid-cols-2 gap-6">
                {[{ value: '+57%', label: 'Wind forecasting accuracy lift' }, { value: '£50/MWh', label: 'Supply matching savings' }, { value: 'Millions £', label: 'Revenue impact documented' }, { value: '6+ years', label: 'Production systems delivered' }].map(
                  (stat) => (
                    <div key={stat.label}>
                      <dt className="text-2xl font-semibold text-white">{stat.value}</dt>
                      <dd className="text-xs uppercase tracking-[0.3em] text-copy-muted">{stat.label}</dd>
                    </div>
                  ),
                )}
              </dl>
            </div>

            <div className="rounded-3xl border border-white/10 bg-surface/70 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-copy-muted">Toolbox</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-copy-muted">
                {[
                  'Deep learning',
                  'Physical modelling',
                  'Linear & stochastic optimisation',
                  'Time-series forecasting',
                  'Weather modelling',
                  'Anomaly detection',
                  'Risk modelling',
                  'Grid simulation',
                  'Monte Carlo methods',
                  'Price optimisation',
                  'Load balancing',
                ].map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 px-3 py-1">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
