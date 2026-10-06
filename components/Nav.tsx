'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function readTheme(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function Nav({ name }: { name: string }) {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  useEffect(() => setTheme(readTheme()), []);

  function toggle() {
    const next = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  }

  return (
    <header className="container flex h-16 items-center justify-between font-mono text-xs">
      <Link href="/" className="text-foreground">
        {name}
      </Link>
      <nav className="flex items-center gap-6 text-muted-foreground">
        <Link href="/#work" className="hover:text-foreground">
          Work
        </Link>
        <Link href="/resume" className="hover:text-foreground">
          Resume
        </Link>
        <button type="button" onClick={toggle} className="uppercase tracking-[0.12em] hover:text-foreground">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  );
}
