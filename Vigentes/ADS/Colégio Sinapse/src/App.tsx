import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import Ensino from './components/Ensino';
import Resultados from './components/Resultados';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <Diferenciais />
      <Ensino />
      <Resultados />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
