import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
