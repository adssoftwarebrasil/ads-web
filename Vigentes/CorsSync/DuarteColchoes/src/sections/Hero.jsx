import { ArrowDown, ArrowRight, BadgeCheck, MessageCircle } from 'lucide-react'
import heroImage from '../assets/quarto-floral.png'
import Reveal from '../components/Reveal'
import { createWhatsAppLink } from '../data/siteData'

export default function Hero() {
  return (
    <main id="inicio">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__accent hero__accent--one" aria-hidden="true" />
        <div className="hero__accent hero__accent--two" aria-hidden="true" />
        <div className="container hero__grid">
          <Reveal className="hero__content">
            <div className="hero__kicker">
              <BadgeCheck size={18} aria-hidden="true" />
              <span>Escolha com orientação de quem entende</span>
            </div>
            <h1 id="hero-title">
              Seu descanso
              <span>merece uma boa escolha.</span>
            </h1>
            <p className="hero__copy">
              Colchões, box, box baú, sofás e cabeceiras com qualidade, atendimento próximo e entrega rápida.
            </p>
            <div className="hero__actions">
              <a className="button button--red" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={19} aria-hidden="true" />
                Encontrar meu conforto
              </a>
              <a className="button button--ghost-light" href="#produtos">
                Conhecer as opções
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="hero__note">
              <span aria-hidden="true">01</span>
              <p>Atendimento que escuta, explica e ajuda você a comparar.</p>
            </div>
          </Reveal>

          <Reveal className="hero__visual" delay={100}>
            <div className="hero__image-wrap">
              <img src={heroImage} alt="Quarto moderno com colchão floral e iluminação aconchegante" />
              <div className="hero__image-shade" aria-hidden="true" />
            </div>
            <div className="hero__floating-card">
              <span className="hero__floating-icon" aria-hidden="true">✓</span>
              <div>
                <strong>Entrega rápida</strong>
                <span>Do atendimento ao seu descanso</span>
              </div>
            </div>
            <a className="hero__scroll" href="#confiança" aria-label="Ir para os diferenciais">
              <ArrowDown size={20} />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

