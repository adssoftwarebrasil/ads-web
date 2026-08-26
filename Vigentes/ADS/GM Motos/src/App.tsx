import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import AreasAtendimento from './components/AreasAtendimento';
import Vendedores from './components/Vendedores';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Depoimentos />
        <AreasAtendimento />
        <Vendedores />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
