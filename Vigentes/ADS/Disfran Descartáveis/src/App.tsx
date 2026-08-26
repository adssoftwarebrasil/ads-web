import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Categories from './components/Categories';
import Catalog from './components/Catalog';
import WhyChoose from './components/WhyChoose';
import Segments from './components/Segments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <About />
      <Categories />
      <Catalog />
      <WhyChoose />
      <Segments />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
