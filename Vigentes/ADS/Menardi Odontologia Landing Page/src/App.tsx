import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import About from './components/About';
import Emergency from './components/Emergency';
import Structure from './components/Structure';
import WhyChoose from './components/WhyChoose';
import Transform from './components/Transform';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <Emergency />
      <Structure />
      <WhyChoose />
      <Transform />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
