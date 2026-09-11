import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Promotions from './components/Promotions';
import Reviews from './components/Reviews';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Locations />
      <Services />
      <Products />
      <Promotions />
      <Reviews />

      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
