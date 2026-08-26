import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const GREEN = '#004a27'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ backgroundColor: GREEN }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/topmadeiraspva/logo.png"
            alt="Top Madeiras Logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium tracking-wide hover:text-yellow-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+5566999371417"
          className="hidden md:flex items-center gap-2 text-white text-sm font-semibold hover:text-yellow-300 transition-colors duration-200"
        >
          <Phone size={16} />
          <span>(66) 99937-1417</span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden w-full border-t border-white/20"
          style={{ backgroundColor: GREEN }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5566999371417"
              className="mt-2 flex items-center gap-2 text-yellow-300 text-base font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              <span>(66) 99937-1417</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
