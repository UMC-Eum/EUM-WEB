import type { Screenshot } from '@/types';
import { assetUrl } from '@/utils/assets';

interface PhoneImageProps {
  image: Screenshot;
  /** 첫 화면(히어로)처럼 즉시 보여야 하는 이미지에만 true */
  priority?: boolean;
}

export function PhoneImage({ image, priority = false }: PhoneImageProps) {
  return (
    <div className="mx-auto w-[236px] overflow-hidden rounded-[2.25rem] border-[6px] border-white bg-white shadow-phone sm:w-[290px]">
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
