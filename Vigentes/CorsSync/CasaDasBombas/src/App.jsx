import { useEffect } from 'react'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Solutions from './sections/Solutions'
import TechnicalSupport from './sections/TechnicalSupport'
import ServiceFlow from './sections/ServiceFlow'
import Location from './sections/Location'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
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
      { threshold: 0.14 },
    )

    revealItems.forEach((item) => observer.observe(item))
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
        <TechnicalSupport />
        <ServiceFlow />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
