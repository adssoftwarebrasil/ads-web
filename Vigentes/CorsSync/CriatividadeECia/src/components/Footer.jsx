import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import brandLogo from '../assets/brand/criatividade-e-cia.webp'
import { INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from '../constants.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-brand__logo">
            <img src={brandLogo} alt="Criatividade & Cia" />
          </span>
          <p>Papelaria, presentes, informática, brinquedos e utilidades em Anicuns.</p>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <a href="#departamentos">Departamentos</a>
          <a href="#vitrine">Vitrine</a>
          <a href="#historia">Nossa história</a>
          <a href="#contato">Como chegar</a>
        </div>

        <div className="footer-column footer-column--contact">
          <h2>Fale com a loja</h2>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> (64) 99925-7291
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram aria-hidden="true" /> @criatividadecia.anicuns
          </a>
          <a href="mailto:criatividadeecia@outlook.com">
            <Mail aria-hidden="true" /> criatividadeecia@outlook.com
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" /> Rua Arthur Bernardes, 1236
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Criatividade & Cia. Todos os direitos reservados.</p>
        <p>Desde 2004 fazendo parte de Anicuns.</p>
      </div>
    </footer>
  )
}

export default Footer
