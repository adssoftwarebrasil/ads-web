import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Turmas from './components/Turmas';
import Diferenciais from './components/Diferenciais';
import Estrutura from './components/Estrutura';
import Atividades from './components/Atividades';
import Horarios from './components/Horarios';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <Turmas />
      <Diferenciais />
      <Estrutura />
      <Atividades />
      <Horarios />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
