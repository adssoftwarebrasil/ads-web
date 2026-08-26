import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <About />
      <Advantages />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
