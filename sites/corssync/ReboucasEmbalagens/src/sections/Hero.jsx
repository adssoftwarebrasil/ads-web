import { ArrowDown, ArrowUpRight, Check, MapPin } from "lucide-react";
import cupsImage from "../assets/copos-descartaveis.png";
import mealsImage from "../assets/marmitas-refeicoes.png";
import { contact } from "../data/siteData";

function Hero() {
  return (
    <main className="hero" id="inicio">
      <div className="hero__shape hero__shape--one" aria-hidden="true" />
      <div className="hero__shape hero__shape--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__kicker">
            <span className="hero__kicker-icon">
              <Check size={15} strokeWidth={3} aria-hidden="true" />
            </span>
            Empresa familiar desde 1997
          </div>
          <h1>
            A embalagem certa
            <span>para cada venda.</span>
          </h1>
          <p className="hero__lead">
            Atacado e varejo de embalagens, descartáveis e itens para a rotina do seu negócio em Feira de Santana.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href={contact.whatsapp} target="_blank" rel="noreferrer">
              Consultar produtos
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="button button--outline" href="#produtos">
              Explorar categorias
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__meta">
            <div>
              <strong>Atacado</strong>
              <span>e varejo</span>
            </div>
            <div>
              <strong>Desde</strong>
              <span>1997</span>
            </div>
            <a href={contact.maps} target="_blank" rel="noreferrer">
              <MapPin size={19} aria-hidden="true" />
              <span>
                Centro
                <small>Feira de Santana</small>
              </span>
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Seleção de embalagens da Rebouças">
          <div className="hero__image-card hero__image-card--main">
            <img src={cupsImage} alt="Copos descartáveis transparentes em diferentes tamanhos" />
            <span>Do pequeno ao grande</span>
          </div>
          <div className="hero__image-card hero__image-card--small">
            <img src={mealsImage} alt="Marmitas descartáveis prontas para servir refeições" />
          </div>
          <div className="hero__badge">
            <span>+</span>
            <strong>Variedade</strong>
            <small>para servir, vender e entregar</small>
          </div>
          <div className="hero__orbit" aria-hidden="true">
            <span>EMBALAGENS • DESCARTÁVEIS • REBOUÇAS •</span>
          </div>
        </div>
      </div>
      <div className="hero__ticker" aria-label="Principais linhas de produtos">
        <div className="hero__ticker-track">
          <span>Sacolas</span><i>✦</i><span>Copos</span><i>✦</i><span>Filme PVC</span><i>✦</i>
          <span>Marmitex</span><i>✦</i><span>Potes</span><i>✦</i><span>Limpeza</span><i>✦</i>
          <span>Sacolas</span><i>✦</i><span>Copos</span><i>✦</i><span>Filme PVC</span><i>✦</i>
          <span>Marmitex</span><i>✦</i><span>Potes</span><i>✦</i><span>Limpeza</span><i>✦</i>
        </div>
      </div>
    </main>
  );
}

export default Hero;
