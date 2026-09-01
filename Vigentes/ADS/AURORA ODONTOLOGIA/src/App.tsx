import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promo from './components/Promo';
import Services from './components/Services';
import About from './components/About';
import Differentials from './components/Differentials';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Promo />
        <Services />
        <About />
        <Differentials />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
