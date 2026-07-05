import type { Screenshot } from '@/types';
import { assetUrl } from '@/utils/assets';
import { cn } from '@/utils/cn';

type PhoneSize = 'single' | 'pair';

/** pair는 두 대가 겹쳐 놓이므로 모바일에서 더 작게 렌더링해 화면을 넘지 않게 한다 */
const SIZE_CLASSES: Record<PhoneSize, string> = {
  single: 'w-[236px] sm:w-[290px]',
  pair: 'w-[160px] sm:w-[236px] lg:w-[290px]',
};

interface PhoneImageProps {
  image: Screenshot;
  size?: PhoneSize;
  /** 첫 화면(히어로)처럼 즉시 보여야 하는 이미지에만 true */
  priority?: boolean;
}

export function PhoneImage({ image, size = 'single', priority = false }: PhoneImageProps) {
  return (
    <div
      className={cn(
        'mx-auto overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-phone sm:rounded-[2.25rem] sm:border-[6px]',
        SIZE_CLASSES[size],
      )}
    >
      <img
        className="block w-full"
        src={assetUrl(image.file)}
        alt={image.alt}
        aria-hidden={image.alt === '' || undefined}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
