import { LEGAL_PAGES, type LegalPageKey } from '@/constants/legal';

export function LegalPage({ pageKey }: { pageKey: LegalPageKey }) {
  const page = LEGAL_PAGES[pageKey];

  return (
    <main className="mx-auto min-h-[70vh] max-w-[880px] px-6 pb-20 pt-32 sm:px-8 sm:pt-36">
      <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">{page.title}</h1>

      {page.intro && (
        <div className="mt-8 space-y-3 text-base leading-8 text-muted sm:text-[17px]">
          {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      )}

      <div className="mt-10">
        {page.sections.map((section) => (
          <section className={section.major ? 'mt-14 first:mt-0' : 'mt-9'} key={section.title}>
            {section.major ? (
              <h2 className="border-b border-line pb-4 text-xl font-extrabold text-ink sm:text-2xl">{section.title}</h2>
            ) : (
              <h2 className="text-lg font-bold text-ink sm:text-xl">{section.title}</h2>
            )}

            {section.paragraphs && (
              <div className="mt-3 space-y-3 text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}

            {section.items && (
              <ol className="mt-3 list-decimal space-y-2 pl-6 text-[15px] leading-7 text-muted marker:text-faint sm:text-base sm:leading-8">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            )}

            {section.note && (
              <p className="mt-4 rounded-xl bg-cloud px-5 py-4 text-sm leading-6 text-muted">※ {section.note}</p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
