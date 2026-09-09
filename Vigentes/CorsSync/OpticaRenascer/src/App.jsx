import { useEffect } from 'react'
import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import Collections from './sections/Collections.jsx'
import LensCare from './sections/LensCare.jsx'
import Lookbook from './sections/Lookbook.jsx'
import Experience from './sections/Experience.jsx'
import Visit from './sections/Visit.jsx'
import Footer from './components/Footer.jsx'

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
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Collections />
        <LensCare />
        <Lookbook />
        <Experience />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
