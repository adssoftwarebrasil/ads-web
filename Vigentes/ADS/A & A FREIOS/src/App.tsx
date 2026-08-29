import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Location />
      <Contact />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
