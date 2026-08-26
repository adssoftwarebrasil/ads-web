import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
