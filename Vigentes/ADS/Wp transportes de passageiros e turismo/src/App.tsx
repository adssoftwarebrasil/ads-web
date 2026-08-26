import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <Differentials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
