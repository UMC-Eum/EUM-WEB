import { useEffect } from 'react';
import { LEGAL_PAGES, type LegalPageKey } from '@/constants/legal';

export function LegalPage({ pageKey }: { pageKey: LegalPageKey }) {
  const page = LEGAL_PAGES[pageKey];

  useEffect(() => {
    document.title = `${page.title} | 이음`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
  }, [page]);

  return (
    <main
      className="legal-page mx-auto min-h-[70vh] max-w-[760px] px-5 pb-20 pt-32 sm:pt-36"
      dangerouslySetInnerHTML={{ __html: page.html }}
    />
  );
}
