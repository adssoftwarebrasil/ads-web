import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Equipment from './components/Equipment';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Stats from './components/Stats';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Equipment />
      <Gallery />
      <Services />
      <Coverage />
      <Stats />
      <Quote />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
