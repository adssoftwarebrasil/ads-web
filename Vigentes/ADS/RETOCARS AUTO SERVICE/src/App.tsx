import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Process from './components/Process';
import FacilityGallery from './components/FacilityGallery';
import CTASection from './components/CTASection';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Gallery />
        <About />
        <Process />
        <FacilityGallery />
        <CTASection />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
