import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[72px]">
        <Hero />
        <Services />
        <Differentials />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
