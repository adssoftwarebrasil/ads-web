import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Accessories from './components/Accessories';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Accessories />
        <Services />
        <WhyChoose />
        <Advantages />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
