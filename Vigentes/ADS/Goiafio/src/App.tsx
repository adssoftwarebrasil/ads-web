import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Diferenciais from './components/Diferenciais';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Sobre />
      <Produtos />
      <Diferenciais />
      <Avaliacoes />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
