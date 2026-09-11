import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import QuemSomos from './components/QuemSomos.jsx';
import Stats from './components/Stats.jsx';
import Marcas from './components/Marcas.jsx';
import Categorias from './components/Categorias.jsx';
import Produtos from './components/Produtos.jsx';
import Features from './components/Features.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';
import WhatsappButton from './components/WhatsappButton.jsx';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Stats />
        <Marcas />
        <Categorias />
        <Produtos />
        <Features />
        <Contato />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
