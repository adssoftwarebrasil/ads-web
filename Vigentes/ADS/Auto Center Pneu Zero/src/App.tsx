import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import PorqueContratar from './components/PorqueContratar';
import Servicos from './components/Servicos';
import Promocoes from './components/Promocoes';
import Orcamento from './components/Orcamento';
import ValoresVisaoMissao from './components/ValoresVisaoMissao';
import Vantagens from './components/Vantagens';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <PorqueContratar />
      <Servicos />
      <Promocoes />
      <Orcamento />
      <ValoresVisaoMissao />
      <Vantagens />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
