import Header from './components/Header';
import PromoBar from './components/PromoBar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Differentials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
