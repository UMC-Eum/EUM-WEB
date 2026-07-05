import { useEffect, useState } from 'react';

/** 세로 스크롤이 threshold를 넘었는지 여부를 반환한다. */
export function useScrolled(thresholdPx = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > thresholdPx);

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [thresholdPx]);

  return scrolled;
}
