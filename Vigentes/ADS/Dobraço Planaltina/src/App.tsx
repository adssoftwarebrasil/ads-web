import Header from './components/Header';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import FeaturedServices from './components/FeaturedServices';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import CounterStats from './components/CounterStats';
import HowItWorks from './components/HowItWorks';
import Products from './components/Products';
import FAQ from './components/FAQ';
import LocationHours from './components/LocationHours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsBanner />
      <FeaturedServices />
      <Services />
      <WhyChoose />
      <About />
      <CounterStats />
      <HowItWorks />
      <Products />
      <FAQ />
      <LocationHours />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
