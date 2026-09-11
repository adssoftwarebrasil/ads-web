import Header from './components/Header';
import Hero from './components/Hero';
import Areas from './components/Areas';
import About from './components/About';
import Diferenciais from './components/Diferenciais';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Areas />
        <About />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
