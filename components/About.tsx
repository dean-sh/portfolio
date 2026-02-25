import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <section id="about" className="section pt-0">
      <div className="container max-w-3xl space-y-6">
        <Separator className="mb-8" />
        <div className="flex items-start gap-6">
          <div className="relative hidden h-20 w-20 flex-shrink-0 overflow-hidden rounded-full sm:block">
            <Image
              src="/images/profile.png"
              alt="Dean Shabi"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">About</h2>
            <p className="text-muted-foreground">
              Physics and electrical engineering roots, followed by 6+ years
              building production AI systems for UK/EU renewable energy trading,
              pricing, and grid operations. I partner directly with founders,
              traders, and operators to turn ambiguous market problems into
              measurable products.
            </p>
            <p className="text-muted-foreground">
              Currently building{' '}
              <Link
                href="https://www.bloome.ai"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                Bloome AI
              </Link>
              , an AI-powered job matching assistant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
