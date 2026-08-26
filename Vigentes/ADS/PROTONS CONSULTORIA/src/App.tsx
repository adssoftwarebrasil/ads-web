import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Problems from './components/Problems';
import Services from './components/Services';
import WhyProtons from './components/WhyProtons';
import About from './components/About';
import FAQ from './components/FAQ';
import Instagram from './components/Instagram';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <Problems />
      <Services />
      <WhyProtons />
      <About />
      <FAQ />
      <Instagram />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
