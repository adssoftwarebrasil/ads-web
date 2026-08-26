import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Process from './components/Process';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Advantages />
        <Services />
        <Process />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
