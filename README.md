# EUM-WEB

이음(EUM) 공식 랜딩 페이지 — 50+ 싱글 A세대를 위한 음성 기반 데이팅 앱 소개 사이트.

앱 프론트엔드는 [UMC-Eum/UMC-Frontend](https://github.com/UMC-Eum/UMC-Frontend)에서 관리합니다.

## Tech Stack

- React 18 + TypeScript + Vite 6
- Tailwind CSS v4
- Framer Motion (스크롤 리빌 애니메이션)

## Getting Started

```bash
pnpm install
pnpm dev      # 개발 서버 (http://localhost:5173)
pnpm build    # 타입 체크 + 프로덕션 빌드
pnpm lint     # ESLint
```

## Structure

```
src/
├── components/
│   ├── common/     # Button, Section, PhoneImage 등 공통 UI
│   ├── layout/     # Navigation, Footer, ScrollTopButton
│   └── sections/   # Hero, Team, Features, Tour 등 페이지 섹션
├── constants/      # 섹션별 콘텐츠 데이터
├── hooks/          # useActiveSection, useScrolled 등
├── types/          # 도메인 타입
└── utils/          # cn, scroll, asset 헬퍼
```
