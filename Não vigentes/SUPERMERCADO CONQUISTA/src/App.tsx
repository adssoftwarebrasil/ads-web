import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChoose />
        <Testimonials />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
