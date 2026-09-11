import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Process from './components/Process';
import Responsibility from './components/Responsibility';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Process />
      <Responsibility />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
