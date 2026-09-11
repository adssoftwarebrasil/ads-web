import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
