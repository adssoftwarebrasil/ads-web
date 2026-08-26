import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
