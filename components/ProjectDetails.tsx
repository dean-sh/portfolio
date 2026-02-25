import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ProjectDetailsProps {
  title: string;
  subtitle: string;
  image: string;
  industry?: string;
  client?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  children: ReactNode;
}

export function ProjectDetails({
  title,
  subtitle,
  image,
  industry,
  client,
  tags = [],
  liveUrl,
  githubUrl,
  children,
}: ProjectDetailsProps) {
  return (
    <article className="pb-20">
      <div className="container max-w-4xl space-y-12 py-20">
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to selected work
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Case Study</p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>

            {(liveUrl || githubUrl) && (
              <div className="flex flex-wrap gap-3">
                {liveUrl && (
                  <Button asChild>
                    <a href={liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Launch the product
                    </a>
                  </Button>
                )}
                {githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View the source
                    </a>
                  </Button>
                )}
              </div>
            )}

            {(industry || client) && (
              <div className="flex gap-6 text-sm">
                {industry && (
                  <div>
                    <p className="text-xs text-muted-foreground">Industry</p>
                    <p className="font-medium">{industry}</p>
                  </div>
                )}
                {client && (
                  <div>
                    <p className="text-xs text-muted-foreground">Partner</p>
                    <p className="font-medium">{client}</p>
                  </div>
                )}
              </div>
            )}

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="relative aspect-[5/4] overflow-hidden rounded-lg border">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <Separator />

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          {children}
        </div>
      </div>
    </article>
  );
}
