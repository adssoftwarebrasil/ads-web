import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Vehicles from './components/Vehicles';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Vehicles />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
