import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="section">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Dean Shabi</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            AI engineer & data scientist building forecasting, pricing, and
            automation systems for energy markets.
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            I partner with traders, grid operators, and founders to move ideas
            from research into reliable production workflows - driving measurable
            uplifts in accuracy, risk control, and revenue.
          </p>
        </div>

        <div className="flex gap-3">
          <Button asChild>
            <Link href="/#works">
              <ArrowDown className="mr-2 h-4 w-4" />
              View my work
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Link>
          </Button>
        </div>

        <dl className="flex flex-wrap gap-8 pt-4 text-sm">
          <div>
            <dt className="text-muted-foreground">Experience</dt>
            <dd className="font-semibold">6+ years</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Forecast accuracy</dt>
            <dd className="font-semibold">15% &rarr; 6% nMAE</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Cost savings</dt>
            <dd className="font-semibold">&pound;50/MWh unlocked</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
