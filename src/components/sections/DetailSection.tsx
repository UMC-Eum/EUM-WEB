import { Badge } from '@/components/common/Badge';
import { PhoneImage } from '@/components/common/PhoneImage';
import { PhonePair } from '@/components/common/PhonePair';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionHead } from '@/components/common/SectionHead';
import type { NumberedItem, TourSectionContent, TourVisual } from '@/types';
import { cn } from '@/utils/cn';

interface DetailSectionProps {
  content: TourSectionContent;
}

/** 텍스트 + 폰 목업 2단 구성의 앱 소개 섹션 */
export function DetailSection({ content }: DetailSectionProps) {
  const { id, eyebrow, title, lead, visual, items = [], flipped = false, background = 'white' } = content;

  return (
    <Section id={id} background={background}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <Reveal className={cn(flipped && 'lg:order-2')}>
          <SectionHead align="left" eyebrow={eyebrow} title={title} lead={lead} />
          {items.length > 0 && (
            <div className="mt-9 flex flex-col gap-6">
              {items.map((item) => (
                <DetailItem key={item.badge} item={item} />
              ))}
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1} className={cn('flex justify-center', flipped && 'lg:order-1')}>
          <DetailVisual visual={visual} />
        </Reveal>
      </div>
    </Section>
  );
}

function DetailItem({ item }: { item: NumberedItem }) {
  return (
    <div className="flex items-start gap-4">
      <Badge className="mt-1 shrink-0">{item.badge}</Badge>
      <div>
        <h4 className="mb-1 text-xl font-bold text-ink">{item.title}</h4>
        <p className="text-[17px] leading-relaxed text-muted">{item.description}</p>
      </div>
    </div>
  );
}

function DetailVisual({ visual }: { visual: TourVisual }) {
  if (visual.kind === 'pair') return <PhonePair back={visual.back} front={visual.front} />;
  return <PhoneImage image={visual.image} />;
}
