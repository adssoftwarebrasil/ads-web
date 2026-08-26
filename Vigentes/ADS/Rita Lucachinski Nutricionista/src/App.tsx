import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Struggles from './components/Struggles';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Phytotherapy from './components/Phytotherapy';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Services from './components/Services';
import InstagramFeed from './components/InstagramFeed';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-[rgb(157,111,88)] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Struggles />
        <HowItWorks />
        <Benefits />
        <Phytotherapy />
        <Testimonials />
        <Results />
        <FAQ />
        <Services />
        <InstagramFeed />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
