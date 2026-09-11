import { Instagram, Mail, MessageCircle } from 'lucide-react'
import logo from '../assets/images/logo-barzin.png'
import { contact } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Logotipo do Barzin de Esquina" />
          <p>Comida gostosa, bebida gelada e bons momentos em Trindade.</p>
        </div>

        <div>
          <h2>Chega mais</h2>
          <a href="#cardapio">Cardápio</a>
          <a href="#historia">Nossa história</a>
          <a href="#galeria">O Barzin</a>
          <a href="#visite">Como chegar</a>
        </div>

        <div>
          <h2>Fale com a gente</h2>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" /> {contact.whatsappLabel}
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={17} aria-hidden="true" /> {contact.instagramLabel}
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={17} aria-hidden="true" /> Enviar e-mail
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Barzin de Esquina.</p>
        <p>Vai ver se eu tô na esquina.</p>
      </div>
    </footer>
  )
}

export default Footer
