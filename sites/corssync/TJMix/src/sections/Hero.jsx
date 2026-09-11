import {
  ArrowUpRight,
  BadgeCheck,
  Headphones,
  MapPin,
  MessageCircle,
  PackageCheck,
  Play,
} from "lucide-react";
import Reveal from "../components/Reveal";
import video from "../assets/tj-mix-video.mp4";
import poster from "../assets/equipe-na-obra.jpeg";
import { locationShort, mapsHref, whatsappHref } from "../siteData";

const trustItems = [
  { icon: PackageCheck, label: "Variedade para sua obra" },
  { icon: BadgeCheck, label: "Produtos selecionados" },
  { icon: Headphones, label: "Atendimento especializado" },
];

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
      <div className="container hero__grid">
        <Reveal className="hero__content">
          <div className="hero__eyebrow">
            <span />
            Construção, acabamento e utilidades
          </div>
          <h1>
            Sua obra pede <em>escolhas certas.</em>
          </h1>
          <p className="hero__lead">
            Da base ao último detalhe, encontre materiais, ferramentas e acabamentos
            para construir com mais confiança.
          </p>
          <div className="hero__actions">
            <a
              className="button button--gold button--large"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar com a TJ Mix
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost button--large" href="#categorias">
              Ver categorias
            </a>
          </div>
          <a
            className="hero__location"
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={20} aria-hidden="true" />
            <span>
              <small>Visite nossa loja</small>
              {locationShort}
            </span>
          </a>
        </Reveal>

        <Reveal className="hero__media-wrap" delay={120}>
          <div className="hero__media">
            <video
              src={video}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Vídeo promocional da TJ Mix"
            />
            <div className="hero__media-shade" />
            <div className="hero__video-label">
              <span className="hero__play">
                <Play size={17} fill="currentColor" aria-hidden="true" />
              </span>
              <span>
                <small>Conheça a TJ Mix</small>
                Tudo para sua construção
              </span>
            </div>
            <div className="hero__stamp">
              <strong>TJ</strong>
              <span>Mix recomenda</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container hero__trust" aria-label="Diferenciais da TJ Mix">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label}>
            <Icon size={21} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
