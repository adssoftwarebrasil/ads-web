import { useEffect } from 'react'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import QuickAccess from './sections/QuickAccess'
import Care from './sections/Care'
import Structure from './sections/Structure'
import Story from './sections/Story'
import Store from './sections/Store'
import Location from './sections/Location'

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
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
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
        <QuickAccess />
        <Care />
        <Structure />
        <Story />
        <Store />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

