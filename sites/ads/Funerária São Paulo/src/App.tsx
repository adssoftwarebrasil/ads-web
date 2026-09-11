import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Differentials />
      <Gallery />
      <Testimonial />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
