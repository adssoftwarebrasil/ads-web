import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsServices from './components/ProductsServices';
import Gallery from './components/Gallery';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import Differentials from './components/Differentials';
import LocationContact from './components/LocationContact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <ProductsServices />
      <Gallery />
      <About />
      <InstagramFeed />
      <Differentials />
      <LocationContact />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
