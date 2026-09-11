import { ExternalLink, Phone } from 'lucide-react'
import logo from '../assets/logo-casa-das-oficinas.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" aria-label="Voltar ao início">
            <img src={logo} alt="Casa das Oficinas" />
          </a>
          <p>Autopeças, distribuição e serviços automotivos em Feira de Santana.</p>
        </div>

        <div className="footer__links">
          <strong>Navegue</strong>
          <a href="#solucoes">Soluções</a>
          <a href="#pecas-servicos">Peças e serviços</a>
          <a href="#historia">Nossa história</a>
          <a href="#contato">Atendimento</a>
        </div>

        <div className="footer__links">
          <strong>Fale conosco</strong>
          <a href="tel:+557536148613"><Phone aria-hidden="true" /> (75) 3614-8613</a>
          <a href="https://www.instagram.com/casadasoficinas/" target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" /> Instagram
          </a>
          <a href="https://www.facebook.com/casadasoficinasfsa/" target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" /> Facebook
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>Casa das Oficinas · CNPJ 03.322.816/0001-20</span>
        <span>Feira de Santana · Bahia</span>
      </div>
    </footer>
  )
}
