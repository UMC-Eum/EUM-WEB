import { Badge } from '@/components/common/Badge';
import { PhoneImage } from '@/components/common/PhoneImage';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionHead } from '@/components/common/SectionHead';
import { PROFILE_SHOWCASE } from '@/constants/tour';
import type { ShowcaseStep } from '@/types';

/** 음성 녹음 → AI 분석 → 프로필 완성 3단계 쇼케이스 */
export function ProfileShowcaseSection() {
  const { id, eyebrow, title, lead, steps } = PROFILE_SHOWCASE;

  return (
    <Section id={id} background="pink">
      <Reveal>
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-[320px] gap-10 lg:max-w-[1020px] lg:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.1}>
            <ShowcaseStepFigure step={step} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ShowcaseStepFigure({ step }: { step: ShowcaseStep }) {
  return (
    <figure className="text-center">
      <PhoneImage image={step.image} />
      <figcaption className="mt-5 text-[17px] leading-relaxed text-muted">
        <Badge className="mb-2">{step.badge}</Badge>
        <b className="block text-[19px] text-ink">{step.title}</b>
        {step.description}
      </figcaption>
    </figure>
  );
}
