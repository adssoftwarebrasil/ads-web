import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChoose />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
