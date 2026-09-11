import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyChoose />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
