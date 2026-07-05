import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionHead } from '@/components/common/SectionHead';
import { FEATURES } from '@/constants/features';
import { SECTION_IDS } from '@/constants/sections';
import type { Feature } from '@/types';

export function FeaturesSection() {
  return (
    <Section id={SECTION_IDS.features}>
      <Reveal>
        <SectionHead eyebrow="핵심 기능" title="이음은 이렇게 다릅니다" />
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.08}>
            <FeatureCard feature={feature} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="h-full rounded-3xl bg-white p-7 shadow-card transition hover:-translate-y-1">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-tint text-3xl">{feature.icon}</div>
      <h3 className="mb-2 text-[22px] font-bold text-ink">{feature.title}</h3>
      <p className="text-base leading-relaxed text-muted">{feature.description}</p>
    </article>
  );
}
