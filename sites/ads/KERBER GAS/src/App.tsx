import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
