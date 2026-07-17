import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { ScrollTopButton } from '@/components/layout/ScrollTopButton';
import { LegalPage } from '@/components/legal/LegalPage';
import { CtaSection } from '@/components/sections/CtaSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TourSections } from '@/components/sections/TourSections';
import { LEGAL_PAGE_KEYS, type LegalPageKey } from '@/constants/legal';

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get('page');
  const viewParam = searchParams.get('view');
  const legalPage = LEGAL_PAGE_KEYS.includes(pageParam as LegalPageKey) ? (pageParam as LegalPageKey) : null;

  return (
    <div className="min-h-screen overflow-x-hidden break-keep bg-white font-sans text-[18px] leading-relaxed text-body antialiased sm:text-[20px]">
      <Navigation />
      {legalPage ? (
        <LegalPage pageKey={legalPage} />
      ) : viewParam === 'team' ? (
        <main className="pt-[76px]"><TeamSection /></main>
      ) : viewParam === 'features' ? (
        <main className="pt-[76px]"><FeaturesSection /></main>
      ) : viewParam === 'how' ? (
        <main className="pt-[76px]"><StepsSection /></main>
      ) : viewParam === 'tour' ? (
        <main className="pt-[76px]"><TourSections /><CtaSection /></main>
      ) : <HeroSection />}
      <Footer />
      {!legalPage && <ScrollTopButton />}
    </div>
  );
}
