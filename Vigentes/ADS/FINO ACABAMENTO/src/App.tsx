import Header from './components/Header';
import Hero from './components/Hero';
import MonthlyPromotion from './components/MonthlyPromotion';
import Products from './components/Products';
import Catalogs from './components/Catalogs';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <MonthlyPromotion />
        <Products />
        <Catalogs />
        <About />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
