import Header from './components/Header';
import Hero from './components/Hero';
import NossaHistoria from './components/NossaHistoria';
import Produtos from './components/Produtos';
import Diferenciais from './components/Diferenciais';
import ChapasPead from './components/ChapasPead';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <Hero />
      <NossaHistoria />
      <Produtos />
      <Diferenciais />
      <ChapasPead />
      <Galeria />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
