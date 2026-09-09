import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import ServiceStudio from './sections/ServiceStudio.jsx'
import Differentials from './sections/Differentials.jsx'
import Gallery from './sections/Gallery.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Location from './sections/Location.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <ScrollProgress />
      <Header />
      <main id="conteudo">
        <Hero />
        <ServiceStudio />
        <Differentials />
        <Gallery />
        <About />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
