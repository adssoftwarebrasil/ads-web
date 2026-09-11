import { Gauge, Instagram, Mail, MessageCircle } from 'lucide-react'
import { site } from '../data/site'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#inicio" aria-label="Voltar ao início">
            <span className="brand-symbol" aria-hidden="true"><Gauge size={24} strokeWidth={2.4} /></span>
            <span className="brand-copy">
              <strong>Casa das Bombas</strong>
              <span>&amp; Compressores</span>
            </span>
          </a>
          <p>Equipamentos, peças e assistência técnica para manter sua operação em movimento.</p>
        </div>

        <div className="footer-column">
          <h2>Navegação</h2>
          <a href="#solucoes">Soluções</a>
          <a href="#assistencia">Assistência técnica</a>
          <a href="#atendimento">Como funciona</a>
          <a href="#localizacao">Onde estamos</a>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contato</h2>
          <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> {site.whatsappDisplay}
          </a>
          {site.emails.map((email) => (
            <a href={`mailto:${email}`} key={email}>
              <Mail size={17} /> {email}
            </a>
          ))}
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={17} /> {site.instagramHandle}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Casa das Bombas &amp; Compressores.</p>
        <p>Manaus · Amazonas</p>
      </div>
    </footer>
  )
}

export default Footer
