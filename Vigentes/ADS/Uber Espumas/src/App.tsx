import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
