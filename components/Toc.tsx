'use client';

import { useEffect, useState } from 'react';
import { formatIndex } from '@/lib/work';

type Section = { id: string; label: string };

// The current section is the last one whose heading has passed 30% of the viewport height.
function currentSection(sections: readonly Section[]): string | null {
  const line = window.innerHeight * 0.3;
  let current: string | null = null;
  for (const { id } of sections) {
    const heading = document.getElementById(id);
    if (heading && heading.getBoundingClientRect().top <= line) current = id;
  }
  return current;
}

export function Toc({ sections }: { sections: readonly Section[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setActive(currentSection(sections));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [sections]);

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="eyebrow">On this page</p>
      <ol className="mt-3 space-y-1">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={active === section.id ? 'location' : undefined}
              className="inline-flex min-h-9 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current]:text-foreground"
            >
              <span aria-hidden="true" className="font-mono text-xs text-signal">
                {formatIndex(i)}
              </span>
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
