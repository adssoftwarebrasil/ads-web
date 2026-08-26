import { useState, useEffect, useRef } from 'react'
import {
  Header,
  Hero,
  About,
  WhyHire,
  Differentials,
  ParallaxCTA,
  Services,
  Stats,
  Testimonials,
  Contact,
  Footer,
  FloatingWhatsApp
} from './components'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/5579932152915?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const message = `Nome: ${formData.get('nome')}\nWhatsApp: ${formData.get('whatsapp')}\nE-mail: ${formData.get('email')}\nAssunto: ${formData.get('assunto')}\nMensagem: ${formData.get('mensagem')}`
    handleWhatsApp(message)
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Header
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero handleWhatsApp={handleWhatsApp} />
      <About />
      <WhyHire />
      <Differentials />
      <ParallaxCTA
        title="Solicite Um Orçamento"
        subtitle="Entre em contato e saiba mais sobre nossos serviços."
        buttonText="Fale pelo WhatsApp"
        backgroundImage="https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FSolicite%20Um%20Orc%CC%A7amento-paralaxefeito.jpg"
        onButtonClick={() => handleWhatsApp('Olá! Gostaria de solicitar um orçamento.')}
      />
      <Services handleWhatsApp={handleWhatsApp} />
      <ParallaxCTA
        title="Agende Sua Visita"
        subtitle="Nossa equipe está pronta para atendê-lo."
        buttonText="Entre em Contato"
        backgroundImage="https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FAgende%20Sua%20Visita-paralaxefeito.jpg"
        onButtonClick={() => handleWhatsApp('Olá! Gostaria de agendar uma visita.')}
      />
      <Stats statsRef={statsRef} statsVisible={statsVisible} />
      <Testimonials />
      <Contact handleFormSubmit={handleFormSubmit} />
      <Footer scrollToSection={scrollToSection} handleWhatsApp={handleWhatsApp} />
      <FloatingWhatsApp handleWhatsApp={handleWhatsApp} />
    </div>
  )
}

export default App
