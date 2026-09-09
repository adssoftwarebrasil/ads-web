import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Products from './sections/Products'
import Differentials from './sections/Differentials'
import About from './sections/About'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

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
        <Services />
        <Products />
        <Differentials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
