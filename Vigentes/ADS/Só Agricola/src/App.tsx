import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Values from './components/Values';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Values />
        <Branches />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
