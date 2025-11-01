const TESTIMONIALS = [
  {
    name: 'Imogen',
    role: 'Product Manager, tem.',
    highlight: 'Turns complex roadmaps into clear, actionable plans.',
    quote:
      'Dean\'s work has been consistently impressive — his ability to structure complex information at the right level of depth, focus on insights over raw metrics, and adapt quickly to feedback really stood out. His first project was managed with care and clarity, and I always felt well informed throughout. He\'s shown great initiative by improving his approach between updates and being open to more efficient async workflows. All in all, he\'s doing brilliantly — I\'ve been consistently impressed with his execution and thoughtfulness.',
    persona: 'Product leadership',
  },
  {
    name: 'Ross',
    role: 'Head of Data, tem.',
    highlight: 'Makes data-heavy work understandable.',
    quote:
      'Dean has a real talent for clarity — the way he presents information makes even complex, data-heavy content easy to follow. It\'s clear he puts in the effort to make things digestible for people without a statistical background, which is incredibly valuable in cross-functional teams. His communication style is clear, inclusive, and well considered.',
    persona: 'Data & analytics leadership',
  },
  {
    name: 'Irene Di Martino, PhD',
    role: 'CEO at AmpX',
    highlight: 'Trusted operator for executive-level problems.',
    quote:
      'Dean has been a super member of our team, consistently impressing me with every interaction. His smart and thoughtful approach to complex problems set him apart. His intelligence combined with his collaborative spirit makes him an exceptional asset to any organization. I have no doubt he will go far in his career — he\'s proven it time and again.',
    persona: 'Executive sponsor',
  },
  {
    name: 'Jan Bím, PhD',
    role: 'AI Department Lead, Datamole',
    highlight: 'Raises the technical bar and brings the team along.',
    quote:
      'I can always rely on Dean to go the extra mile. He consistently delivers more than expected, often studying new techniques to enhance his work. His ability to quickly transform from a developer to a data scientist through self-learning is remarkable. What truly sets Dean apart is his talent for explaining complex concepts to colleagues — his survey of time series methods became our team\'s foundational reference for all related projects.',
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
