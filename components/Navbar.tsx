'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const renderLinks = (className: string) => (
    <ul className={className}>
      {LINKS.map((link) => {
        const isSectionLink = link.href.startsWith('/#');
        const isActive = !isSectionLink && (pathname === link.href || pathname.startsWith(link.href + '/'));

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive ? 'text-white' : 'text-copy-muted'
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
        isScrolled ? 'border-white/10 bg-[rgba(2,6,23,0.92)] backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-copy-muted hover:text-white">
          Dean Shabi
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {renderLinks('flex items-center gap-8')}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-copy-muted transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:hidden"
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
        className={`md:hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 border-t border-white/10 bg-canvas/90 backdrop-blur' : 'max-h-0 overflow-hidden'}`}
      >
        <div className="container py-6">
          {renderLinks('flex flex-col gap-4')}
        </div>
      </nav>
    </header>
  );
}
