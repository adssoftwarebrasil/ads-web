import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Awards from './components/Awards';
import History from './components/History';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Products />
      <WhyChoose />
      <Awards />
      <History />
      <Testimonials />
      <FAQ />
      <Locations />
      <Contact />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
