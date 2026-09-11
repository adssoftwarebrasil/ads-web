import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Galeria from './components/Galeria';
import Parcerias from './components/Parcerias';
import Unidades from './components/Unidades';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Sobre />
      <Produtos />
      <Galeria />
      <Parcerias />
      <Unidades />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
