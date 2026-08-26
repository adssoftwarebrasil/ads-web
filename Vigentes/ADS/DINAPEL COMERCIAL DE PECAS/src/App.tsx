import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Products from './components/Products';
import About from './components/About';
import Differentials from './components/Differentials';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <StatsBar />
      <Products />
      <About />
      <Differentials />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
