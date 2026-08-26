import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
