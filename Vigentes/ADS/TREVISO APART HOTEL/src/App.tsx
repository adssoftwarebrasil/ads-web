import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <Location />
      <ContactForm />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
