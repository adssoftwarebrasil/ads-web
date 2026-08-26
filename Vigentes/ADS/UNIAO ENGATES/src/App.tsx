import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Engates from './components/Engates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Brands />
      <About />
      <WhyUs />
      <Engates />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
