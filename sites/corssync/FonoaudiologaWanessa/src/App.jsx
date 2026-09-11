import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import CareIntro from './sections/CareIntro.jsx'
import Services from './sections/Services.jsx'
import Approach from './sections/Approach.jsx'
import Gallery from './sections/Gallery.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <CareIntro />
        <Services />
        <Approach />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
