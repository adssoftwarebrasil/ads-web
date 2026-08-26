import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
