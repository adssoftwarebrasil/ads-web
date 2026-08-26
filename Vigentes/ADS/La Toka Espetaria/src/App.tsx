import Hero from './components/Hero';
import Historia from './components/Historia';
import Destaques from './components/Destaques';
import Galeria from './components/Galeria';
import Instagram from './components/Instagram';
import Localizacao from './components/Localizacao';
import Depoimentos from './components/Depoimentos';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import { IfoodProvider } from './components/IfoodPicker';

export default function App() {
  return (
    <IfoodProvider>
      <div className="min-h-screen">
        <Hero />
        <Historia />
        <Destaques />
        <Galeria />
        <Instagram />
        <Localizacao />
        <Depoimentos />
        <CTA />
        <Footer />
        <FloatingButton />
      </div>
    </IfoodProvider>
  );
}
