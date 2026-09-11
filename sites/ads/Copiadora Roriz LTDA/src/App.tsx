import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Locations from './components/Locations';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Differentials />
      <Testimonials />
      <Contact />
      <Locations />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
