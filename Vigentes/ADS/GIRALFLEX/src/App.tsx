import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
