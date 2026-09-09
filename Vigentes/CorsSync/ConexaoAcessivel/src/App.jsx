import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Solutions from './sections/Solutions'
import Method from './sections/Method'
import Expertise from './sections/Expertise'
import Clients from './sections/Clients'
import Cases from './sections/Cases'
import Gallery from './sections/Gallery'
import Audience from './sections/Audience'
import Authority from './sections/Authority'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Solutions />
        <Method />
        <Expertise />
        <Clients />
        <Cases />
        <Gallery />
        <Audience />
        <Authority />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
