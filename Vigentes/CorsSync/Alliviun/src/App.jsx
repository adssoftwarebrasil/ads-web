import { useEffect } from 'react'
import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import Treatments from './sections/Treatments.jsx'
import Method from './sections/Method.jsx'
import Story from './sections/Story.jsx'
import Proof from './sections/Proof.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

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
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
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
        <Treatments />
        <Method />
        <Story />
        <Proof />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

