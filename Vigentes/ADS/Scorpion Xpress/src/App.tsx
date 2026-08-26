import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Brands from './components/Brands';
import Differentials from './components/Differentials';
import Store from './components/Store';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Brands />
        <Differentials />
        <Store />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
