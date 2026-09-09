import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import heroImage from '../assets/hero-juridico.webp'
import { defaultWhatsAppLink } from '../data/siteData'

export default function Hero() {
  return (
    <section id="inicio" className="hero" style={{ '--hero-image': `url(${heroImage})` }}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__kicker">
            <span aria-hidden="true" />
            Advocacia e Consultoria Jurídica
          </div>
          <h1>
            Clareza para decidir.
            <em>Experiência para defender.</em>
          </h1>
          <p>
            Atuação jurídica técnica e personalizada nas áreas Cível, Trabalhista, Previdenciária, Criminal,
            Família e Inventários.
          </p>
          <div className="hero__actions">
            <a className="button button--gold" href={defaultWhatsAppLink} target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              Solicitar atendimento
            </a>
            <a className="button button--line" href="#areas">
              Conhecer áreas de atuação
              <ArrowDown size={18} />
            </a>
          </div>
        </div>

        <a className="hero__location" href="#atendimento" aria-label="Ver informações de atendimento">
          <span>Base em Nazário, Goiás</span>
          <strong>Atendimento em todo o Brasil</strong>
          <ArrowUpRight size={20} />
        </a>
      </div>

      <div className="container hero__facts" aria-label="Destaques do escritório">
        <div>
          <strong>Desde 2006</strong>
          <span>Experiência consolidada</span>
        </div>
        <div>
          <strong>Atuação ampla</strong>
          <span>Consultiva e contenciosa</span>
        </div>
        <div>
          <strong>Atendimento</strong>
          <span>Personalizado para cada caso</span>
        </div>
      </div>
    </section>
  )
}
