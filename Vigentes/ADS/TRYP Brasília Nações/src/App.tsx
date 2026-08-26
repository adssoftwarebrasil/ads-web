import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import FeaturesSection from './components/FeaturesSection';
import LocationSection from './components/LocationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <FeaturesSection />
        <LocationSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
