import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Services from './components/Services';
import VideoShowcase from './components/VideoShowcase';
import Office from './components/Office';
import WhyChoose from './components/WhyChoose';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Results />
        <Services />
        <VideoShowcase />
        <Office />
        <WhyChoose />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
