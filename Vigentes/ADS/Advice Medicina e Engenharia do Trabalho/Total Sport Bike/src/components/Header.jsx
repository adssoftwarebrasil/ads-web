import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { whatsappLink } from '../utils/whatsapp'
import TopBar from './TopBar.jsx'

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <TopBar />
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 top-0 md:top-[var(--topbar-h)] ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[var(--header-h)] flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0">
            {siteConfig.empresa.logo ? (
              <img src={siteConfig.empresa.logo} alt={siteConfig.empresa.nome} className="h-10 w-auto" />
            ) : (
              <span className="font-display font-bold text-xl text-primary tracking-tightish">
                {siteConfig.empresa.nome}
              </span>
            )}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="bg-primary text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-primary-dark transition-colors"
            >
              Fale conosco
            </a>
          </nav>

          <button className="md:hidden text-primary" onClick={() => setAberto(!aberto)} aria-label="Menu">
            {aberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {aberto && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col p-4 gap-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="text-sm font-medium text-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="bg-primary text-white font-semibold px-4 py-3 rounded-full text-sm text-center"
              >
                Fale conosco
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
