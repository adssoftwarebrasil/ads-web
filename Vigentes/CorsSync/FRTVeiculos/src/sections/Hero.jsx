import { ArrowDown, ArrowUpRight, Check, MapPin, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { brand, contact, whatsappUrl } from "../data/siteData";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal>
            <p className="hero-kicker">
              <span>FRT</span>
              Compra • venda • troca
            </p>
            <h1>
              Seu próximo carro começa com uma <em>escolha segura.</em>
            </h1>
            <p className="hero-lead">
              Seminovos selecionados, atendimento próximo e negociação clara para você avançar com confiança.
            </p>
            <div className="hero-actions">
              <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} aria-hidden="true" />
                Ver veículos disponíveis
              </a>
              <a className="button button--ghost" href={contact.directions} target="_blank" rel="noreferrer">
                <MapPin size={19} aria-hidden="true" />
                Como chegar
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-checks" delay={120}>
            <span>
              <Check size={16} aria-hidden="true" /> Laudo cautelar
            </span>
            <span>
              <Check size={16} aria-hidden="true" /> Atendimento direto
            </span>
            <span>
              <Check size={16} aria-hidden="true" /> Opções de financiamento
            </span>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={100}>
          <div className="hero-photo">
            <img
              src={brand.heroImage}
              alt="Fachada da FRT Veículos com carros expostos"
              width="1280"
              height="960"
              fetchPriority="high"
            />
            <div className="hero-photo__shade" aria-hidden="true" />
            <div className="hero-photo__location">
              <MapPin size={17} aria-hidden="true" />
              <span>
                <small>Estamos em</small>
                {contact.city}
              </span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </div>
          </div>
          <div className="hero-badge" aria-label="Três anos de mercado">
            <strong>3</strong>
            <span>anos no mercado</span>
          </div>
          <div className="hero-slash" aria-hidden="true" />
        </Reveal>
      </div>

      <div className="container hero-footer">
        <a href="#veiculos">
          <ArrowDown size={18} aria-hidden="true" />
          Descubra a FRT
        </a>
        <p>VEÍCULOS PARA CADA NOVO CAMINHO</p>
      </div>
    </section>
  );
}

export default Hero;
