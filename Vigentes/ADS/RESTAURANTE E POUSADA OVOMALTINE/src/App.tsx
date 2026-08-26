import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Historia from './components/Historia';
import Pousada from './components/Pousada';
import Quartos from './components/Quartos';
import Avaliacoes from './components/Avaliacoes';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Historia />
        <Pousada />
        <Quartos />
        <Avaliacoes />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
