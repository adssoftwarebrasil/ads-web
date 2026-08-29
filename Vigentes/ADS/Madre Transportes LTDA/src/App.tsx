import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Coverage from './components/Coverage';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <WhyUs />
        <Fleet />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
