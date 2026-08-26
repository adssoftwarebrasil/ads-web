import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
