import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Stats from './components/Stats';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden antialiased">
      <Header />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <About />
        <Products />
        <Stats />
        <Advantages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
