import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import DifferentialsSection from './components/DifferentialsSection';
import GallerySection from './components/GallerySection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import ContactFormSection from './components/ContactFormSection';
import InstagramSection from './components/InstagramSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <DifferentialsSection />
        <InstagramSection />
        <GallerySection />
        <ProcessSection />
        <CTASection />
        <ContactSection />
        <ContactFormSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
