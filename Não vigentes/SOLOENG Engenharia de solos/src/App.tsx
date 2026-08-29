import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cases from './components/Cases';
import Instagram from './components/Instagram';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Gallery />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
