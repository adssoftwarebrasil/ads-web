import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Reviews />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
