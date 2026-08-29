import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CredibilityBar from './components/CredibilityBar';
import ServicesSection from './components/ServicesSection';
import AutoPecasSection from './components/AutoPecasSection';
import AboutSection from './components/AboutSection';
import DiferenciaisSection from './components/DiferenciaisSection';
import LocationSection from './components/LocationSection';
import InstagramSection from './components/InstagramSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <CredibilityBar />
      <ServicesSection />
      <AutoPecasSection />
      <AboutSection />
      <DiferenciaisSection />
      <InstagramSection />
      <LocationSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
