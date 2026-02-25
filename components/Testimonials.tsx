import { Card, CardContent } from '@/components/ui/card';

const TESTIMONIALS = [
  {
    name: 'Imogen',
    role: 'Product Manager, tem.',
    quote:
      'Dean\'s work has been consistently impressive - his ability to structure complex information at the right level of depth, focus on insights over raw metrics, and adapt quickly to feedback really stood out.',
  },
  {
    name: 'Ross',
    role: 'Head of Data, tem.',
    quote:
      'Dean has a real talent for clarity - the way he presents information makes even complex, data-heavy content easy to follow. His communication style is clear, inclusive, and well considered.',
  },
  {
    name: 'Irene Di Martino, PhD',
    role: 'CEO at AmpX',
    quote:
      'Dean has been a super member of our team. His smart and thoughtful approach to complex problems set him apart. His intelligence combined with his collaborative spirit makes him an exceptional asset.',
  },
  {
    name: 'Jan Bim, PhD',
    role: 'AI Department Lead, Datamole',
    quote:
      'I can always rely on Dean to go the extra mile. His ability to quickly transform from a developer to a data scientist through self-learning is remarkable. His survey of time series methods became our team\'s foundational reference.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container space-y-10">
        <h2 className="text-2xl font-semibold tracking-tight">Testimonials</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <blockquote className="text-sm text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
