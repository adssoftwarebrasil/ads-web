import Header from './components/Header';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Transformation />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
