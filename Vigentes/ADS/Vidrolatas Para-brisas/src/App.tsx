import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DifferentialsSection from './components/DifferentialsSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ContactFormSection from './components/ContactFormSection';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WhatsAppModal from './components/WhatsAppModal';
import { WhatsAppModalProvider } from './context/WhatsAppModalContext';

function App() {
  return (
    <WhatsAppModalProvider>
      <div className="min-h-screen bg-[#e4eef8]">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <DifferentialsSection />
          <GallerySection />
          <AboutSection />
          <LocationSection />
          <ContactFormSection />
          <BrandsSection />
        </main>
        <Footer />
        <WhatsAppButton />
        <WhatsAppModal />
      </div>
    </WhatsAppModalProvider>
  );
}

export default App;
