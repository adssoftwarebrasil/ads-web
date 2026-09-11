import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import DiferenciaisSection from './components/DiferenciaisSection';
import GallerySection from './components/GallerySection';
import AtendimentoSection from './components/AtendimentoSection';
import HorarioSection from './components/HorarioSection';
import InstagramSection from './components/InstagramSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <DiferenciaisSection />
      <GallerySection />
      <AtendimentoSection />
      <HorarioSection />
      <InstagramSection />
      <ContatoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
