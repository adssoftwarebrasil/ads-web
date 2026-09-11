import Header from './components/Header';
import Hero from './components/Hero';
import ClientsCarousel from './components/ClientsCarousel';
import Performance from './components/Performance';
import Services from './components/Services';
import About from './components/About';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientsCarousel />
      <Performance />
      <Services />
      <About />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}
