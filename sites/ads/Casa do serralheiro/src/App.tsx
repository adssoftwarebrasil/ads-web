import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import QuoteCTA from './components/QuoteCTA';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <QuoteCTA />
      <Testimonials />
      <ContactCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
