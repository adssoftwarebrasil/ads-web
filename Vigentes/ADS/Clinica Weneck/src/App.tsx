import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Especialidades from './components/Especialidades';
import Sobre from './components/Sobre';
import Equipe from './components/Equipe';
import Resultados from './components/Resultados';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import InstagramFeed from './components/InstagramFeed';
import InstagramDicas from './components/InstagramDicas';
import CTASection from './components/CTASection';
import Contato from './components/Contato';
import FormularioContato from './components/FormularioContato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Diferenciais />
      <Especialidades />
      <Sobre />
      <Equipe />
      <Resultados />
      <Galeria />
      <Depoimentos />
      <InstagramFeed />
      <InstagramDicas />
      <CTASection />
      <Contato />
      <FormularioContato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
