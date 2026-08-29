import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Servicos from './components/Servicos';
import PorQue from './components/PorQue';
import Contato from './components/Contato';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Historia />
      <Servicos />
      <PorQue />
      <Contato />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
