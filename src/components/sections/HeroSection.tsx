import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { PhonePair } from '@/components/common/PhonePair';
import { Reveal } from '@/components/common/Reveal';
import { VoiceWave } from '@/components/common/VoiceWave';
import { SECTION_IDS } from '@/constants/sections';

export function HeroSection() {
  return (
    <header className="bg-brand-soft pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-48" id={SECTION_IDS.top}>
      <Container className="grid min-w-0 items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <Reveal className="text-center lg:text-left">
          <span className="inline-flex max-w-full items-center rounded-full bg-brand-tint px-5 py-2.5 text-center text-[15px] font-semibold text-brand sm:px-6 sm:text-base">
            A세대를 위한 프리미엄 AI 음성 매칭 및 소셜 플랫폼
          </span>
          <h1 className="my-6 text-4xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-5xl lg:text-[58px]">
            마음을 잇다
            <br />
            인연을 잇다
            <br />
            <em className="not-italic text-brand">이음</em>
          </h1>
          <p className="mx-auto max-w-[540px] text-[19px] leading-relaxed text-body sm:text-[23px] lg:mx-0">
            글 대신 말로, 복잡한 절차 없이.
            <br />
            텍스트보다 음성에 익숙한 50세 이상의 싱글 A세대가 또래와 자연스럽게 연결되는 공간입니다.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button onClick={() => window.location.assign('/?view=tour')}>지금 시작하기</Button>
            <Button variant="outline" onClick={() => window.location.assign('/?view=features')}>
              서비스 소개
            </Button>
          </div>

          <VoiceWave
            className="mt-12 justify-center lg:justify-start"
            caption='"안녕하세요, 저는 산책과 등산을 좋아해요"'
          />
        </Reveal>

        <Reveal delay={0.15}>
          <PhonePair
            back={{ file: 'screen-1.webp', alt: '' }}
            front={{ file: 'screen-2.webp', alt: '이음 앱 홈 화면 - 오늘의 이상형 추천' }}
            priority
          />
        </Reveal>
      </Container>
    </header>
  );
}
