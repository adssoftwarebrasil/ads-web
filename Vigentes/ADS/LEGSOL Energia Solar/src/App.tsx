import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Social from './components/Social';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Gallery />
        <Process />
        <Social />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
