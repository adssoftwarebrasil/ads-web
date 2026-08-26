import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';
import Differentials from './components/Differentials';
import About from './components/About';
import Locations from './components/Locations';
import ServiceArea from './components/ServiceArea';
import Instagram from './components/Instagram';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Brands />
      <Products />
      <Differentials />
      <About />
      <Locations />
      <ServiceArea />
      <Instagram />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
