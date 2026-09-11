import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Stats from './components/Stats';
import Brands from './components/Brands';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Stats />
      <Brands />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
