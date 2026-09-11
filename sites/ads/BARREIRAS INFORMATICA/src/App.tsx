import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGallery from './components/ProductGallery';
import B2BServices from './components/B2BServices';
import AboutUs from './components/AboutUs';
import LocationContact from './components/LocationContact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <ProductGallery />
      <B2BServices />
      <AboutUs />
      <LocationContact />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
