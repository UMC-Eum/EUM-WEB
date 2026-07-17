import { CONTACT_EMAIL } from '@/constants/contact';
import { LEGAL_PAGES, LEGAL_PAGE_KEYS } from '@/constants/legal';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

export function Footer() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <footer className="mt-10 border-t border-line py-12 lg:py-16">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-start justify-between gap-8 px-6 sm:px-8">
        <div>
          <b className="text-2xl font-extrabold text-brand">이음</b>
          <p className="mt-2 text-[15px] leading-relaxed text-faint">
            50+ 싱글 A세대를 위한 음성 기반 데이팅 앱
            <br />
            하트는 따뜻한 마음을, 무한 기호는 끝없이 이어지는 인연을 의미합니다.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 sm:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-semibold text-muted" aria-label="고객 지원 및 이용정책">
            <a className="transition hover:text-brand" href="/">홈</a>
            {LEGAL_PAGE_KEYS.map((pageKey) => (
              <a className="transition hover:text-brand" href={`/${pageKey}`} key={pageKey}>
                {LEGAL_PAGES[pageKey].title}
              </a>
            ))}
          </nav>
          <button
            className="rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-muted transition hover:border-brand hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            type="button"
            onClick={() => copy(CONTACT_EMAIL)}
          >
            {copied ? '이메일 주소가 복사되었습니다' : `문의하기 · ${CONTACT_EMAIL}`}
          </button>
        </div>
        <div className="w-full text-[13.5px] leading-relaxed text-faint">
          이음(EUM) · 대표 안선우 · 사업자등록번호 712-11-03106
          <br />
          문의 {CONTACT_EMAIL}
          <br />
          © 2026 이음. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
