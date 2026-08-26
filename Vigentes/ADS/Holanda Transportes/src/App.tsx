import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Containers from './components/Containers';
import Gallery from './components/Gallery';
import Differentials from './components/Differentials';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Containers />
      <Gallery />
      <Differentials />
      <Coverage />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
