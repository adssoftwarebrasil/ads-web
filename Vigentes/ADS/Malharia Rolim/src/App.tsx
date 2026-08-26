import Header from './components/Header';
import Hero from './components/Hero';
import CategoriesBar from './components/CategoriesBar';
import Products from './components/Products';
import About from './components/About';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <CategoriesBar />
        <Products />
        <About />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
