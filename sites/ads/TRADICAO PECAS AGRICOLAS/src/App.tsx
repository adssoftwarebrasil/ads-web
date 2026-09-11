import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
