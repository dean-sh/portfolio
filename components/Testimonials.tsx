const TESTIMONIALS = [
  {
    name: 'Imogen',
    role: 'Product Manager, tem.',
    highlight: 'Turns complex roadmaps into clear, actionable plans.',
    quote:
      'Dean structures complex work at the right altitude, keeps everyone aligned, and iterates quickly on feedback. Projects feel calm and well run.',
    persona: 'Product leadership',
  },
  {
    name: 'Ross',
    role: 'Head of Data, tem.',
    highlight: 'Makes data-heavy work understandable.',
    quote:
      'Dean translates dense analytics into narratives the whole room can follow. His communication is inclusive, concise, and keeps decisions moving.',
    persona: 'Data & analytics leadership',
  },
  {
    name: 'Irene Di Martino, PhD',
    role: 'CEO at AmpX',
    highlight: 'Trusted operator for executive-level problems.',
    quote:
      'Smart, thoughtful, and collaborative. Dean tackles complex challenges with calm focus and reliably ships results for the business.',
    persona: 'Executive sponsor',
  },
  {
    name: 'Jan Bím, PhD',
    role: 'AI Department Lead, Datamole',
    highlight: 'Raises the technical bar and brings the team along.',
    quote:
      'Dean goes beyond the brief, leveling up his toolkit and sharing it. His explanations became the reference point for our time-series work.',
    persona: 'Technical leadership',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container space-y-12">
        <header className="max-w-3xl space-y-4 text-balance">
          <p className="eyebrow">Testimonials</p>
          <h2 className="text-3xl text-white md:text-4xl">Feedback from teams I&apos;ve partnered with.</h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-3xl border border-white/10 bg-surface/70 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">{testimonial.persona}</p>
              <p className="mt-4 text-lg font-medium text-white">{testimonial.highlight}</p>
              <blockquote className="mt-3 text-sm text-copy-muted leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 space-y-1 text-sm">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-copy-muted">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
