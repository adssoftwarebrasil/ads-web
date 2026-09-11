import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Differentials from './components/Differentials';
import Equipment from './components/Equipment';
import CoverageArea from './components/CoverageArea';
import CTA from './components/CTA';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="quem-somos">
          <About />
        </div>
        <Differentials />
        <div id="equipamentos">
          <Equipment />
        </div>
        <CoverageArea />
        <div id="contato">
          <CTA />
        </div>
      </main>
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;