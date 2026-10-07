import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Photo({
  src,
  alt = '',
  sizes,
  priority,
  className,
}: {
  src: string;
  // Empty by default. Cards and the next-study link are named by their text, so their photos stay decorative.
  alt?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl bg-muted', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={60}
        className="object-cover transition-transform duration-700 ease-spring group-hover:scale-[1.03] motion-reduce:transition-none"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-foreground/10" />
    </div>
  );
}
