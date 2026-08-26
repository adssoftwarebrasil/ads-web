import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Differentials from './components/Differentials';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Differentials />
      <Products />
      <HowItWorks />
      <InstagramSection />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
