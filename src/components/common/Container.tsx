import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto max-w-[1160px] px-6 sm:px-8', className)}>{children}</div>;
}
