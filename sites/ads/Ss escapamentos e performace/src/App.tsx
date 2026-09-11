import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyHire from './components/WhyHire';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyHire />
      <Advantages />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
