import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
