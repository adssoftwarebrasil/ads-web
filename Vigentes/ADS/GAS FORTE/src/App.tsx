import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Payment from './components/Payment';
import HowToOrder from './components/HowToOrder';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Differentials />
      <Payment />
      <HowToOrder />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
