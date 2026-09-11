import Header from './components/Header';
import Hero from './components/Hero';
import Estoque from './components/Estoque';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Estoque />
        <Sobre />
        <Servicos />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
