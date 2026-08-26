import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Brands from './components/Brands';
import Coverage from './components/Coverage';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Brands />
        <Coverage />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
