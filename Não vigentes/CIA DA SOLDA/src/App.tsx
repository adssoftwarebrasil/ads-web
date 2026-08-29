import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Reviews from './components/Reviews';
import CTASection from './components/CTASection';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Products />
        <Differentials />
        <Reviews />
        <CTASection />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
