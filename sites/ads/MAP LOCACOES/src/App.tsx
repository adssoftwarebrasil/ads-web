import Header from './components/Header';
import Hero from './components/Hero';
import Badges from './components/Badges';
import About from './components/About';
import Services from './components/Services';
import VehicleGallery from './components/VehicleGallery';
import Differentials from './components/Differentials';
import Location from './components/Location';
import ContactCTA from './components/ContactCTA';
import BusinessHours from './components/BusinessHours';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Badges />
        <About />
        <Services />
        <VehicleGallery />
        <Differentials />
        <Location />
        <ContactCTA />
        <BusinessHours />
        <SocialMedia />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
