import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <WhyUs />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
