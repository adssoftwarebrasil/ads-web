import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Services from './components/Services';
import Products from './components/Products';
import Rentals from './components/Rentals';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Technology />
      <Products />
      <Services />
      <Rentals />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
