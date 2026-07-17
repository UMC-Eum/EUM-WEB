import { useEffect, useState } from 'react';
import { HeartIcon } from '@/components/common/HeartIcon';
import { LEGAL_PAGES, LEGAL_PAGE_KEYS } from '@/constants/legal';
import { NAV_ITEMS } from '@/constants/nav';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/utils/cn';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = new URLSearchParams(window.location.search);
  const activeView = searchParams.get('view');
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const activePage = LEGAL_PAGE_KEYS.find((pageKey) => pathname === `/${pageKey}`) ?? searchParams.get('page');
  const scrolled = useScrolled();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur-xl transition-shadow',
        scrolled && 'shadow-[0_2px_20px_rgba(32,32,32,0.06)]',
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between px-6 sm:px-8">
        <a
          className={cn('flex items-center gap-2.5 text-[26px] font-extrabold tracking-[-0.02em] text-brand focus-visible:rounded-md', focusRing)}
          aria-label="이음 홈"
          href="/"
        >
          <HeartIcon className="h-[30px] w-[30px]" />
          이음
        </a>

        <div
          id="site-nav"
          className={cn(
            'absolute inset-x-0 top-[76px] flex-col gap-5 border-b border-line bg-white px-8 py-6',
            'lg:static lg:flex lg:flex-row lg:border-0 lg:bg-transparent lg:p-0',
            isOpen ? 'flex' : 'hidden',
          )}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.sectionId}
              className={cn(
                'text-left text-[17px] font-semibold transition-colors hover:text-brand',
                activeView === item.sectionId ? 'text-brand' : 'text-body',
              )}
              href={`/?view=${item.sectionId}`}
              aria-current={activeView === item.sectionId ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 border-t border-line pt-5 lg:hidden">
            <span className="text-sm font-bold text-faint">고객 지원 및 이용정책</span>
            {LEGAL_PAGE_KEYS.map((pageKey) => (
              <a
                key={pageKey}
                className={cn(
                  'text-left text-[16px] font-semibold transition-colors hover:text-brand',
                  activePage === pageKey ? 'text-brand' : 'text-body',
                )}
                href={`/${pageKey}`}
                aria-current={activePage === pageKey ? 'page' : undefined}
              >
                {LEGAL_PAGES[pageKey].title}
              </a>
            ))}
          </div>
        </div>

        <a
          className={cn(
            'hidden rounded-full bg-brand px-7 py-3 text-base font-bold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-brand-strong lg:inline-flex',
            focusRing,
          )}
          href="/?view=tour"
        >
          Coming Soon
        </a>

        <button
          className={cn('text-[28px] text-ink focus-visible:rounded-md lg:hidden', focusRing)}
          type="button"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
