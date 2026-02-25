import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PROJECTS = [
  {
    id: 11,
    title: 'Renewcast Solar Forecasting',
    description:
      'Re-architected solar forecasting with physics-aware models and Bayesian optimisation — cut portfolio error from 15% to 6% nMAE.',
    tags: ['Solar Forecasting', 'Physics + ML', 'Bayesian Opt.'],
    image: '/images/chelsea-WvusC5M-TM8-unsplash.jpg',
    link: '/projects/renewcast-solar-forecasting',
    metric: '15% → 6% nMAE',
  },
  {
    id: 1,
    title: 'High-Accuracy Forecasting Models',
    description:
      'Load, generation, and price forecasting models powering core product features and reducing balancing costs.',
    tags: ['Energy-Tech', 'Forecasting', 'ML'],
    image: '/images/energy-demand.jpg',
    link: '/projects/forecasting-models',
    metric: '+57% accuracy uplift',
  },
  {
    id: 2,
    title: 'Portfolio Pricing Engine',
    description:
      'Risk-based pricing optimisation enabling rapid growth while balancing risk in volatile energy markets.',
    tags: ['Optimisation', 'Risk Analysis', 'Energy Trading'],
    image: '/images/financial-analytics.jpg',
    link: '/projects/portfolio-pricing',
    metric: 'Reduced portfolio VaR',
  },
  {
    id: 3,
    title: 'Exempt Supply Matching',
    description:
      'Matching algorithm under UK regulations pairing SME consumers with local generators, unlocking ~£50/MWh in savings.',
    tags: ['Algorithm', 'Energy', 'Optimisation'],
    image: '/images/transmission_loss.jpg',
    link: '/projects/exempt-supply-matching',
    metric: '£50/MWh savings',
  },
];

export default function Works() {
  return (
    <section id="works" className="section">
      <div className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected Work
          </h2>
          <p className="text-muted-foreground">
            Forecasting systems, pricing engines, and optimisation models
            shipped with founders and cross-functional teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col overflow-hidden transition-colors hover:border-foreground/20"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {project.metric}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="flex-shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
