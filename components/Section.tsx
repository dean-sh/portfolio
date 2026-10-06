import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionLabelProps = {
  index?: string;
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <p className={cn('label flex items-center gap-2', className)}>
      {index && (
        <>
          <span className="tabular-nums">{index}</span>
          <span aria-hidden="true" className="text-signal/50">
            /
          </span>
        </>
      )}
      <span>{children}</span>
    </p>
  );
}

type SectionProps = {
  id?: string;
  index?: string;
  label?: ReactNode;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({
  id,
  index,
  label,
  children,
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn('hairline scroll-mt-16', className)}>
      <div className={cn('container py-24 md:py-32', innerClassName)}>
        {label && (
          <SectionLabel index={index} className="mb-12 md:mb-16">
            {label}
          </SectionLabel>
        )}
        {children}
      </div>
    </section>
  );
}
