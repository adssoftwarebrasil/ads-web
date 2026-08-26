import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Benefits from './components/Benefits';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Benefits />
        <Products />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
