import { AGE_GATE_SECTION, TOUR_DETAIL_SECTIONS } from '@/constants/tour';
import { DetailSection } from './DetailSection';
import { ProfileShowcaseSection } from './ProfileShowcaseSection';

/** 앱 둘러보기: 가입 연령 → 프로필 생성 → 홈/대화/마음/동호회 */
export function TourSections() {
  return (
    <>
      <DetailSection content={AGE_GATE_SECTION} />
      <ProfileShowcaseSection />
      {TOUR_DETAIL_SECTIONS.map((content) => (
        <DetailSection key={content.id} content={content} />
      ))}
    </>
  );
}
