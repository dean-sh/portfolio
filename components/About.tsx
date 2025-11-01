import Link from 'next/link';

export default function About() {
  return (
    <>
      <section id="about" className="section">
        <div className="container space-y-12">
          <header className="max-w-3xl space-y-5 text-balance">
            <p className="eyebrow">Profile</p>
            <h2 className="text-3xl text-white md:text-4xl">Data scientist, energy expert, AI engineer, and AI founder.</h2>
            <div className="space-y-4 text-sm text-copy-muted">
              <p>
                Physics and electrical engineering roots, followed by 6+ years building production AI systems for UK/EU
                renewable energy trading, pricing, and grid operations.
              </p>
              <p>
                I partner directly with founders, traders, and operators to turn ambiguous market problems into measurable forecasting,
                optimisation, and automation products.
              </p>
              <p>
                I lean in as a hands-on lead—setting strategy, designing systems, and shipping alongside teams with clear governance and
                post-launch rituals.
              </p>
              <p>
                Currently leading founder work on{' '}
                <Link
                  href="https://www.bloome.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted underline-offset-4 transition hover:text-white"
                >
                  Bloome AI
                </Link>{' '}
                to bring calm, high-signal job search automation to market.
              </p>
            </div>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8">
              <div className="card border-white/10 bg-surface/70 p-8">
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

              <div className="card border-white/10 bg-surface-muted/60 p-8">
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
              <div className="card border-white/10 bg-surface/70 p-8">
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

              <div className="card border-white/10 bg-surface/70 p-8">
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

      <section id="works" className="section pt-0">
        <div className="container space-y-12">
          <header className="max-w-3xl space-y-4 text-balance">
            <p className="eyebrow">Current Work</p>
            <h2 className="text-3xl text-white md:text-4xl">Recent products and outcomes.</h2>
            <p className="text-sm text-copy-muted">Spotlighting my new product and recent delivery wins that shaped this year's work.</p>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
            <article className="card border-white/10 bg-surface/70 p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-copy-muted">Founder · Current</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Bloome AI</h3>
                </div>
                <Link
                  href="https://www.bloome.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 px-4 py-1 text-sm text-copy-muted transition hover:border-white/30 hover:text-white"
                >
                  Visit site
                </Link>
              </div>
              <p className="mt-4 text-sm text-copy-muted">AI-driven job matching that delivers five perfect roles every 09:00 Morning Drop.</p>
              <ul className="mt-6 space-y-3 text-sm text-copy-muted">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>Morning Drop curates investor-grade roles daily, turning job search into a one-minute ritual.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>Apply Pro unlocks one-click submissions with human-sounding outreach and tailored résumés.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>Adaptive calibration engine learns from a few approvals; Hands-Free (Beta) applies transparently under supervision.</span>
                </li>
              </ul>
              <div className="mt-6 space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-copy-muted">Mission</p>
                <p className="text-sm text-copy-muted">Make job searching effortless with human-centred automation that restores calm.</p>
              </div>
            </article>

            <article className="card border-white/10 bg-surface-muted/60 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-copy-muted">Select delivery</h3>
              <ul className="mt-5 space-y-4 text-sm text-copy-muted">
                <li>
                  <p className="font-semibold text-white">tem.energy · RED pricing engine</p>
                  <p>Automated portfolio pricing that balances growth with risk controls for UK renewable traders.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">AmpX · Grid intelligence</p>
                  <p>Deployed forecasting platforms and battery degradation models powering real-time decisions.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">Datamole · Industrial ML</p>
                  <p>Delivered predictive maintenance, anomaly detection, and time-series automation across IIoT fleets.</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
