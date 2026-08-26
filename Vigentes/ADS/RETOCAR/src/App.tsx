import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw] bg-[#0A0A0A]">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Galeria />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
