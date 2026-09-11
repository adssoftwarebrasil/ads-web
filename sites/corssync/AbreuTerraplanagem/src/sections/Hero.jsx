import { ArrowDown, ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import heroImage from "../assets/images/hero-operacao.webp";
import { whatsappUrl } from "../data/siteData";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span aria-hidden="true" />
            Locação de máquinas pesadas
          </p>
          <h1>
            Aumente sua produtividade{" "}
            <em>com a frota mais robusta do mercado.</em>
          </h1>
          <p className="hero__lead">
            Tratores de esteira e escavadeiras hidráulicas com atendimento ágil e suporte especializado.
          </p>
          <div className="hero__actions">
            <a className="button button--yellow" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Consultar disponibilidade
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#maquinas">
              Conheça as máquinas
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__location">
            <MapPin size={20} aria-hidden="true" />
            <span>
              Base em Goiânia
              <small>Atendimento em Goiás, DF, divisas e consultas para outros estados</small>
            </span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src={heroImage}
              alt="Trator de esteira da Abreu Terraplenagem em operação"
              fetchpriority="high"
            />
            <span className="hero__photo-label">Equipamento em campo</span>
          </div>
          <div className="hero__stamp" aria-label="Empresa fundada em 1977">
            <strong>1977</strong>
            <span>experiência que move terra</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
