import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Clients />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
