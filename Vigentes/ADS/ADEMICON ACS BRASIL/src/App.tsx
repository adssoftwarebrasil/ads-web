import Header from './components/Header';
import ServicesBanner from './components/ServicesBanner';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import RetirementInvestment from './components/RetirementInvestment';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import PartnerForm from './components/PartnerForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ServicesBanner />
      <Hero />
      <Services />
      <HowItWorks />
      <RetirementInvestment />
      <Testimonials />
      <About />
      <Contact />
      <PartnerForm />
      <FAQ />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
