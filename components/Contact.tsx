'use client';

import { useForm, ValidationError } from '@formspree/react';

const FORM_ID = 'myzwyaov';

const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: 'deanshabi@gmail.com',
    href: 'mailto:deanshabi@gmail.com',
  },
  {
    label: 'Location',
    value: 'Prague, Czech Republic · collaborating with UK/EU teams',
  },
  {
    label: 'Social',
    value: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dean-shabi/' },
      { name: 'GitHub', href: 'https://github.com/dean-sh/' },
    ],
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm(FORM_ID);

  return (
    <section id="contact" className="section">
      <div className="container grid gap-16 lg:grid-cols-[1fr,1fr]">
        <div className="space-y-6 max-w-xl">
          <p className="eyebrow">Contact</p>
          <h2 className="text-3xl text-white md:text-4xl">Have a project in mind?</h2>
          <p className="text-lg text-copy-muted">
            Let’s talk about how I can help bring your ideas to life with forecasting, optimisation, or automation that
            ships.
          </p>
          <div className="space-y-3 text-sm text-copy-muted">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">Common engagements</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {['Forecasting systems', 'Pricing & optimisation', 'Operational automation', 'Advisory / fractional leadership'].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-surface/60 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-4 text-sm text-copy-muted">
            {CONTACT_DETAILS.map((item) => (
              <li key={item.label}>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">{item.label}</span>
                <div className="mt-2">
                  {Array.isArray(item.value) ? (
                    <div className="flex flex-wrap gap-4">
                      {item.value.map((link) => (
                        <a key={link.name} href={link.href} className="text-white transition hover:text-accent-soft" target="_blank" rel="noopener noreferrer">
                          {link.name}
                        </a>
                      ))}
                    </div>
                  ) : item.href ? (
                    <a href={item.href} className="text-white transition hover:text-accent-soft">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-surface/70 p-10">
          {state.succeeded ? (
            <div className="space-y-4 text-center">
              <p className="text-lg font-semibold text-white">Thank you!</p>
              <p className="text-sm text-copy-muted">Your message is in my inbox—I'll get back within two working days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-surface-muted px-4 py-3 text-sm text-white placeholder:text-copy-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-400" />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-surface-muted px-4 py-3 text-sm text-white placeholder:text-copy-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="you@company.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-400" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">
                  How can I help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-surface-muted px-4 py-3 text-sm text-white placeholder:text-copy-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Share timelines, context, and what success looks like."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-400" />
              </div>

              <ValidationError errors={state.errors} className="text-sm text-red-400" />

              <button type="submit" className="btn-primary w-full" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
