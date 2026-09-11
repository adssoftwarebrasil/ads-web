import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Products />
      <Advantages />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
