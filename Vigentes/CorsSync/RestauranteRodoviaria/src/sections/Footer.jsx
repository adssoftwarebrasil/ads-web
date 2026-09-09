import { Clock3, Instagram, MapPin } from 'lucide-react'
import { images, site } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
          <img src={images.logo} alt="Logo do Restaurante Rodoviária" />
        </a>
        <div className="footer-copy">
          <p className="eyebrow">Restaurante Rodoviária</p>
          <h2>Comida caseira em Caldas Novas.</h2>
          <p>Há 13 anos servindo almoço fresquinho com sabor e qualidade.</p>
        </div>
        <div className="footer-links">
          <a href={site.mapsLink} target="_blank" rel="noreferrer">
            <MapPin size={18} aria-hidden="true" />
            {site.address}
          </a>
          <span>
            <Clock3 size={18} aria-hidden="true" />
            {site.hours}
          </span>
          <a href={site.instagramLink} target="_blank" rel="noreferrer">
            <Instagram size={18} aria-hidden="true" />
            {site.instagram}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Restaurante Rodoviária.</p>
        <a href="#inicio">Voltar ao topo</a>
      </div>
    </footer>
  )
}

export default Footer
