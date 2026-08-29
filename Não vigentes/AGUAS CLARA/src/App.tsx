import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Services from './components/Services';
import WhyBuy from './components/WhyBuy';
import Advantages from './components/Advantages';
import TransformYard from './components/TransformYard';
import Testimonials from './components/Testimonials';
import OrcamentoCTA from './components/OrcamentoCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <About />
        <Services />
        <WhyBuy />
        <Advantages />
        <TransformYard />
        <Testimonials />
        <OrcamentoCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
