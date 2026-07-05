import type { ShowcaseStep, TourSectionContent } from '../types';
import { SECTION_IDS } from './sections';

export const AGE_GATE_SECTION: TourSectionContent = {
  id: SECTION_IDS.tour,
  eyebrow: '가입 연령',
  title: '오직 50세 이상만,\n이음에서 편안하게 만나세요',
  lead: '이음은 만 50세 이상만 가입할 수 있어요. 더 이상 내 또래를 만나기 위해 어렵게 필터링을 설정할 필요 없이, 이음에서 편하게 만나실 수 있습니다.',
  visual: {
    kind: 'pair',
    back: { file: 'screen-12.webp', alt: '나이 입력 화면 - 만 나이 선택' },
    front: { file: 'screen-13.webp', alt: '만 50세 미만 가입 제한 안내' },
  },
  items: [
    {
      badge: '인증',
      title: '나이 제한',
      description: '카카오톡 인증으로 만 50세 미만은 이음에 가입할 수 없습니다.',
    },
  ],
};

export const PROFILE_SHOWCASE = {
  id: SECTION_IDS.profile,
  eyebrow: '프로필 생성',
  title: '목소리로 프로필 생성부터\n이상형 녹음까지 한번에!',
  lead: '원하는 이상형을 자유롭게 말해주세요. AI가 대화 속 키워드를 분석해 나와 가장 잘 맞는 인연들을 추천해줍니다.',
  steps: [
    {
      image: { file: 'screen-14.webp', alt: '음성 녹음 화면' },
      badge: '01',
      title: '음성 녹음',
      description: '버튼 한 번으로 내 이야기를 편하게 녹음해요.',
    },
    {
      image: { file: 'screen-15.webp', alt: 'AI 분석 화면' },
      badge: '02',
      title: 'AI 분석',
      description: '말투와 내용 속 취향·가치관을 AI가 정리해요.',
    },
    {
      image: { file: 'screen-16.webp', alt: '프로필 완성 화면' },
      badge: '03',
      title: '프로필 완성',
      description: '나를 잘 보여주는 키워드로 프로필이 완성돼요.',
    },
  ] satisfies ShowcaseStep[],
};

export const TOUR_DETAIL_SECTIONS: TourSectionContent[] = [
  {
    id: SECTION_IDS.home,
    eyebrow: '메인 홈',
    title: 'A세대에게 더 쉬운 홈 화면!',
    lead: 'A세대 사용자의 인지 부담을 줄이기 위해 UI를 단순화하고 주요 기능을 전면에 배치해, 누구나 쉽게 이용할 수 있도록 구성했습니다.',
    visual: {
      kind: 'single',
      image: { file: 'screen-2.webp', alt: '이음 홈 화면 - 추천 프로필과 이상형 녹음 버튼' },
    },
    items: [
      {
        badge: '01',
        title: '추천 프로필',
        description: 'AI가 목소리에 담긴 취향까지 꼼꼼히 분석해, 대화가 잘 통할 인연들을 홈에 바로 보여드려요.',
      },
      {
        badge: '02',
        title: '간단한 선호 표시',
        description: '프로필 하단에서 선호를 표시해보세요. 바로 대화를 시작하거나 마음을 전할 수 있어요.',
      },
      {
        badge: '03',
        title: '이상형 녹음',
        description: '찾으시는 이상형이 바뀌셨나요? 버튼을 눌러 언제든 바로 다시 녹음할 수 있어요.',
      },
    ],
  },
  {
    id: SECTION_IDS.chat,
    eyebrow: '대화',
    title: '문자 대신 목소리로 전해보세요',
    lead: '눈은 편안하게, 마음은 더 가까워집니다. 문자 대신 음성 메시지로 소통하며, 마치 함께 있는 것처럼 따뜻한 대화를 나눌 수 있어요.',
    visual: {
      kind: 'pair',
      back: { file: 'screen-17.webp', alt: '대화 목록 - 현재 활동중인 사람들' },
      front: { file: 'screen-18.webp', alt: '음성 메시지 채팅 화면' },
    },
    flipped: true,
    background: 'gray',
  },
  {
    id: SECTION_IDS.heart,
    eyebrow: '마음',
    title: '주고받은 마음을\n한 곳에서 확인하세요',
    lead: '내가 전한 마음과 나를 향한 마음을 확인할 수 있는 공간입니다. 프로필에서는 상대의 정보를 한눈에 볼 수 있어요.',
    visual: {
      kind: 'single',
      image: { file: 'screen-19.webp', alt: '마음 화면 - 받은 마음과 보낸 마음' },
    },
    items: [
      {
        badge: '01',
        title: '키워드 소개',
        description: '상대방의 관심사와 이상형을 키워드로 확인할 수 있어요.',
      },
      {
        badge: '02',
        title: '공통 관심사',
        description: '나와 상대방의 공통 관심사를 한눈에 보여줘요.',
      },
    ],
  },
  {
    id: SECTION_IDS.club,
    eyebrow: '동호회',
    title: '동호회로 이어지는 인연',
    lead: '이상형 찾기를 넘어, 싱글 A세대의 활발한 사회 활동을 위한 동호회 기능을 담았습니다. 게시판·사진첩·채팅으로 함께하고, 정기 모임으로 직접 만나요.',
    visual: {
      kind: 'pair',
      back: { file: 'screen-20.webp', alt: '동호회 탭 - 추천 카테고리와 맞춤 동호회' },
      front: { file: 'screen-21.webp', alt: '동호회 상세 - 정기모임 참석하기' },
    },
    items: [
      {
        badge: '01',
        title: '카테고리 기능',
        description: '동호회를 아이콘 카테고리로 분류해 더 편하게 찾을 수 있어요.',
      },
      {
        badge: '02',
        title: '동호회 추천',
        description: '사용자에게 맞는 알고리즘으로 잘 맞을 것 같은 동호회를 추천해줘요.',
      },
      {
        badge: '03',
        title: '정기 모임',
        description: '동호회 내 정기 모임으로 자연스러운 만남을 가질 수 있어요.',
      },
    ],
    flipped: true,
    background: 'pink',
  },
];
