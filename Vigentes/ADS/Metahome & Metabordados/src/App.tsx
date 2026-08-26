import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Metahome from './components/Metahome';
import Metabordados from './components/Metabordados';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden bg-white">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Metabordados />
        <Metahome />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
