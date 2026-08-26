import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Products />
      <CTA />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
