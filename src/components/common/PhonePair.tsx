import type { Screenshot } from '@/types';
import { PhoneImage } from './PhoneImage';

interface PhonePairProps {
  back: Screenshot;
  front: Screenshot;
  priority?: boolean;
}

export function PhonePair({ back, front, priority }: PhonePairProps) {
  return (
    <div className="flex items-start justify-center">
      <div className="-rotate-[5deg] translate-y-8">
        <PhoneImage image={back} priority={priority} />
      </div>
      <div className="relative z-10 -ml-14">
        <PhoneImage image={front} priority={priority} />
      </div>
    </div>
  );
}
