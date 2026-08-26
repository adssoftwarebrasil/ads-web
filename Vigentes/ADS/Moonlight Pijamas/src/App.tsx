import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Colecoes from './components/Colecoes';
import Catalogo from './components/Catalogo';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-[rgb(254,254,252)]">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Colecoes />
        <Catalogo />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
