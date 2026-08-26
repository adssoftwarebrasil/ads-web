import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <CtaBanner />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
