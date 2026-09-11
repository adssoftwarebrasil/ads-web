import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Accommodations from './components/Accommodations';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Accommodations />
      <Stats />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
