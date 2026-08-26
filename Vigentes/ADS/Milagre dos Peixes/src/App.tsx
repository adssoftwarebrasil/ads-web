import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Courses />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
