import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Store from './components/Store';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Differentials />
        <Store />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
