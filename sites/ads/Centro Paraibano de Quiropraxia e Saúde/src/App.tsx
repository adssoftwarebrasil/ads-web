import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Especialidades from './components/Especialidades';
import Tratamos from './components/Tratamos';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import Depoimentos from './components/Depoimentos';
import CtaBanner from './components/CtaBanner';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Especialidades />
        <Tratamos />
        <Sobre />
        <Diferenciais />
        <Depoimentos />
        <CtaBanner />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
