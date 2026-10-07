'use client';

import Link from 'next/link';

function toggleTheme() {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', next === 'dark');
  document.documentElement.dataset.theme = next;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0C0C0E' : '#FAFAFA');
  try {
    window.localStorage.setItem('theme', next);
  } catch {}
}

const ICON = {
  'aria-hidden': true,
  viewBox: '0 0 16 16',
  width: 16,
  height: 16,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

// Both icons and labels render on the server. The `dark` class picks one, so the first paint is already right.
function ThemeLabel() {
  return (
    <>
      <svg {...ICON} className="shrink-0 dark:hidden">
        <path d="M8 2a4 4 0 0 0 6 6 6 6 0 1 1-6-6Z" />
      </svg>
      <svg {...ICON} className="hidden shrink-0 dark:block">
        <circle cx="8" cy="8" r="2.67" />
        <path d="M8 1.33v1.34M8 13.33v1.34M1.33 8h1.34M13.33 8h1.34M3.29 3.29l.94.94M11.77 11.77l.94.94M3.29 12.71l.94-.94M11.77 4.23l.94-.94" />
      </svg>
      <span className="max-sm:sr-only dark:hidden">Dark</span>
      <span className="hidden max-sm:sr-only dark:inline">Light</span>
    </>
  );
}

export function Nav({ name }: { name: string }) {
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
            onClick={toggleTheme}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 px-2 transition-colors hover:text-foreground sm:px-2.5"
          >
            <ThemeLabel />
          </button>
        </nav>
      </div>
    </header>
  );
}
