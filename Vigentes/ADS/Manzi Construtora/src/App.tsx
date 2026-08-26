import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Institucional from './components/Institucional';
import Empreendimentos from './components/Empreendimentos';
import Novidades from './components/Novidades';
import Contato from './components/Contato';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Institucional />
      <Empreendimentos />
      <Novidades />
      <Contato />
      <Footer />
      <BackToTop />
    </div>
  );
}
