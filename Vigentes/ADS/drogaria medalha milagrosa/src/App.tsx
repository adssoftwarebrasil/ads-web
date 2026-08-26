import Header from './components/Header';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen bg-brand-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <About />
        <Products />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
