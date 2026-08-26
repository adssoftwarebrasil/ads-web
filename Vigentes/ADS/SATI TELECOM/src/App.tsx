import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Credential3CX from './components/Credential3CX';
import MissionVision from './components/MissionVision';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Credential3CX />
      <MissionVision />
      <Coverage />
      <Contact />
      <Careers />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
