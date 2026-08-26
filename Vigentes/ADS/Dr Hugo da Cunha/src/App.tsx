import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Procedures from './components/Procedures';
import Locations from './components/Locations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Procedures />
        <Locations />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
