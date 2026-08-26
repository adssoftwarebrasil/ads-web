import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Catalog from './components/Catalog';
import Locations from './components/Locations';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Catalog />
      <Locations />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
