import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Differentials from './components/Differentials';
import CTA from './components/CTA';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Differentials />
        <CTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
