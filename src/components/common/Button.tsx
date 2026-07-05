import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'outline' | 'inverted';
type ButtonSize = 'sm' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white shadow-button hover:bg-brand-strong',
  outline: 'border border-brand bg-white text-brand hover:bg-brand-soft',
  inverted: 'bg-white text-brand hover:bg-brand-soft',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-7 py-3 text-base',
  lg: 'px-10 py-4 text-lg sm:px-12 sm:py-5 sm:text-xl',
};

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant = 'primary', size = 'lg', className, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-bold transition hover:-translate-y-0.5',
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      type={type}
      {...props}
    />
  );
}
