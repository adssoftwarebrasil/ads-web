import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
