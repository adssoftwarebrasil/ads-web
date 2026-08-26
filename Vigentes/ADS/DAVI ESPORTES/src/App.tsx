import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Products from './components/Products';
import Brands from './components/Brands';
import About from './components/About';
import Instagram from './components/Instagram';
import Coverage from './components/Coverage';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <StatsBar />
      <Products />
      <Brands />
      <About />
      <main className="w-full overflow-x-hidden">
        <Instagram />
        <Coverage />
      </main>
      <Hours />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
