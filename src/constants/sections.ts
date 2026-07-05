export const SECTION_IDS = {
  top: 'top',
  team: 'team',
  features: 'features',
  how: 'how',
  tour: 'tour',
  profile: 'detail-profile',
  home: 'detail-home',
  chat: 'detail-chat',
  heart: 'detail-heart',
  club: 'club',
  download: 'download',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
