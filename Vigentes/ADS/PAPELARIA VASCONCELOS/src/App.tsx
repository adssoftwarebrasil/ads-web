import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Products />
      <Differentials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
