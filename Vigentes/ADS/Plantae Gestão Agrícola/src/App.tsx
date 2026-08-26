import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import MobileApp from './components/MobileApp';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw] font-lato">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <About />
      <MobileApp />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
