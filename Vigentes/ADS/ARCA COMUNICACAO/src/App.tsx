import Header from './components/Header';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import DifferentialsSection from './components/DifferentialsSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import PortfolioGallery from './components/PortfolioGallery';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[rgb(254,254,254)]">
      <Header />
      <Hero />
      

      <ServicesSection />
      <PortfolioGallery />
      <ProcessSection />
      <TestimonialsSection />
      <ContactForm />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
export default App;
