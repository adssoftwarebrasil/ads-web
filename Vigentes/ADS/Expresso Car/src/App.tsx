import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Advantages from './components/Advantages';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Advantages />
      <WhyChoose />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
