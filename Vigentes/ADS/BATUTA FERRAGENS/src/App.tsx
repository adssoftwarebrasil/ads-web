import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
