import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import InstagramSection from './sections/InstagramSection';
import DifferentialsSection from './sections/DifferentialsSection';
import CTABanner from './sections/CTABanner';
import LocationSection from './sections/LocationSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <InstagramSection />
        <DifferentialsSection />
        <CTABanner />
        <LocationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
