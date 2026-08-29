import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import Catalogo from './components/Catalogo';
import Locacao from './components/Locacao';
import Epis from './components/Epis';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Mapa from './components/Mapa';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Diferenciais />
        <Catalogo />
        <Locacao />
        <Epis />
        <Avaliacoes />
        <Contato />
        <Mapa />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
