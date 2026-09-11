import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Produtos from './components/Produtos';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Produtos />
        <Depoimentos />
        <Contato />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
