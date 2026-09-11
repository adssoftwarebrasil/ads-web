import { ArrowDown, ArrowUpRight, Cross, MapPin, SmilePlus } from "lucide-react";
import facade from "../assets/fachada-renova.jpg";
import { whatsappUrl } from "../data/content";

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={facade}
        alt="Fachada da Renova Clínica Integrada em Campo Novo do Parecis"
        fetchPriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-linework" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light hero-kicker">
            <span /> Medicina e odontologia integradas
          </p>
          <h1 id="hero-title">
            Cuidado por inteiro.
            <em> Confiança em cada detalhe.</em>
          </h1>
          <p className="hero-lead">
            Especialidades médicas e odontológicas reunidas em uma clínica de alto padrão,
            com estrutura planejada para acolher você.
          </p>
          <div className="hero-actions">
            <a
              className="button button-gold"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Agendar uma avaliação
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#especialidades">
              Conhecer especialidades
            </a>
          </div>
        </div>

        <div className="hero-facts" aria-label="Destaques da clínica">
          <div className="hero-fact">
            <div className="hero-fact-icon">
              <SmilePlus aria-hidden="true" />
            </div>
            <div>
              <strong>Odontologia</strong>
              <span>Saúde, função e estética</span>
            </div>
          </div>
          <div className="hero-fact">
            <div className="hero-fact-icon">
              <Cross aria-hidden="true" />
            </div>
            <div>
              <strong>Medicina</strong>
              <span>Cuidado integrado</span>
            </div>
          </div>
          <div className="hero-fact">
            <div className="hero-fact-icon">
              <MapPin aria-hidden="true" />
            </div>
            <div>
              <strong>Campo Novo do Parecis</strong>
              <span>Estrutura de alto padrão</span>
            </div>
          </div>
        </div>

        <a className="hero-scroll" href="#especialidades" aria-label="Ir para especialidades">
          <span>Explore</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
