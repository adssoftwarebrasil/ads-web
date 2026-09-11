import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import { useReveal } from './hooks/useReveal.js'
import Accommodations from './sections/Accommodations.jsx'
import About from './sections/About.jsx'
import Benefits from './sections/Benefits.jsx'
import CareNetwork from './sections/CareNetwork.jsx'
import Contact from './sections/Contact.jsx'
import Faq from './sections/Faq.jsx'
import Footer from './sections/Footer.jsx'
import Guidance from './sections/Guidance.jsx'
import Hero from './sections/Hero.jsx'
import Plans from './sections/Plans.jsx'

function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Plans />
        <CareNetwork />
        <Accommodations />
        <Guidance />
        <About />
        <Benefits />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
