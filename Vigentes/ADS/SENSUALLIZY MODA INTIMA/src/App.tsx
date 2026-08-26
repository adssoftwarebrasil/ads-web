import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Galeria from './components/Galeria';
import Diferenciais from './components/Diferenciais';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <Produtos />
      <Galeria />
      <Diferenciais />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
