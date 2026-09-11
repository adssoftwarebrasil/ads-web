import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import ConsultaCTA from './components/ConsultaCTA';
import Areas from './components/Areas';
import Services from './components/Services';
import Certifications from './components/Certifications';
import StatsClients from './components/StatsClients';
import Advantages from './components/Advantages';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useScrollReveal } from './useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Team />
      <ConsultaCTA />
      <Areas />
      <Services />
      <Certifications />
      <StatsClients />
      <Advantages />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
