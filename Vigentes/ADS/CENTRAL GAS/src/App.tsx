import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import SafetyTips from './components/SafetyTips';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <SafetyTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
