import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Videos from './components/Videos';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Videos />
      <Differentials />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
