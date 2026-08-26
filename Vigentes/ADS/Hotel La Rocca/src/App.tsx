import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import History from './components/History';
import Rooms from './components/Rooms';
import Breakfast from './components/Breakfast';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div id="home" className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <History />
      <Rooms />
      <Breakfast />
      <Location />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
