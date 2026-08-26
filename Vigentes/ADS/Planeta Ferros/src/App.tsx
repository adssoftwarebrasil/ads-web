import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Servicos from './components/Servicos';
import ComoFunciona from './components/ComoFunciona';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';
import OndeAtendemos from './components/OndeAtendemos';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Servicos />
        <ComoFunciona />
        <Sobre />
        <Galeria />
        <OndeAtendemos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
