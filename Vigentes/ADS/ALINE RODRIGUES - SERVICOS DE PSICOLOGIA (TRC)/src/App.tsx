import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Stats from './components/Stats';
import VideoSection from './components/VideoSection';
import WhyStuck from './components/WhyStuck';
import WhatIsTRC from './components/WhatIsTRC';
import Outcomes from './components/Outcomes';
import Modules from './components/Modules';
import ForYou from './components/ForYou';
import Difference from './components/Difference';
import About from './components/About';
import WhyWorks from './components/WhyWorks';
import CommonDoubts from './components/CommonDoubts';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body bg-brand-beige text-brand-brown overflow-x-hidden">
      <ScrollProgress />
      <Hero />
      <Stats />
      <VideoSection />
      <WhyStuck />
      <WhatIsTRC />
      <Outcomes />
      <Modules />
      <ForYou />
      <Difference />
      <About />
      <WhyWorks />
      <CommonDoubts />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
