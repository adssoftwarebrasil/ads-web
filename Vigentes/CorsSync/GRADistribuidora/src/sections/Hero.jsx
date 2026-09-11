import { ArrowDownRight, ArrowRight, Clock3, MapPin } from 'lucide-react'
import aerialImage from '../assets/gra-unidade-aerea.jpeg'
import facadeImage from '../assets/gra-fachada.jpeg'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span /> Desde 2017 em Trindade — GO</p>
          <h1>
            Peças e força para manter seu veículo <em>em movimento.</em>
          </h1>
          <p className="hero-lead">
            Distribuição de peças, mecânica de linha leve e pesada e guincho 24 horas para você seguir com segurança.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://wa.me/5562991073396?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20GRA%20e%20gostaria%20de%20atendimento."
              target="_blank"
              rel="noreferrer"
            >
              Solicitar atendimento <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#servicos">
              Ver serviços <ArrowDownRight size={19} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta" aria-label="Informações rápidas">
            <div>
              <MapPin aria-hidden="true" />
              <span><strong>Atendimento regional</strong>Trindade, Goiânia e região</span>
            </div>
            <div>
              <Clock3 aria-hidden="true" />
              <span><strong>Horário</strong>08h–12h • 13h–18h</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <figure className="hero-main-image">
            <img src={aerialImage} alt="Vista aérea da unidade da GRA Distribuidora em Trindade" />
          </figure>
          <figure className="hero-detail-image">
            <img src={facadeImage} alt="Fachada da oficina e distribuidora GRA" />
          </figure>
          <div className="hero-stamp">
            <strong>Leve</strong>
            <span>•</span>
            <strong>Pesada</strong>
            <span>•</span>
            <strong>24h</strong>
          </div>
          <div className="hero-corner-label">Carro • Ônibus • Máquinas</div>
        </div>
      </div>
      <a className="scroll-cue" href="#servicos" aria-label="Ir para os serviços">
        <span>Explore</span><ArrowDownRight aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
