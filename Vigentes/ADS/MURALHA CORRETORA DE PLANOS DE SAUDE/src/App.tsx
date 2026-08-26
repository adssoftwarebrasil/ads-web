import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <Services />
        <Partners />
        <Locations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
