import {
  ArrowDown,
  ArrowUpRight,
  BatteryCharging,
  Check,
  MapPin,
  Sun,
  Zap,
} from "lucide-react";
import heroImage from "../assets/carport-solar.webp";
import WhatsAppIcon from "../components/WhatsAppIcon.jsx";
import { whatsappUrl } from "../data/company.js";

export default function Hero() {
  return (
    <section className="hero-shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero">
        <img
          className="hero-image"
          src={heroImage}
          alt="Representação de cobertura solar integrada a estações de recarga para veículos elétricos"
          width="1816"
          height="1136"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">
            <span className="status-dot" /> ENERGIA SOLAR + MOBILIDADE ELÉTRICA
          </p>
          <h1 id="hero-title">
            Seu futuro é solar.
            <br />E <span>elétrico.</span>
          </h1>
          <p className="hero-description">
            Energia para transformar seu imóvel.
            <br className="desktop-break" /> Inteligência para mover você mais
            longe.
          </p>
          <p className="hero-support">
            Projetos completos de energia solar e recarga veicular para quem
            quer dar o próximo passo.
          </p>
          <div className="hero-actions">
            <a
              className="button button-gold"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={21} /> Solicitar meu projeto{" "}
              <ArrowUpRight size={19} />
            </a>
            <a className="hero-explore" href="#solucoes">
              Explore as soluções <ArrowDown size={18} />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={15} />
            <span>Brasília e Distrito Federal</span>
            <span className="location-divider" /> <span>Desde 2020</span>
          </div>
        </div>
        <div
          className="connection-card"
          aria-label="Integração entre geração solar, energia e recarga"
        >
          <div className="connection-icons">
            <Sun />
            <span />
            <Zap />
            <span />
            <BatteryCharging />
          </div>
          <p>
            Do sol à recarga.
            <br />
            <strong>Tudo conectado.</strong>
          </p>
          <span className="connection-note">
            Uma visão completa da sua energia.
          </span>
        </div>
        <span className="image-credit">
          Imagem ilustrativa do portfólio Premium
        </span>
      </div>
      <div className="hero-highlights">
        <p>
          <span className="highlight-icon">
            <Sun size={20} />
          </span>
          Gere sua própria energia
        </p>
        <p>
          <span className="highlight-icon">
            <BatteryCharging size={20} />
          </span>
          Conecte-se à mobilidade elétrica
        </p>
        <p>
          <span className="highlight-icon">
            <Check size={20} />
          </span>
          Conte com um projeto personalizado
        </p>
      </div>
    </section>
  );
}
