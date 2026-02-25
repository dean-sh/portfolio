import { Separator } from '@/components/ui/separator';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dean-shabi/' },
  { label: 'GitHub', href: 'https://github.com/dean-sh' },
  { label: 'Email', href: 'mailto:deanshabi@gmail.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <Separator />
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>&copy; {year} Dean Shabi</p>
        <nav aria-label="Social links">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
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
