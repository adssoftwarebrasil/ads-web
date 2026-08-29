import Header from './components/Header';
import Hero from './components/Hero';
import Equipe from './components/Equipe';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Equipe />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
