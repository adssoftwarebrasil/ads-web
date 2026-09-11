import Header from './components/Header';
import Hero from './components/Hero';
import ComoFunciona from './components/ComoFunciona';
import Simulacao from './components/Simulacao';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
        <Simulacao />
        <Sobre />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
