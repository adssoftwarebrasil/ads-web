import { ArrowDown, ArrowRight, Instagram, MapPin } from 'lucide-react'
import { contact, heroImages, productNames, whatsappLink } from '../data/catalog.js'

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Agro • Horse • Western</p>
          <h1 id="hero-title">O western que a gente <em>vive.</em></h1>
          <p className="hero-lead">
            Moda country completa, escolhida com conhecimento por quem cresceu entre o campo,
            os cavalos e o rodeio.
          </p>
          <div className="hero-actions">
            <a
              className="button button-rust"
              href={whatsappLink('Olá! Quero conhecer as novidades da AgroHorse Western.')}
              target="_blank"
              rel="noreferrer"
            >
              Ver novidades no WhatsApp <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href={contact.instagram} target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" /> Seguir no Instagram
            </a>
          </div>
          <div className="hero-facts" aria-label="Destaques da AgroHorse Western">
            <div><strong>12 anos</strong><span>de história</span></div>
            <div><strong>Nacionais + importados</strong><span>marcas reconhecidas</span></div>
            <div><strong><MapPin size={16} aria-hidden="true" /> Caldas Novas</strong><span>loja física</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Interior e produtos da AgroHorse Western">
          <div className="hero-image-main">
            <img src={heroImages.main} alt="Interior da AgroHorse Western com botinas e camisas" />
            <div className="image-stamp" aria-hidden="true">
              <span>Feito com</span><strong>Raiz</strong><small>desde o primeiro dia</small>
            </div>
          </div>
          <div className="hero-image-detail">
            <img src={heroImages.detail} alt="Expositor com variedade de chapéus country" />
          </div>
          <div className="hero-image-badge">
            <img src={heroImages.badge} alt="Bota country Durango" />
            <span>Autenticidade<br />em cada detalhe</span>
          </div>
        </div>
      </div>

      <div className="product-ribbon" aria-label="Categorias disponíveis">
        <div className="ribbon-track">
          {[...productNames, ...productNames].map((name, index) => (
            <span key={`${name}-${index}`}>{name}<i aria-hidden="true">✦</i></span>
          ))}
        </div>
      </div>
      <a className="scroll-cue" href="#colecoes" aria-label="Ir para as coleções">
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
