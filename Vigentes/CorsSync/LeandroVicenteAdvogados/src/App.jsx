import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Needs from './sections/Needs'
import PracticeAreas from './sections/PracticeAreas'
import About from './sections/About'
import Approach from './sections/Approach'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Needs />
        <PracticeAreas />
        <About />
        <Approach />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
