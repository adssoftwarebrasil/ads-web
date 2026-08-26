import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Products from './components/Products';
import Differentials from './components/Differentials';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Products />
      <Differentials />
      <About />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
