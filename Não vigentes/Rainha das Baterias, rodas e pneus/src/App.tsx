import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Structure from './components/Structure';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Differentials />
      <Structure />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
