import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
