import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { ScrollTopButton } from '@/components/layout/ScrollTopButton';
import { CtaSection } from '@/components/sections/CtaSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TourSections } from '@/components/sections/TourSections';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-[18px] leading-relaxed text-body antialiased sm:text-[20px]">
      <Navigation />
      <HeroSection />
      <main>
        <TeamSection />
        <FeaturesSection />
        <StepsSection />
        <TourSections />
        <CtaSection />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
