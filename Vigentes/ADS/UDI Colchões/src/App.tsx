import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import ProductsSection from './components/ProductsSection';
import CTABanner from './components/CTABanner';
import AdvantagesSection from './components/AdvantagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <ProductsSection />
        <CTABanner />
        <AdvantagesSection />
        <TestimonialsSection />
        <InstagramSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
