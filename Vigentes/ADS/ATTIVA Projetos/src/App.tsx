import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import Process from './components/Process';
import CTASection from './components/CTASection';
import ServiceArea from './components/ServiceArea';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Differentials />
      <Process />
      <CTASection />
      <ServiceArea />
      <InstagramFeed />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
