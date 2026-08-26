import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Diferenciais } from './components/Diferenciais';
import { Produtos } from './components/Produtos';
import { Sobre } from './components/Sobre';
import { Galeria } from './components/Galeria';
import { CTA } from './components/CTA';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Produtos />
        <Galeria />
        <Sobre />
        <CTA />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
