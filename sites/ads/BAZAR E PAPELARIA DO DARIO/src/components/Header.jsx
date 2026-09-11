import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const LOGO = '/img/logo.webp'
const WHATSAPP = 'https://wa.me/5562984256606'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black shadow-2xl' : 'bg-brand-black/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={LOGO}
              alt="Logo Bazar e Papelaria do Dario"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-brand-blue"
            />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight">Bazar e Papelaria</p>
              <p className="text-brand-blue text-xs font-semibold">do Dario</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-brand-blue text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:6233972829"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} />
              <span>(62) 3397-2829</span>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-brand-black border-t border-white/10`}
      >
        <nav className="px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-brand-blue text-base font-medium py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-brand-blue text-white text-center font-semibold px-5 py-3 rounded-full"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
