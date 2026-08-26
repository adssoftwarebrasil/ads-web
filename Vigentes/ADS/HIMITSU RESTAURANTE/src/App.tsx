import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import WhyChoose from './components/WhyChoose';
import Delivery from './components/Delivery';
import Location from './components/Location';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
      <WhyChoose />
      <Delivery />
      <Location />
      <Reservation />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
