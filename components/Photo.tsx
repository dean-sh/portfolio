import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Photo({
  src,
  sizes,
  priority,
  className,
}: {
  src: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl bg-muted', className)}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        quality={70}
        className="object-cover transition-transform duration-700 ease-spring group-hover:scale-[1.03] motion-reduce:transition-none"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-foreground/10" />
    </div>
  );
}
