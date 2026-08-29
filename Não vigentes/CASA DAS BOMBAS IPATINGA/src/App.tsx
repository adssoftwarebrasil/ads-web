import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Stats from './components/Stats';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Stats />
        <Advantages />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
