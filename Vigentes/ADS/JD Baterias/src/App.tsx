import Header from './components/Header';
import Hero from './components/Hero';
import QuickContact from './components/QuickContact';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Advantages from './components/Advantages';
import WhyHire from './components/WhyHire';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuickContact />
      <About />
      <Stats />
      <Services />
      <Advantages />
      <WhyHire />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
