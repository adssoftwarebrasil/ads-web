import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import CTABanner from './components/CTABanner';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <BenefitsSection />
      <ServicesSection />
      <CTABanner />
      <InstagramSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
