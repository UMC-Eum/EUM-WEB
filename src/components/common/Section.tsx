import type { ReactNode } from 'react';
import type { SectionBackground } from '@/types';
import { cn } from '@/utils/cn';
import { Container } from './Container';

const BACKGROUND_CLASSES: Record<SectionBackground, string> = {
  white: 'bg-white',
  pink: 'bg-brand-soft',
  gray: 'bg-cloud',
};

interface SectionProps {
  id: string;
  background?: SectionBackground;
  className?: string;
  children: ReactNode;
}

export function Section({ id, background = 'white', className, children }: SectionProps) {
  return (
    <section className={cn('py-20 lg:py-28', BACKGROUND_CLASSES[background], className)} id={id}>
      <Container>{children}</Container>
    </section>
  );
}
