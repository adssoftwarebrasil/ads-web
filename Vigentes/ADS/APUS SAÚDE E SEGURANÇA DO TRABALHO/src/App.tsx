import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import InstagramSection from './components/Instagram';
import Differentials from './components/Differentials';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <InstagramSection />
      <Differentials />
      <About />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
