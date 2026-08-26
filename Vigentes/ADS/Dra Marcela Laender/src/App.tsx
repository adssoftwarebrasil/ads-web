import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import LaserSection from './components/LaserSection';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <LaserSection />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
