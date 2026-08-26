import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Facebook } from 'lucide-react'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import Produtos from './components/Produtos'
import Galeria from './components/Galeria'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import InstagramFeed from './components/InstagramFeed'
import Localizacao from './components/Localizacao'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <div className="relative overflow-x-hidden">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-lg' : 'bg-black/80'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 animate-fade-in">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=starjoias%2Festrela-dourada-texto-removebg-preview%201.png&version_id=null"
                alt="StarJoias Logo"
                className="h-14 md:h-16 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8 animate-slide-in">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-gold transition-colors">Início</button>
              <button onClick={() => scrollToSection('produtos')} className="text-white hover:text-gold transition-colors">Produtos</button>
              <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-gold transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-gold transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('contato')} className="text-white hover:text-gold transition-colors">Contato</button>
            </nav>

            <div className="hidden md:flex items-center space-x-4 animate-fade-in">
              <a href="https://instagram.com/starjoiasbarreiras" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/starjoiasbarreiras" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                <Facebook size={20} />
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gold p-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/98 border-t border-gold/20 animate-slide-down">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-gold transition-colors text-left py-2">Início</button>
              <button onClick={() => scrollToSection('produtos')} className="text-white hover:text-gold transition-colors text-left py-2">Produtos</button>
              <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-gold transition-colors text-left py-2">Serviços</button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-gold transition-colors text-left py-2">Sobre</button>
              <button onClick={() => scrollToSection('contato')} className="text-white hover:text-gold transition-colors text-left py-2">Contato</button>
              <div className="flex items-center space-x-4 pt-4 border-t border-gold/20">
                <a href="https://instagram.com/starjoiasbarreiras" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/starjoiasbarreiras" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Hero onExploreClick={() => scrollToSection('produtos')} onContactClick={() => scrollToSection('contato')} />
        <Diferenciais />
        <Produtos />
        <Galeria />
        <Servicos onContactClick={() => scrollToSection('contato')} />
        <Sobre />
        <InstagramFeed />
        <Localizacao />
        <Contato />
      </main>

      <Footer onNavigate={scrollToSection} />
      <WhatsAppButton />
    </div>
  )
}

export default App
