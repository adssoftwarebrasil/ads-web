import { ArrowDownRight, Clock3, MapPin, MessageCircle } from 'lucide-react'
import { mapsUrl, photo, whatsappUrl } from '../data/storeData.js'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__copy reveal">
          <div className="eyebrow eyebrow--light">
            <span className="eyebrow__mark" aria-hidden="true" />
            Sua ferragista na região Noroeste
          </div>
          <h1>
            Fera em tudo.
            <span>Perto de você.</span>
          </h1>
          <p className="hero__lead">
            Ferragens, ferramentas, utilidades e soluções para a casa, o trabalho e o dia a dia —
            tudo em um só lugar.
          </p>

          <div className="hero__actions">
            <a className="button button--orange" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
            <a className="button button--outline-light" href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={20} aria-hidden="true" />
              Como chegar
            </a>
          </div>

          <div className="hero__quick-info" aria-label="Informações da loja">
            <div>
              <Clock3 size={19} aria-hidden="true" />
              <span>
                Atendimento
                <strong>08h às 19h</strong>
              </span>
            </div>
            <div>
              <MapPin size={19} aria-hidden="true" />
              <span>
                Goiânia
                <strong>Região Noroeste</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-collage reveal" aria-label="Fotos da Ferragista Fera em Tudo">
          <figure className="hero-collage__main">
            <img
              src={photo('fachada-02.jpeg')}
              alt="Fachada da Ferragista Fera em Tudo"
              fetchPriority="high"
            />
            <figcaption>Av. São Domingos</figcaption>
          </figure>
          <figure className="hero-collage__detail hero-collage__detail--top">
            <img src={photo('loja-ampla-02.jpeg')} alt="Interior amplo da loja" />
          </figure>
          <figure className="hero-collage__detail hero-collage__detail--bottom">
            <img src={photo('ferramentas-manuais.jpeg')} alt="Grande variedade de ferramentas" />
          </figure>
          <div className="hero-collage__stamp" aria-hidden="true">
            <span>de tudo</span>
            <strong>um pouco</strong>
            <ArrowDownRight />
          </div>
        </div>
      </div>

      <div className="hero-strip" aria-label="Diferenciais">
        <div className="hero-strip__track">
          <span>Variedade de verdade</span>
          <i aria-hidden="true" />
          <span>Preços justos</span>
          <i aria-hidden="true" />
          <span>Atendimento que ajuda</span>
          <i aria-hidden="true" />
          <span>Praticidade em um só lugar</span>
        </div>
      </div>
    </section>
  )
}
