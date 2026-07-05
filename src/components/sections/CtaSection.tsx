import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SECTION_IDS } from '@/constants/sections';

export function CtaSection() {
  return (
    <Section id={SECTION_IDS.download}>
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-center text-white sm:px-10 lg:py-[88px]">
          <h2 className="text-3xl font-bold leading-snug tracking-[-0.02em] sm:text-4xl lg:text-[46px]">
            목소리를 잇다, 이음
          </h2>
          <p className="mb-10 mt-4 text-lg opacity-95 sm:text-[21px]">
            따뜻한 인연이 목소리로 시작됩니다. 지금 이음과 함께하세요.
          </p>
          <Button variant="inverted">Coming Soon</Button>
        </div>
      </Reveal>
    </Section>
  );
}
