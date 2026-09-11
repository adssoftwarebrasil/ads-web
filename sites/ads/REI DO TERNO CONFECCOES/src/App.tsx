import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Differentials from './components/Differentials';
import InstagramSection from './components/InstagramSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Differentials />
      <InstagramSection />
      <Gallery />
      <Contact />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
