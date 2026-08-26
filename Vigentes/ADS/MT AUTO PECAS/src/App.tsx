import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Diferenciais from './components/Diferenciais';
import Avaliacoes from './components/Avaliacoes';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Produtos />
        <Diferenciais />
        <Avaliacoes />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
