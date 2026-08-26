import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Galeria />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
