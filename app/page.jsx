import { Header } from '@/components/Header.jsx';
import { Hero } from '@/components/Hero.jsx';
import { HowItWorks } from '@/components/HowItWorks.jsx';
import { Ecosystem } from '@/components/Ecosystem.jsx';
import { StickerShowcase } from '@/components/StickerShowcase.jsx';
import { Stats } from '@/components/Stats.jsx';
import { LeadCapture } from '@/components/LeadCapture.jsx';
import { Footer } from '@/components/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <Hero />
          <HowItWorks />
          <Ecosystem />
          <StickerShowcase />
          <Stats />
          <LeadCapture />
        </div>
      </main>
      <Footer />
    </>
  );
}
