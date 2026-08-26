import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
