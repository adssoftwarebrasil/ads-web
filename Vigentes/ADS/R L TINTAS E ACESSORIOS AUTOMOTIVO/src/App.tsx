import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Diferenciais from './components/Diferenciais';
import Sobre from './components/Sobre';
import CtaBanner from './components/CtaBanner';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <Diferenciais />
      <Sobre />
      <CtaBanner />
      <Avaliacoes />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
