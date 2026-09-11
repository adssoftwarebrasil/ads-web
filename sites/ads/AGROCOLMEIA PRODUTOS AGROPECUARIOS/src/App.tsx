import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Programs />
      <FAQ />
      <Partners />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
