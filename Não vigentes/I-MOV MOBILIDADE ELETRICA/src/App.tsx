import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import TestRide from './components/TestRide';
import Maintenance from './components/Maintenance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <WhyChoose />
      <TestRide />
      <Maintenance />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
