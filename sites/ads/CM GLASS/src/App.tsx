import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Diferenciais from './components/Diferenciais';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Diferenciais />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
