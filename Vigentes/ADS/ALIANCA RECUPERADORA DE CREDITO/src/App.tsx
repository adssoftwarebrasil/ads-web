import About from './components/About';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Services from './components/Services';
import SimulatorForm from './components/SimulatorForm';
import Testimonials from './components/Testimonials';
import TopBar from './components/TopBar';
import WhatsappFloat from './components/WhatsappFloat';

function irParaSimulador() {
  const alvo = document.getElementById('simulador');
  if (alvo) window.scrollTo({ top: alvo.offsetTop - 80, behavior: 'smooth' });
}

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar onSimulate={irParaSimulador} />
      <Hero onSimulate={irParaSimulador} />
      <SimulatorForm />
      <About />
      <Services />
      <CtaBanner onSimulate={irParaSimulador} />
      <Process />
      <Testimonials />
      <Footer />
      <WhatsappFloat />
    </>
  );
}
