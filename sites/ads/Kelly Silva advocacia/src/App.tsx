import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Areas from './components/Areas';
import Differentials from './components/Differentials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <Differentials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
