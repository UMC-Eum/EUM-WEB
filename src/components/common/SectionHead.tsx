import { cn } from '@/utils/cn';

interface SectionHeadProps {
  eyebrow: string;
  /** '\n'이 줄바꿈으로 렌더링된다. */
  title: string;
  lead?: string;
  align?: 'center' | 'left';
}

export function SectionHead({ eyebrow, title, lead, align = 'center' }: SectionHeadProps) {
  const centered = align === 'center';

  return (
    <div className={cn(centered && 'mx-auto max-w-[760px] text-center')}>
      <span className="mb-3 block text-[22px] font-semibold tracking-[-0.02em] text-brand">{eyebrow}</span>
      <h2 className="whitespace-pre-line text-3xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-body sm:text-2xl">{lead}</p>}
    </div>
  );
}
