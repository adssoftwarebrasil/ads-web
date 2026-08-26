import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Vantagens from './components/Vantagens';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

export default function App() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Vantagens />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
