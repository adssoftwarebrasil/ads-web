import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Areas from './components/Areas';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <About />
        <Gallery />
        <Testimonials />
        <Areas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
