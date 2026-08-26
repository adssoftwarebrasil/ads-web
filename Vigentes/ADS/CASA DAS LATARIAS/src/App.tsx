import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Stats from './components/Stats';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(252, 255, 252)' }}>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Products />
        <Stats />
        <About />
        <Reviews />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
