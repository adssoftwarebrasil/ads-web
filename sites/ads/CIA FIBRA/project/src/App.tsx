import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Products from './components/Products';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <About />
      <Portfolio />
      <Products />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
