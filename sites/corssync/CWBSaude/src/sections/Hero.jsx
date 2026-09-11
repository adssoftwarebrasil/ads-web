import { useEffect, useRef, useState } from 'react'
import { ArrowDown, CirclePause, CirclePlay, MessageCircle, ShieldCheck } from 'lucide-react'
import heroPoster from '../assets/fachada-cwb.jpg'
import heroVideo from '../assets/atendimento-cwb.mp4'
import { whatsappUrl } from '../data/siteData.js'

function Hero() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (playing) {
      video.play().catch(() => setPlaying(false))
    } else {
      video.pause()
    }
  }, [playing])

  return (
    <section className="hero" id="inicio">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__badge">
            <ShieldCheck size={17} aria-hidden="true" />
            Corretora autorizada Hapvida em Goiânia
          </span>
          <h1>
            O plano certo para <em>cuidar do que importa.</em>
          </h1>
          <p className="hero__lead">
            Consultoria personalizada para você, sua família ou sua empresa escolher com mais segurança, clareza e tranquilidade.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" />
              Quero minha cotação
            </a>
            <a className="button button--ghost" href="#planos">
              Ver opções de planos
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <dl className="hero__stats" aria-label="Números da CWB Saúde">
            <div>
              <dt>9 anos</dt>
              <dd>de experiência</dd>
            </div>
            <div>
              <dt>+6 mil</dt>
              <dd>contratos vendidos</dd>
            </div>
            <div>
              <dt>Completo</dt>
              <dd>suporte na contratação</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__video-shell">
            <video
              ref={videoRef}
              className="hero__video"
              src={heroVideo}
              poster={heroPoster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Apresentação da CWB Saúde Corretora de Planos de Saúde"
            />
            <button
              className="hero__video-toggle"
              type="button"
              onClick={() => setPlaying((current) => !current)}
              aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
            >
              {playing ? <CirclePause aria-hidden="true" /> : <CirclePlay aria-hidden="true" />}
            </button>
            <div className="hero__location-card">
              <span>Atendimento em</span>
              <strong>Goiânia e Aparecida</strong>
            </div>
          </div>
          <div className="hero__cross" aria-hidden="true">+</div>
          <div className="hero__seal" aria-hidden="true">
            <span>Cuidado</span>
            <strong>com você</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
