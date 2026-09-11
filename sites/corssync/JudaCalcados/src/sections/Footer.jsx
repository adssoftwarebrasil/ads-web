import { Facebook, Instagram } from 'lucide-react'
import logo from '../assets/brand/logo-juda.jpg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <a className="footer__brand" href="#inicio" aria-label="Voltar ao início">
          <img src={logo} alt="Judá Calçados" />
        </a>
        <p>Calçados, roupas e acessórios com qualidade, conforto e estilo para toda a família.</p>
        <div className="footer__social" aria-label="Redes sociais da Judá Calçados">
          <span><Instagram size={18} aria-hidden="true" /> Judá Calçados e acessórios</span>
          <span><Facebook size={18} aria-hidden="true" /> Judá Calçados</span>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Judá Calçados e Acessórios.</span>
        <span>Professor Jamil · Goiás</span>
      </div>
    </footer>
  )
}
