import { Camera, Mail, MessageCircle, UsersRound } from 'lucide-react'
import Brand from './Brand'
import { contact, createWhatsAppLink } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand inverse />
          <p>Conforto bem escolhido para transformar seus momentos de descanso.</p>
        </div>
        <div>
          <h2 className="footer__heading">Navegue</h2>
          <div className="footer__links">
            <a href="#produtos">Produtos</a>
            <a href="#vitrine">Vitrine</a>
            <a href="#historia">Nossa história</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
        <div>
          <h2 className="footer__heading">Fale com a Duarte</h2>
          <div className="footer__links">
            <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={17} aria-hidden="true" /> {contact.email}
            </a>
          </div>
          <div className="footer__socials" aria-label="Redes sociais">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Duarte Colchões">
              <Camera size={20} />
            </a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook da Duarte Colchões">
              <UsersRound size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Duarte Colchões.</p>
        <p>Qualidade, transparência e atendimento próximo.</p>
      </div>
    </footer>
  )
}
