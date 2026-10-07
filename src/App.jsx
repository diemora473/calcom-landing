import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';
import { Ecosystem } from './components/Ecosystem.jsx';
import { StickerShowcase } from './components/StickerShowcase.jsx';
import { Stats } from './components/Stats.jsx';
import { LeadCapture } from './components/LeadCapture.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  return (
    <>
      <Header />
      <main class="w-full pt-20 bg-surface">
        <div class="flex flex-col w-full">
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
