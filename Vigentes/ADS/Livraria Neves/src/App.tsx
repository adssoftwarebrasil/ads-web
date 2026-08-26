import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
