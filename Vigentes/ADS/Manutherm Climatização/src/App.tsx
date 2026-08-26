import Header from './components/Header';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import AreaAtuacao from './components/AreaAtuacao';
import Servicos from './components/Servicos';
import Produtos from './components/Produtos';
import Valores from './components/Valores';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <QuemSomos />
      <AreaAtuacao />
      <Servicos />
      <Produtos />
      <Valores />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
