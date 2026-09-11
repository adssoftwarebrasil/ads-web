import Header from './components/Header';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import QuemSomos from './components/QuemSomos';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Produtos />
        <QuemSomos />
        <Galeria />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
