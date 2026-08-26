import { Mail, Menu, X } from 'lucide-react'

interface HeaderProps {
  scrolled: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  scrollToSection: (id: string) => void
}

export const Header = ({ scrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) => {
  const navLinks = ['Início', 'Sobre', 'Vantagens', 'Produtos', 'Depoimentos', 'Contato']
  const navIds = ['hero', 'sobre', 'vantagens', 'produtos' , 'depoimentos', 'contato']

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgb(254,182,32)] shadow-2xl' : 'bg-[rgb(254,182,32)]'}`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2Flogomarca.png"
                alt="Pro Escape"
                className="h-14 lg:h-16 w-auto"
              />
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link, index) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(navIds[index])}
                  className="text-black hover:text-white transition-colors duration-300 font-bold text-base relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Contatos Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="https://wa.me/5579932152915"
                className="flex items-center space-x-2 text-black hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="text-sm font-bold">+55 79 3215-2915</span>
              </a>
              <a
                href="mailto:proescape@prorscape.com.br"
                className="flex items-center space-x-2 text-black hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-black p-2 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-lg z-40 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '96px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link, index) => (
            <button
              key={link}
              onClick={() => {
                scrollToSection(navIds[index])
                setMobileMenuOpen(false)
              }}
              className="text-white text-3xl hover:text-[rgb(254,182,32)] transition-colors duration-300 font-medium"
            >
              {link}
            </button>
          ))}
          <a 
            href="https://wa.me/5579932152915" 
            className="flex items-center space-x-3 text-[rgb(254,182,32)] text-xl mt-8"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>+55 79 3215-2915</span>
          </a>
        </nav>
      </div>
    </header>
  )
}