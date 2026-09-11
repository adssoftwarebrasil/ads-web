import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import Treatments from './components/Treatments';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Treatments />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
