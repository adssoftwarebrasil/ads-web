import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Publications from './components/Publications';
import Testimonials from './components/Testimonials';
import Symptoms from './components/Symptoms';
import Space from './components/Space';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Publications />
      <Testimonials />
      <Symptoms />
      <Space />
      <Contact />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
