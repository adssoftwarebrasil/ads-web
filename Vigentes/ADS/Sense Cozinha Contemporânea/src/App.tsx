import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import OurKitchen from './components/OurKitchen';
import Gallery from './components/Gallery';
import InstagramFeed from './components/InstagramFeed';
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
        <QuickInfo />
        <About />
        <OurKitchen />
        <Gallery />
        <InstagramFeed />
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
