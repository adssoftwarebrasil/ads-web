import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import SEOContent from './components/SEOContent';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ScarcitySection from './components/ScarcitySection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="min-h-screen w-full relative overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <div className="section-below-fold">
            <Services />
          </div>
          <div className="section-below-fold">
            <Gallery />
          </div>
          <div className="section-below-fold">
            <Benefits />
          </div>
          <div className="section-below-fold">
            <SEOContent />
          </div>
          <div className="section-below-fold">
            <Reviews />
          </div>
          <div className="section-below-fold">
            <FAQ />
          </div>
          <div className="section-below-fold">
            <ScarcitySection />
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
