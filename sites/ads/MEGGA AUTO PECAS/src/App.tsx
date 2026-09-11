import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Units from './components/Units';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Brands />
      <Services />
      <Differentials />
      <Units />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
