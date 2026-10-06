import { cn } from '@/lib/utils';

type ArrowProps = {
  direction?: 'right' | 'left';
  className?: string;
};

export function Arrow({ direction = 'right', className }: ArrowProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'inline-block shrink-0 align-[-0.125em]',
        direction === 'left' && 'rotate-180',
        className,
      )}
    >
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  );
}
