import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'
import logo from '../assets/photos/logo-fera-em-tudo.jpeg'
import { mapsUrl, whatsappUrl } from '../data/storeData.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={logo} alt="Ferragista Fera em Tudo" />
          <p>Tudo o que você precisa, em um só lugar.</p>
        </div>

        <div className="site-footer__links" aria-label="Contatos">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            (62) 99257-2952
          </a>
          <a href="mailto:nobre.arte@hotmail.com">
            <Mail size={18} aria-hidden="true" />
            nobre.arte@hotmail.com
          </a>
          <a href="https://www.instagram.com/feraemtudo.ferragista/" target="_blank" rel="noreferrer">
            <AtSign size={18} aria-hidden="true" />
            @feraemtudo.ferragista
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={18} aria-hidden="true" />
            Av. São Domingos, Qd. 19, Lote 27
          </a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <small>© {new Date().getFullYear()} Ferragista Fera em Tudo.</small>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}
