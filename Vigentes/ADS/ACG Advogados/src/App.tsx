import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Areas from './components/Areas';
import Diferenciais from './components/Diferenciais';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Areas />
      <Diferenciais />
      <Avaliacoes />
      <Contato />
      <Localizacao />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
