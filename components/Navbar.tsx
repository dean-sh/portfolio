'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

const LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#works' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Résumé', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document === 'undefined') {
      return 'light';
    }
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const current = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current);

    const onStorage = (event: StorageEvent) => {
      if (event.key === 'theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
        const nextTheme = event.newValue;
        root.classList.toggle('dark', nextTheme === 'dark');
        root.dataset.theme = nextTheme;
        setTheme(nextTheme);
      }
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    root.classList.toggle('dark', nextTheme === 'dark');
    root.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem('theme', nextTheme);
    } catch (error) {
      console.warn('Unable to persist theme preference:', error);
    }
    setTheme(nextTheme);
  };

  const ThemeToggleButton = () => (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle flex h-10 w-10 items-center justify-center rounded-full border border-border/30 text-copy-muted transition hover:border-border/60 hover:text-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 dark:border-white/15 dark:text-white dark:hover:border-white/35 dark:hover:text-white dark:focus-visible:ring-white/40 ${theme === 'dark' ? 'theme-toggle-active' : ''}`}
      aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );

  const renderLinks = (className: string) => (
    <ul className={className}>
      {LINKS.map((link) => {
        const isSectionLink = link.href.startsWith('/#');
        const isActive = !isSectionLink && (pathname === link.href || pathname.startsWith(link.href + '/'));

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-highlight ${
                isActive ? 'text-highlight' : 'text-copy-muted'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header
      className={`sticky top-0 z-40 border-b border-transparent transition-all duration-300 ${
        isScrolled
          ? 'border-border/20 bg-surface/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur dark:border-white/10 dark:bg-[rgba(2,6,23,0.92)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-copy-muted hover:text-highlight dark:hover:text-white">
          Dean Shabi
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {renderLinks('flex items-center gap-8')}
          <ThemeToggleButton />
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/30 text-copy-muted transition hover:text-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 dark:border-white/10 dark:hover:text-white dark:focus-visible:ring-white/40 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`md:hidden transition-all duration-300 ${
          mobileOpen
            ? 'max-h-96 border-t border-border/20 bg-surface/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur dark:border-white/10 dark:bg-canvas/90'
            : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container py-6">
          {renderLinks('flex flex-col gap-4')}
          <div className="mt-6 flex">
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
