const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dean-shabi/' },
  { label: 'GitHub', href: 'https://github.com/dean-sh' },
  { label: 'Email', href: 'mailto:hello@deanshabi.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-surface/90 dark:border-white/10 dark:bg-[rgba(2,6,23,0.85)]">
      <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-copy-muted">
          <p className="font-semibold text-highlight dark:text-white">Dean Shabi</p>
          <p>AI founder & senior data scientist for modern energy markets.</p>
          <p>&copy; {year} All rights reserved.</p>
        </div>
        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-4 text-sm text-copy-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition hover:text-highlight dark:hover:text-white"
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
