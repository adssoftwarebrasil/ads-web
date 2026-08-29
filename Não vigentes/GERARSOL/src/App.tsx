import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Cases from './components/Cases'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Cases />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
