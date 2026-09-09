import logo from '../assets/images/logo-wanessa.jpg'
import { email, instagramHandle, instagramUrl, phoneDisplay, phoneHref } from '../data/contact.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="" />
          <p>Fonoaudiologia com técnica, acolhimento e leveza em Goiânia.</p>
        </div>

        <div>
          <strong>Contato</strong>
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>

        <div>
          <strong>Redes e registro</strong>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            {instagramHandle}
          </a>
          <span>CRFa 5-12824</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Wanessa Ferreira.</span>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  )
}

export default Footer
