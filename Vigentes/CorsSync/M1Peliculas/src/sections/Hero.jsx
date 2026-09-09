import { ArrowDown, Crosshair, ShieldCheck, MapPin } from "lucide-react";
import carImage from "../assets/bmw-na-loja.jpeg";
import WhatsAppLink from "../components/WhatsAppLink";

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-photo">
          <img
            src={carImage}
            alt="BMW com películas nos vidros na oficina da M1 Películas"
            width="720"
            height="1280"
            fetchPriority="high"
          />
          <div className="photo-caption">
            <span className="red-square" /> CUIDADO REAL. EM CADA DETALHE.
          </div>
          <span className="photo-index" aria-hidden="true">
            M1 / 01
          </span>
        </div>
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> ESPECIALISTAS EM PELÍCULAS AUTOMOTIVAS
            </p>
            <h1 id="hero-title">
              PROTEÇÃO QUE
              <br />
              VOCÊ SENTE.
              <br />
              <em>ESTILO QUE SE VÊ.</em>
            </h1>
            <p className="hero-description">
              Seu carro merece o melhor em cada detalhe. Películas de alta
              qualidade, corte computadorizado e a experiência de quem entende
              do assunto.
            </p>
            <div className="hero-actions">
              <WhatsAppLink />
              <a className="text-link" href="#peliculas">
                Encontre sua película <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-brands">
              <span className="three-m">3M</span>
              <span className="authorized-label">
                APLICADOR
                <br />
                <strong>AUTORIZADO</strong>
              </span>
              <span className="brand-divider" />
              <span className="across">
                ACROSS<span>WINDOW FILMS</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="proof-strip">
        <div className="container proof-grid">
          <div className="proof-experience">
            <strong>
              20<span>+</span>
            </strong>
            <span>
              anos de experiência
              <br />
              no ramo de películas
            </span>
          </div>
          <div className="proof-item">
            <ShieldCheck aria-hidden="true" />
            <p>
              <strong>Mais de 10 anos</strong>
              <span>atendendo concessionárias</span>
            </p>
          </div>
          <div className="proof-item">
            <Crosshair aria-hidden="true" />
            <p>
              <strong>Corte computadorizado</strong>
              <span>precisão para o seu veículo</span>
            </p>
          </div>
          <div className="proof-item">
            <MapPin aria-hidden="true" />
            <p>
              <strong>No coração da Pedra Branca</strong>
              <span>pertinho de você, em Palhoça</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
