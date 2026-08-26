import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Principios from './components/Principios';
import Areas from './components/Areas';
import Equipe from './components/Equipe';
import Links from './components/Links';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <Hero />
      <Servicos />
      <Sobre />
      <Principios />
      <Areas />
      <Equipe />
      <Links />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
