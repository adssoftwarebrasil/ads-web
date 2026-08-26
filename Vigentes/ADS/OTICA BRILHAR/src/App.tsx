import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Promotions from './components/Promotions';
import Stores from './components/Stores';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Testimonials />
      <Promotions />
      <Stores />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
