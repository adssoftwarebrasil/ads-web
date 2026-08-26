import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Advantages from './components/Advantages';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Advantages />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
