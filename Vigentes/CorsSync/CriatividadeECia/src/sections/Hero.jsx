import { ArrowRight, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import bubblesImage from '../assets/products/brinquedos-bolhas-de-sabao.webp'
import speakerImage from '../assets/products/informatica-caixa-de-som-rosa.webp'
import mugsImage from '../assets/products/presentes-canecas-de-vidro.webp'
import Reveal from '../components/Reveal.jsx'
import { WHATSAPP_URL } from '../constants.js'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <span className="hero__shape hero__shape--one" aria-hidden="true" />
      <span className="hero__shape hero__shape--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal>
            <span className="hero__eyebrow">
              <Sparkles aria-hidden="true" /> Desde 2004 em Anicuns
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1>
              Tem de tudo.
              <span>E tem aquele atendimento que faz você voltar.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero__lead">
              Papelaria, presentes, informática, brinquedos e utilidades para estudar,
              presentear, brincar e facilitar a rotina — tudo em um só lugar.
            </p>
          </Reveal>

          <Reveal className="hero__actions" delay={220}>
            <a className="button button--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Falar no WhatsApp
            </a>
            <a className="button button--ghost" href="#vitrine">
              Ver novidades <ArrowRight aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="hero__location" delay={280}>
            <MapPin aria-hidden="true" />
            <span>
              <strong>Rua Arthur Bernardes, 1236</strong>
              Anicuns, Goiás
            </span>
          </Reveal>
        </div>

        <Reveal className="hero-collage" delay={120}>
          <div className="hero-collage__main">
            <img
              src={bubblesImage}
              alt="Produtos infantis coloridos na Criatividade & Cia"
              fetchPriority="high"
            />
            <span className="hero-collage__label">Novidades para todas as idades</span>
          </div>

          <div className="hero-collage__small hero-collage__small--top">
            <img src={speakerImage} alt="Caixa de som rosa com microfone" />
          </div>

          <div className="hero-collage__small hero-collage__small--bottom">
            <img src={mugsImage} alt="Canecas e potes de vidro estampados" />
          </div>

          <div className="hero-collage__stamp" aria-hidden="true">
            <span>muita</span>
            variedade
          </div>
        </Reveal>
      </div>

      <div className="container trust-strip" aria-label="Diferenciais da loja">
        <div>
          <strong>20+ anos</strong>
          <span>fazendo parte de Anicuns</span>
        </div>
        <div>
          <strong>Variedade de verdade</strong>
          <span>soluções para diferentes momentos</span>
        </div>
        <div>
          <strong>Atendimento próximo</strong>
          <span>atenção que a cidade conhece</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
