import Header from './components/Header';
import Hero from './components/Hero';
import FullService from './components/FullService';
import Services from './components/Services';
import PisoIrmarfer from './components/PisoIrmarfer';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[rgb(3,7,8)] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FullService />
        <Services />
        <PisoIrmarfer />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
