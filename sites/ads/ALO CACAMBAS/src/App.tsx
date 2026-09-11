import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import About from './components/About';
import Fleet from './components/Fleet';
import Cases from './components/Cases';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Differentials />
      <About />
      <Fleet />
      <Cases />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
