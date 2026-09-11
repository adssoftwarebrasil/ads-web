import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accommodations from './components/Accommodations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Accommodations />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}
