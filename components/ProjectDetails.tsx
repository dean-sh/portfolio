import Image from 'next/image';
import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { Arrow } from '@/components/Arrow';
import { SectionLabel } from '@/components/Section';

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
  const outbound = [
    { label: 'Live', href: liveUrl },
    { label: 'Source', href: githubUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));
  const meta = [industry, client].filter((value): value is string => Boolean(value));

  return (
    <article className="container">
      <div className="prose-col space-y-12 py-14 md:py-20">
        <p className="font-mono text-sm">
          <Link
            href="/#work"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Arrow direction="left" className="mr-2" />
            Selected work
          </Link>
        </p>

        <header className="space-y-6">
          <SectionLabel>Case study</SectionLabel>
          <h1 className="text-display-lg">{title}</h1>
          <p className="measure text-lg leading-relaxed text-muted-foreground md:text-xl">
            {subtitle}
          </p>

          {outbound.length > 0 && (
            <p className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              {outbound.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="link">
                  {link.label}
                  <Arrow className="ml-1.5" />
                </a>
              ))}
            </p>
          )}

          {meta.length > 0 && (
            <p className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
              {meta.map((value, i) => (
                <Fragment key={value}>
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <span>{value}</span>
                </Fragment>
              ))}
            </p>
          )}

          {tags.length > 0 && (
            <p className="font-mono text-xs leading-relaxed text-muted-foreground">
              {tags.join(' · ')}
            </p>
          )}
        </header>

        <div className="relative aspect-[16/9] overflow-hidden border border-border">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <hr />

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-a:text-foreground">
          {children}
        </div>
      </div>
    </article>
  );
}
