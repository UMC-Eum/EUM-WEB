import { cn } from '@/utils/cn';

const BAR_HEIGHTS = ['h-4', 'h-9', 'h-11', 'h-7', 'h-4', 'h-9', 'h-11', 'h-7', 'h-4', 'h-9', 'h-11', 'h-7'];
const STAGGER_SECONDS = 0.1;

interface VoiceWaveProps {
  caption: string;
  className?: string;
}

/** 음성 파형을 흉내 낸 장식용 웨이브 바. 모바일에서는 캡션이 바 아래 줄로 내려간다 */
export function VoiceWave({ caption, className }: VoiceWaveProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)} aria-hidden="true">
      {BAR_HEIGHTS.map((height, index) => (
        <span
          key={index}
          className={cn('w-1.5 rounded-full bg-brand motion-safe:animate-wave', height)}
          style={{ animationDelay: `${index * STAGGER_SECONDS}s` }}
        />
      ))}
      <span className="mt-1 basis-full text-center text-sm font-medium text-faint sm:ml-3 sm:mt-0 sm:basis-auto sm:text-left sm:text-base">
        {caption}
      </span>
    </div>
  );
}
