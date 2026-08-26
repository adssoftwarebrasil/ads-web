import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Equipment from './components/Equipment';
import Stats from './components/Stats';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Equipment />
        <Stats />
        <Advantages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
