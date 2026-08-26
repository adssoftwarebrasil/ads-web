import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Contact />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
