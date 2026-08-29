import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import Ensino from './components/Ensino';
import Parceiros from './components/Parceiros';
import Essencia from './components/Essencia';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Sobre />
      <Diferenciais />
      <Ensino />
      <Parceiros />
      <Essencia />
      <Galeria />
      <Depoimentos />
      <Contato />
      <WhatsAppFloat />
    </div>
  );
}
