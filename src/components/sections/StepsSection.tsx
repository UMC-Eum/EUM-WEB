import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionHead } from '@/components/common/SectionHead';
import { SECTION_IDS } from '@/constants/sections';
import { STEPS } from '@/constants/steps';
import type { Step } from '@/types';

export function StepsSection() {
  return (
    <Section id={SECTION_IDS.how} background="pink">
      <Reveal>
        <SectionHead eyebrow="이용 방법" title="단 3단계면 충분합니다" />
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-[480px] gap-6 lg:max-w-none lg:grid-cols-3">
        {STEPS.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <StepCard step={step} order={index + 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function StepCard({ step, order }: { step: Step; order: number }) {
  return (
    <article className="h-full rounded-3xl bg-white px-8 py-10 text-center shadow-card">
      <div className="mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand text-[22px] font-extrabold text-white">
        {order}
      </div>
      <h3 className="mb-2 text-[21px] font-bold text-ink">{step.title}</h3>
      <p className="text-base leading-relaxed text-muted">{step.description}</p>
    </article>
  );
}
