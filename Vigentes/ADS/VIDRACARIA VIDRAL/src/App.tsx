import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import QuemSomos from './components/QuemSomos';
import Produtos from './components/Produtos';
import Servicos from './components/Servicos';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Diferenciais />
      <QuemSomos />
      <Produtos />
      <Servicos />
      <Stats />
      <CTA />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
