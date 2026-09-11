import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Regions from './components/Regions';
import Team from './components/Team';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Regions />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
