import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Credentials from './components/Credentials';
import Area from './components/Area';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Credentials />
        <Area />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
