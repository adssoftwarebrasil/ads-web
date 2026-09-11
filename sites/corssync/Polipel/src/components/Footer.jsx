import { Instagram, MapPin, Phone } from 'lucide-react'
import { INSTAGRAM_LINK, PHONE_DISPLAY, PHONE_LINK } from '../data.js'
import { Brand } from './Brand.jsx'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#inicio" aria-label="Polipel — voltar ao início"><Brand inverse /></a>
          <p>Papelaria e embalagens para Goiânia e região.</p>
        </div>
        <div className="footer__links">
          <a href={PHONE_LINK}><Phone aria-hidden="true" /> {PHONE_DISPLAY}</a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /> Instagram</a>
          <span><MapPin aria-hidden="true" /> Setor Centro-Oeste · Goiânia</span>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Polipel Embalagens e Papelaria.</span>
        <span>Atendimento para Goiânia e região.</span>
      </div>
    </footer>
  )
}

