import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Advantages />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
