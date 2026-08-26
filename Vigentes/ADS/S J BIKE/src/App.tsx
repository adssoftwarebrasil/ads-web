import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Services from './components/Services';
import LinhaUrbana from './components/LinhaUrbana';
import LinhaPro from './components/LinhaPro';
import LinhaInfantil from './components/LinhaInfantil';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Hours from './components/Hours';
import Social from './components/Social';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Categories />
        <About />
        <Services />
        <LinhaUrbana />
        <LinhaPro />
        <LinhaInfantil />
        <Gallery />
        <Contact />
        <Hours />
        <Social />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
