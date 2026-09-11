import { useEffect } from 'react'
import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Collections from './sections/Collections.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Showcase from './sections/Showcase.jsx'
import Story from './sections/Story.jsx'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
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
        <Collections />
        <Showcase />
        <Story />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
