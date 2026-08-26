import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CtaBanner from './components/CtaBanner';
import Products from './components/Products';
import Stats from './components/Stats';
import Vantagens from './components/Vantagens';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <CtaBanner />
        <Products />
        <Stats />
        <Vantagens />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
