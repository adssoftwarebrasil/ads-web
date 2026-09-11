import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div>
          <Hero />
          <Stats />
          <Services />
          <WhyChoose />
          <Testimonials />
          <CTA />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
