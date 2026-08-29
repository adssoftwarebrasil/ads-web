import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
