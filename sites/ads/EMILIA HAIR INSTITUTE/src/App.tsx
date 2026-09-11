import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Brands />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
