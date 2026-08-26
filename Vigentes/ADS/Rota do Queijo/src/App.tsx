import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import InstagramSection from './components/InstagramSection';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[rgb(254,254,254)]">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Depoimentos />
        <InstagramSection />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
