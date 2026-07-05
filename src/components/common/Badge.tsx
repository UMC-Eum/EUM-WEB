import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <span className={cn('inline-flex rounded-full bg-brand-tint px-4 py-1.5 text-[15px] font-extrabold text-brand', className)}>
      {children}
    </span>
  );
}
