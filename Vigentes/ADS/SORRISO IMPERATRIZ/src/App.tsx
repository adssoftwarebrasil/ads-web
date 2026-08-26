import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import InstagramFeed from './components/InstagramFeed';
import Servicos from './components/Servicos';
import Invisalign from './components/Invisalign';
import Resultados from './components/Resultados';
import Vantagens from './components/Vantagens';
import Confianca from './components/Confianca';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <InstagramFeed />
        <Servicos />
        <Invisalign />
        <Resultados />
        <Vantagens />
        <Confianca />
        <Depoimentos />
        <Contato />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
