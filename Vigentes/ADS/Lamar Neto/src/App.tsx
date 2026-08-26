import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import WhyHire from './components/WhyHire';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Pular para o conteúdo principal
      </a>

      <TopBar />
      <Header />

      <main role="main" id="main-content">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Advantages />
        <WhyHire />
        <Testimonials />
        <Contact />
        <CTAFinal />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
