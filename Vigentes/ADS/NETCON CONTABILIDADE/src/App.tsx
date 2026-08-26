import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Diferenciais from './components/Diferenciais';
import MissionVisionValues from './components/MissionVisionValues';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Diferenciais />
      <MissionVisionValues />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
