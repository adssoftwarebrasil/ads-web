import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
