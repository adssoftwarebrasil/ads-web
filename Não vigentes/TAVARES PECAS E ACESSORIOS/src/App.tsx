import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <About />
        <Reviews />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
