import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Specialties from './components/Specialties';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Specialties />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
