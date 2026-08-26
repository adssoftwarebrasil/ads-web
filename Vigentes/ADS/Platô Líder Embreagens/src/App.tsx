import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Products from './components/Products';
import Diferenciais from './components/Diferenciais';
import Atendimento from './components/Atendimento';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Diferenciais />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
