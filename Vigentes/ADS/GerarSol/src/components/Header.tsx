import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efeito para adicionar uma sombra quando o usuário rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Diferenciais', href: '#differentials' },
    { label: 'Cases', href: '#cases' },
    { label: 'Galeria', href: '#gallery' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Compensação da altura do header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=gerasolenergia%2FLogo%20Gerarsol%20(1)_page-0001.jpg&version_id=null"
              alt="Gerarsol Logo"
              className="h-10 md:h-14 w-auto transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-2 text-[rgb(44,56,152)] hover:text-[rgb(187,212,46)] transition-all duration-300 font-bold text-sm uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[rgb(187,212,46)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Botão de Contato Desktop */}
          <div className="hidden md:block">
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5577999719638&text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-[rgb(44,56,152)] text-white font-bold text-sm rounded-full hover:bg-[rgb(187,212,46)] hover:text-[rgb(44,56,152)] transition-all duration-300 shadow-md"
            >
              <Phone size={16} className="mr-2" />
              Falar com Especialista
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[rgb(44,56,152)] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`lg:hidden absolute left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[500px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          <div className="px-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-4 text-[rgb(44,56,152)] hover:bg-gray-50 hover:text-[rgb(187,212,46)] transition-all font-bold text-base border-b border-gray-50 last:border-none"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5577999719638&text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
                className="flex items-center justify-center w-full py-4 bg-[rgb(187,212,46)] text-[rgb(44,56,152)] font-black rounded-xl"
              >
                <Phone size={20} className="mr-2" />
                Orçamento via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}