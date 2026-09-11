import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Testimonials />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
