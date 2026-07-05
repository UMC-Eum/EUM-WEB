import { useEffect, useState } from 'react';
import { HeartIcon } from '@/components/common/HeartIcon';
import { NAV_ITEMS, NAV_SECTION_IDS } from '@/constants/nav';
import { SECTION_IDS } from '@/constants/sections';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/utils/cn';
import { scrollToSection } from '@/utils/scroll';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(NAV_SECTION_IDS);
  const scrolled = useScrolled();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const navigate = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur-xl transition-shadow',
        scrolled && 'shadow-[0_2px_20px_rgba(32,32,32,0.06)]',
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between px-6 sm:px-8">
        <button
          className={cn('flex items-center gap-2.5 text-[26px] font-extrabold tracking-[-0.02em] text-brand focus-visible:rounded-md', focusRing)}
          type="button"
          aria-label="이음 홈"
          onClick={() => navigate(SECTION_IDS.top)}
        >
          <HeartIcon className="h-[30px] w-[30px]" />
          이음
        </button>

        <div
          id="site-nav"
          className={cn(
            'absolute inset-x-0 top-[76px] flex-col gap-5 border-b border-line bg-white px-8 py-6',
            'lg:static lg:flex lg:flex-row lg:border-0 lg:bg-transparent lg:p-0',
            isOpen ? 'flex' : 'hidden',
          )}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.sectionId}
              className={cn(
                'text-left text-[17px] font-semibold transition-colors hover:text-brand',
                activeId === item.sectionId ? 'text-brand' : 'text-body',
              )}
              type="button"
              onClick={() => navigate(item.sectionId)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={cn(
            'hidden rounded-full bg-brand px-7 py-3 text-base font-bold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-brand-strong lg:inline-flex',
            focusRing,
          )}
          type="button"
          onClick={() => navigate(SECTION_IDS.download)}
        >
          Coming Soon
        </button>

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
