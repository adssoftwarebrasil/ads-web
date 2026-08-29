import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[rgb(255,254,252)]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Testimonials />
      <Location />
      <ReservationForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
