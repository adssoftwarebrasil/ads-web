import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import WhyHire from './components/WhyHire';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Advantages />
        <WhyHire />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
