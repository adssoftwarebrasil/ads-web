import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Coverage from './components/Coverage';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Coverage />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
