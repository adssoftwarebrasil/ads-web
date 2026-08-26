import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Features from './components/Features';
import ComoFunciona from './components/ComoFunciona';
import Galeria from './components/Galeria';
import QuemSomos from './components/QuemSomos';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Features />
        <ComoFunciona />
        <Galeria />
        <QuemSomos />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
