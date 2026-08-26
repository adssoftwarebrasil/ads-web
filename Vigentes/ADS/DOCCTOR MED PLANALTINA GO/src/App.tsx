import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Especialidades from './components/Especialidades';
import Exames from './components/Exames';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Especialidades />
        <Exames />
        <Galeria />
        <Depoimentos />
        <Contato />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
