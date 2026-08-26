import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import RoutesSection from './components/RoutesSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import RouteLineSection from './components/RouteLineSection';
import EncomendasSection from './components/EncomendasSection';
import FrotaSection from './components/FrotaSection';
import SobreSection from './components/SobreSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <SearchSection />
        <RoutesSection />
        <BenefitsSection />
        <ServicesSection />
        <RouteLineSection />
        <EncomendasSection />
        <FrotaSection />
        <SobreSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
