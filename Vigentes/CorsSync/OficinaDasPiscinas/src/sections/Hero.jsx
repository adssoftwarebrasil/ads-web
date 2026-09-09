import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { contact, heroMedia } from "../data/siteData";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__line hero__line--one" aria-hidden="true" />
      <div className="hero__line hero__line--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            30 anos de experiência
          </div>

          <h1>
            Piscina pronta
            <span> para viver.</span>
            <em>Técnica para durar.</em>
          </h1>

          <p className="hero__lead">
            Limpeza, manutenção, aquecimento e sistemas completos para você
            aproveitar a água com tranquilidade.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary button--large"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar avaliação
              <ArrowUpRight size={19} />
            </a>
            <a className="hero__text-link" href="#solucoes">
              Conheça as soluções
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="hero__trust">
            <CheckCircle2 size={19} aria-hidden="true" />
            <span>
              Atendimento de segunda a sexta, em horário comercial
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Trabalhos da Oficina das Piscinas">
          <figure className="hero__photo hero__photo--main">
            <img
              src={heroMedia.main}
              alt="Piscina residencial com vista para um lago"
            />
            <figcaption>
              <span>Resultado</span>
              Ambientes prontos para aproveitar
            </figcaption>
          </figure>

          <figure className="hero__photo hero__photo--detail">
            <img
              src={heroMedia.detail}
              alt="Casa de máquinas com tubulação organizada"
            />
            <figcaption>Precisão em cada conexão</figcaption>
          </figure>

          <figure className="hero__photo hero__photo--night">
            <img
              src={heroMedia.night}
              alt="Piscina com iluminação noturna violeta"
            />
          </figure>

          <div className="hero__experience" aria-label="30 anos de experiência">
            <strong>30</strong>
            <span>anos de cuidado técnico</span>
          </div>
        </div>
      </div>

      <div className="container hero__proof" aria-label="Diferenciais">
        <div>
          <strong>Água</strong>
          <span>limpa e bem cuidada</span>
        </div>
        <div>
          <strong>Sistemas</strong>
          <span>instalados com atenção</span>
        </div>
        <div>
          <strong>Conforto</strong>
          <span>para usar o ano inteiro</span>
        </div>
      </div>
    </section>
  );
}
