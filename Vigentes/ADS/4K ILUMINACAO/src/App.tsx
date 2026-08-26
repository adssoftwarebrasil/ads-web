import Header from './components/Header';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import Beneficios from './components/Beneficios';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Beneficios />
        <Projetos />
        <Contato />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
