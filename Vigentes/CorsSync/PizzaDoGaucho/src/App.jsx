import { useEffect } from 'react'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Signature from './sections/Signature'
import Experience from './sections/Experience'
import Family from './sections/Family'
import Story from './sections/Story'
import Visit from './sections/Visit'
import Footer from './sections/Footer'

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
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Signature />
        <Experience />
        <Family />
        <Story />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
