import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Differentials from './components/Differentials';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Differentials />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
