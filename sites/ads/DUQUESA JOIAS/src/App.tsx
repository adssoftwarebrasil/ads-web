import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Consultora from './components/Consultora';
import Testimonials from './components/Testimonials';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <Consultora />
      <Testimonials />
      <Coverage />
      <Contact />
      <Footer />
    </div>
  );
}
