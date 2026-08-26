import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brands from './components/Brands';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Brands />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
