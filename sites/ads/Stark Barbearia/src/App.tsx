import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
