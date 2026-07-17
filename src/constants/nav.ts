import type { NavItem } from '../types';
import { SECTION_IDS } from './sections';

export const NAV_ITEMS: NavItem[] = [
  { label: '팀 소개', sectionId: SECTION_IDS.team },
  { label: '핵심 기능', sectionId: SECTION_IDS.features },
  { label: '이용 방법', sectionId: SECTION_IDS.how },
  { label: '앱 둘러보기', sectionId: SECTION_IDS.tour },
];
