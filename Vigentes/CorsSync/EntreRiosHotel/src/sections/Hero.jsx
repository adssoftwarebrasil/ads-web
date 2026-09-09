import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  PawPrint,
  Coffee,
  CarFront,
  Clock3,
} from "lucide-react";
import { photos } from "../data/hotel";
import ReservationLink from "../components/ReservationLink";
import ReservationForm from "../components/ReservationForm";

export default function Hero() {
  return (
    <>
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-image">
          <img
            src={photos.facade}
            alt="Fachada e entrada do Entre Rios Hotel em Paraíso do Tocantins"
            width="1280"
            height="963"
            fetchPriority="high"
          />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-location">
              <MapPin size={14} aria-hidden="true" /> PARAÍSO DO TOCANTINS, TO
            </p>
            <h1 id="hero-title">
              Chegue, respire,
              <br />
              <em>sinta-se em casa.</em>
            </h1>
            <p className="hero-description">
              O conforto de uma boa estadia.
              <br />O cuidado de quem recebe você há 20 anos.
            </p>
            <div className="hero-actions">
              <ReservationLink>Reserve pelo WhatsApp</ReservationLink>
              <a className="hero-explore" href="#acomodacoes">
                Conheça o hotel <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-welcome">
              <span className="welcome-line" />
              <span>BOAS HISTÓRIAS COMEÇAM COM UMA BOA ACOLHIDA.</span>
            </div>
          </div>
          <a className="hero-photo-link" href="#galeria">
            <span>
              Um convite para
              <br />
              <strong>se sentir bem.</strong>
            </span>
            <span className="circle-arrow">
              <ArrowUpRight size={24} aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>
      <ReservationForm />
      <div
        className="container amenities-strip"
        aria-label="Diferenciais do hotel"
      >
        {[
          [Coffee, "Café feito na hora"],
          [PawPrint, "Seu pet é bem-vindo"],
          [CarFront, "Estacionamento"],
          [Clock3, "Recepção 24 horas"],
        ].map(([Icon, text]) => (
          <div key={text}>
            <Icon size={23} strokeWidth={1.3} aria-hidden="true" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </>
  );
}
