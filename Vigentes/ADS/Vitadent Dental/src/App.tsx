import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Technology />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
