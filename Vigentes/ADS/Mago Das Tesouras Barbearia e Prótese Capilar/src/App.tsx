import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Resultados from './components/Resultados';
import Sobre from './components/Sobre';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Galeria />
        <Resultados />
        <Sobre />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
