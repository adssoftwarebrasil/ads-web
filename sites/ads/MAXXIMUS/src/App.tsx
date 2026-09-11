import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import Produtos from './components/Produtos';
import Marcas from './components/Marcas';
import Assistencia from './components/Assistencia';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Sobre />
      <Diferenciais />
      <Produtos />
      <Marcas />
      <Assistencia />
      <Localizacao />
      <Contato />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
