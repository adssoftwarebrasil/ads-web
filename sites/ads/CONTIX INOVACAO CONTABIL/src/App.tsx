import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import AberturaEmpresa from './components/AberturaEmpresa';
import Passos from './components/Passos';
import Solucoes from './components/Solucoes';
import Valores from './components/Valores';
import Sobre from './components/Sobre';
import CtaMigrar from './components/CtaMigrar';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Servicos />
      <AberturaEmpresa />
      <Passos />
      <Solucoes />
      <Valores />
      <Sobre />
      <CtaMigrar />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
