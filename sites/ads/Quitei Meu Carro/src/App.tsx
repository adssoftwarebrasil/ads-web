import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import MultiStepForm from './components/formulario';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <MultiStepForm />
      <Services />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
