import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import QuoteCTA from './components/QuoteCTA';
import Benefits from './components/Benefits';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <QuoteCTA />
      <Benefits />
      <Location />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
