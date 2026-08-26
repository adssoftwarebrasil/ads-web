import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
