import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import Showroom from './components/Showroom';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Showroom />
      <Contact />
      <Footer />
      <a
        href="http://wa.me/557988094313"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="lucide lucide-message-circle" width={28} height={28} />
      </a>
    </div>
  );
}
