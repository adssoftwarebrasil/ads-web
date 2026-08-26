import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import CtaBanner from './components/CtaBanner';
import About from './components/About';
import Contact from './components/Contact';
import Location from './components/Location';
import Social from './components/Social';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <CtaBanner />
        <About />
        <Contact />
        <Location />
        <Social />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
