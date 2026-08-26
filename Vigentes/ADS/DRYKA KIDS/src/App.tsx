import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Catalog />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
