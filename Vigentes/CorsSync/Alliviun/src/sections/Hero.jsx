import { ArrowDown, ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react'
import heroImage from '../assets/hero-massoterapia-optimized.jpg'

const whatsappUrl =
  'https://wa.me/5562993342454?text=Ol%C3%A1%2C%20Alliviun!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

const signals = ['Tensões que voltam', 'Movimentos limitados', 'Desconfortos na coluna']

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-shape hero-shape--one" aria-hidden="true" />
      <div className="hero-shape hero-shape--two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Quiropraxia &amp; liberação miofascial</span>
          <h1 id="hero-title">
            Seu corpo pede <em>alívio.</em> A gente escuta.
          </h1>
          <p className="hero-lead">
            Cuidado atento para reduzir desconfortos, recuperar movimentos e ajudar você a voltar à rotina com mais
            leveza.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" />
              Quero agendar
            </a>
            <a className="text-link" href="#tratamentos">
              Conheça os tratamentos
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-trust" aria-label="Diferenciais da Alliviun">
            <span>
              <CheckCircle2 aria-hidden="true" /> Atenção individual
            </span>
            <span>
              <CheckCircle2 aria-hidden="true" /> Cuidado sem enrolação
            </span>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-image-wrap">
            <img
              src={heroImage}
              alt="Profissional realizando uma sessão de massoterapia em ambiente acolhedor"
              fetchPriority="high"
            />
            <div className="hero-image-overlay" aria-hidden="true" />
            <div className="experience-card">
              <strong>≈ 8</strong>
              <span>anos de cuidado e experiência</span>
            </div>
          </div>
          <a className="image-link" href="#como-funciona">
            <span>Atenção que começa na escuta</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container signal-wrap" data-reveal>
        <div className="signal-intro">
          <span>Quando o corpo sinaliza,</span>
          <strong>vale a pena ouvir.</strong>
        </div>
        <div className="signal-list">
          {signals.map((signal, index) => (
            <span key={signal}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

