import { useEffect, useState } from 'react';

/** 고정 내비게이션 높이를 감안한 활성 판정 오프셋 */
const ACTIVATION_OFFSET_PX = 120;

/**
 * 현재 스크롤 위치 기준으로 화면에 도달한 마지막 섹션의 id를 반환한다.
 * sectionIds는 문서 순서대로 정렬된 모듈 상수를 전달해야 한다.
 */
export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const threshold = window.scrollY + ACTIVATION_OFFSET_PX;
      let current: string | null = null;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= threshold) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [sectionIds]);

  return activeId;
}
