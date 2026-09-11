import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Differentials from './components/Differentials';
import HowToOrder from './components/HowToOrder';
import Structure from './components/Structure';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Differentials />
      <HowToOrder />
      <Structure />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
