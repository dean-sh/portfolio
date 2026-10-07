import Link from 'next/link';
import { Arrow } from '@/components/Arrow';

export default function NotFound() {
  return (
    <div className="container py-32 md:py-48">
      <div className="prose-col space-y-6">
        <p className="label tabular-nums">404</p>
        <h1 className="text-display-lg">Page not found</h1>
        <p className="measure text-muted-foreground">
          There&apos;s nothing at this address. The work is on the home page.
        </p>
        <p className="font-mono text-sm">
          <Link href="/" className="link">
            <Arrow direction="left" className="mr-2" />
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
