import AgeVerification from './components/AgeVerification';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Differentials from './components/Differentials';
import Moments from './components/Moments';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <AgeVerification />
      <div className="overflow-x-hidden">
        <Header />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Differentials />
        <Moments />
        <CTA />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
