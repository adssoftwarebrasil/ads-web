import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Marcas from './components/Marcas';
import Avaliacoes from './components/Avaliacoes';
import AreaAtendimento from './components/AreaAtendimento';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Marcas />
        <Avaliacoes />
        <AreaAtendimento />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
