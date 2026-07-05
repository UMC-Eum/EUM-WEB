import type { SectionId } from '../constants/sections';

export interface NavItem {
  label: string;
  sectionId: SectionId;
}

export interface TeamMember {
  photo: string;
  name: string;
  role: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface NumberedItem {
  badge: string;
  title: string;
  description: string;
}

export interface Screenshot {
  /** public/assets 안의 파일 이름 */
  file: string;
  alt: string;
}

export type SectionBackground = 'white' | 'pink' | 'gray';

export type TourVisual =
  | { kind: 'single'; image: Screenshot }
  | { kind: 'pair'; back: Screenshot; front: Screenshot };

export interface TourSectionContent {
  id: SectionId;
  eyebrow: string;
  /** '\n'으로 줄바꿈 위치를 표시 */
  title: string;
  lead: string;
  visual: TourVisual;
  items?: NumberedItem[];
  flipped?: boolean;
  background?: SectionBackground;
}

export interface ShowcaseStep extends NumberedItem {
  image: Screenshot;
}
