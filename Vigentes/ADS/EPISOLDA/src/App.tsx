import Header from './components/Header';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Produtos from './components/Produtos';
import Vantagens from './components/Vantagens';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Produtos />
        <Vantagens />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
