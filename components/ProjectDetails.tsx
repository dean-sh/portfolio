import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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

const ctaBase =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition";

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
    <article className="relative isolate overflow-hidden bg-page dark:bg-[rgba(2,6,23,0.92)]">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -left-20 top-[-10%] h-72 w-72 rounded-full bg-[rgba(56,189,248,0.16)] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full bg-[rgba(129,140,248,0.14)] blur-[140px]" />
      </div>

      <div className="container space-y-16 py-24">
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition hover:text-highlight dark:hover:text-white"
        >
          ← Back to selected work
        </Link>

        <section className="rounded-[2.5rem] border border-border/20 bg-surface p-10 shadow-layered dark:border-white/10 dark:bg-surface/70 dark:shadow-[0_35px_120px_rgba(15,23,42,0.55)]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] xl:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            <div className="space-y-8">
              <header className="space-y-5">
                <p className="eyebrow">Case Study</p>
                <h1 className="text-balance text-4xl text-highlight dark:text-white md:text-5xl">
                  {title}
                </h1>
                <p className="max-w-2xl text-lg text-copy-muted">{subtitle}</p>
              </header>

              {(liveUrl || githubUrl) && (
                <div className="flex flex-wrap gap-3">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`${ctaBase} border-accent/60 bg-accent/15 text-accent-contrast hover:border-accent hover:bg-accent/25 dark:text-white`}
                    >
                      Launch the product ↗
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`${ctaBase} border-border/30 text-copy-muted hover:border-border/50 hover:text-highlight dark:border-white/15 dark:hover:border-white/35 dark:hover:text-white`}
                    >
                      View the source ↗
                    </a>
                  )}
                </div>
              )}

              {(industry || client) && (
                <dl className="grid gap-6 text-sm text-copy-muted sm:grid-cols-2">
                  {industry && (
                    <div className="rounded-2xl border border-border/20 bg-surface-muted/80 p-4 dark:border-white/10 dark:bg-black/20">
                      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">
                        Industry
                      </dt>
                      <dd className="mt-2 text-base text-highlight dark:text-white/90">
                        {industry}
                      </dd>
                    </div>
                  )}
                  {client && (
                    <div className="rounded-2xl border border-border/20 bg-surface-muted/80 p-4 dark:border-white/10 dark:bg-black/20">
                      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">
                        Partner
                      </dt>
                      <dd className="mt-2 text-base text-highlight dark:text-white/90">{client}</dd>
                    </div>
                  )}
                </dl>
              )}

              {tags.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copy-muted">
                    Capabilities & tooling
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/25 bg-surface-muted/70 px-3 py-1 text-copy-muted transition hover:border-accent/60 hover:text-highlight dark:border-white/10 dark:bg-white/5 dark:hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative flex items-start justify-center">
              <div className="group relative w-full overflow-hidden rounded-[1.75rem] border border-border/25 bg-surface-muted/80 shadow-layered dark:border-white/10 dark:bg-black/40 dark:shadow-[0_25px_70px_rgba(15,23,42,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 500px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-14 text-base leading-relaxed text-copy-muted">
          {children}
        </div>
      </div>
    </article>
  );
}
