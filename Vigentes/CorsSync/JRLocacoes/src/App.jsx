import { useEffect } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Gallery from './sections/Gallery.jsx'
import Hero from './sections/Hero.jsx'
import Operations from './sections/Operations.jsx'
import Services from './sections/Services.jsx'

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) return undefined

    document.documentElement.classList.add('motion-ready')
    const items = document.querySelectorAll('.reveal')
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

    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Operations />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
