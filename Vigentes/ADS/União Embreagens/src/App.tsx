import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Diferenciais />
      <Produtos />
      <Sobre />
      <Localizacao />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
