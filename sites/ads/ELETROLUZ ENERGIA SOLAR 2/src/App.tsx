import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PosVenda from './components/PosVenda';
import Diferenciais from './components/Diferenciais';
import Projetos from './components/Projetos';
import AreaAtendimento from './components/AreaAtendimento';
import SearchTags from './components/SearchTags';
import Horario from './components/Horario';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <PosVenda />
      <Diferenciais />
      <Projetos />
      <AreaAtendimento />
      <SearchTags />
      <Horario />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
