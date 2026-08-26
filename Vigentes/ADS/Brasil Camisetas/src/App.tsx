import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Differentials />
      <Cases />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
