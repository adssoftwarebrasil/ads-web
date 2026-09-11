import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import heroProduct from '../assets/products/solar-hero.jpg'
import framesPair from '../assets/products/frames-pair.jpg'
import { links } from '../data/siteData.js'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Óptica em Trindade · GO</p>
          <h1>
            Seu olhar.
            <span>Seu estilo.</span>
          </h1>
          <p className="hero__lead">
            Óculos e lentes escolhidos com atenção para unir qualidade, conforto e personalidade em cada detalhe.
          </p>

          <div className="hero__actions">
            <a className="button button--sun" href={links.whatsapp} target="_blank" rel="noreferrer">
              Encontrar meus óculos
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="button button--ghost-light" href={links.exam} target="_blank" rel="noreferrer">
              Agendar exame de vista
            </a>
          </div>

          <div className="hero__quick-info" aria-label="Informações rápidas">
            <span>
              <MapPin size={17} aria-hidden="true" />
              Vila Jardim Salvador
            </span>
            <span>
              <CalendarDays size={17} aria-hidden="true" />
              Atendimento de segunda a sábado
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Seleção de óculos da Óptica Renascer">
          <div className="hero__sun-ring" aria-hidden="true" />
          <figure className="hero__main-photo">
            <img src={heroProduct} alt="Óculos de sol dourado da seleção da Óptica Renascer" />
          </figure>
          <figure className="hero__small-photo">
            <img src={framesPair} alt="Armação de grau e óculos de sol disponíveis na Óptica Renascer" />
          </figure>
          <div className="hero__seal" aria-hidden="true">
            <span>R</span>
            <small>novo olhar</small>
          </div>
        </div>
      </div>
      <div className="hero__ticker" aria-label="Principais produtos">
        <div>
          <span>Óculos de grau</span><i aria-hidden="true" />
          <span>Óculos de sol</span><i aria-hidden="true" />
          <span>Lentes multifocais</span><i aria-hidden="true" />
          <span>Armações para toda a família</span><i aria-hidden="true" />
          <span>Ray-Ban e Oakley</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
