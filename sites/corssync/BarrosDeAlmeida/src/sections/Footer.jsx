import { ArrowUp } from 'lucide-react'
import { assets, contact } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__brand" href="#inicio" aria-label="Voltar ao início">
          <img src={assets.logoAModerna} alt="" />
          <span>
            <strong>Padaria A Moderna</strong>
            <small>Há mais de 43 anos fazendo parte da sua história.</small>
          </span>
        </a>
        <div className="footer__meta">
          <span>{contact.address}</span>
          <span>{contact.phoneDisplay}</span>
        </div>
        <a className="footer__top" href="#inicio" aria-label="Voltar ao topo">
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
