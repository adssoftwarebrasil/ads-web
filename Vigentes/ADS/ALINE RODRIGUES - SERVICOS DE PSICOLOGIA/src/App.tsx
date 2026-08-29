import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Process from './components/Process';
import ForWho from './components/ForWho';
import Instagram from './components/Instagram';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Differentials />
      <Process />
      <ForWho />
      <Instagram />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
