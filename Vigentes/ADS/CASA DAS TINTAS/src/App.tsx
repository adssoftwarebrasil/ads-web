import Header from './components/Header';
import Hero from './components/Hero';
import NewBranchBanner from './components/NewBranchBanner';
import About from './components/About';
import ColorBanner from './components/ColorBanner';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <NewBranchBanner />
      <About />
      <ColorBanner />
      <Products />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
