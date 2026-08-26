import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <VideoSection />
        <Gallery />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
