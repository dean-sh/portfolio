'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function readTheme(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function Nav({ name }: { name: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(readTheme() === 'dark'), []);

  function toggle() {
    const next = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0C0C0E' : '#FAFAFA');
    try {
      window.localStorage.setItem('theme', next);
    } catch {}
    setDark(next === 'dark');
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65">
      <div className="container flex h-16 items-center justify-between text-sm">
        <Link href="/" className="inline-flex min-h-11 items-center whitespace-nowrap font-medium text-foreground">
          {name}
        </Link>
        <nav aria-label="Primary" className="-mr-2 flex items-center text-muted-foreground sm:mr-0 sm:gap-2">
          <Link href="/#work" className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-foreground sm:px-2.5">
            Work
          </Link>
          <Link href="/resume" className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-foreground sm:px-2.5">
            Resume
          </Link>
          <Link href="/#contact" className="inline-flex min-h-11 items-center px-2 max-[359px]:hidden transition-colors hover:text-foreground sm:px-2.5">
            Contact
          </Link>
          <button
            type="button"
            aria-pressed={dark}
            onClick={toggle}
            className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-foreground dark:text-foreground sm:px-2.5"
          >
            Dark
          </button>
        </nav>
      </div>
    </header>
  );
}
