import { ArrowUp, Clock3, Facebook, Instagram, Mail, MapPin } from 'lucide-react'
import BrandMark from './BrandMark.jsx'

const footerNav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'A Flex', href: '#sobre' },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand">
          <BrandMark />
          <p>Estética automotiva e detailing premium com técnica, proteção e acabamento impecável.</p>
          <span className="site-footer__status"><i /> Atendimento na Barra Funda</span>
        </div>

        <div className="site-footer__column">
          <strong>Navegue</strong>
          {footerNav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>

        <div className="site-footer__column site-footer__contact">
          <strong>Contato</strong>
          <a href="mailto:flexgaragem01@gmail.com"><Mail aria-hidden="true" /> flexgaragem01@gmail.com</a>
          <a href="#localizacao"><MapPin aria-hidden="true" /> R. do Bosque, 660</a>
          <span><Clock3 aria-hidden="true" /> Seg–Sex · 08:30–18:00</span>
        </div>

        <div className="site-footer__column">
          <strong>Acompanhe</strong>
          <a href="https://www.instagram.com/flexgaragem/" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /> Instagram</a>
          <a href="https://www.facebook.com/flexgaragem" target="_blank" rel="noreferrer"><Facebook aria-hidden="true" /> Facebook</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Flex Garagem. Todos os direitos reservados.</p>
        <p>Barra Funda · São Paulo</p>
        <button type="button" onClick={scrollToTop} aria-label="Voltar ao topo">
          Voltar ao topo <ArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
