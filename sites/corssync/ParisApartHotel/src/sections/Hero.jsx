import { ArrowDown, ArrowUpRight, CarFront, Coffee, Wifi } from "lucide-react";
import { hotelImages, whatsappLink } from "../data/content";

const proofs = [
  { Icon: Coffee, title: "Café da manhã", text: "incluso na hospedagem" },
  { Icon: CarFront, title: "Estacionamento", text: "privativo e incluso" },
  { Icon: Wifi, title: "Wi-Fi", text: "disponível aos hóspedes" },
];

function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      style={{ "--hero-image": `url(${hotelImages.facadePanorama})` }}
    >
      <div className="hero__wash" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Desde 2016 · Barreiras, Bahia</p>
          <h1>Conforto para chegar bem. Acolhimento para ficar à vontade.</h1>
          <p className="hero__lead">
            Apartamentos completos, atendimento 24 horas e tudo o que torna sua estadia mais simples — a trabalho ou a turismo.
          </p>
          <div className="hero__actions">
            <a className="button button--red" href={whatsappLink} target="_blank" rel="noreferrer">
              Consultar disponibilidade <ArrowUpRight size={18} />
            </a>
            <a className="text-link text-link--light" href="#acomodacoes">
              Ver acomodações <ArrowDown size={17} />
            </a>
          </div>
        </div>

        <figure className="hero__room-card">
          <img
            src={hotelImages.coupleRoom}
            alt="Apartamento de casal do Paris Apart Hotel"
            fetchPriority="high"
          />
          <figcaption>
            <span>01</span>
            <p>31 apartamentos, do individual ao família</p>
          </figcaption>
        </figure>
      </div>

      <div className="container hero__proofs" aria-label="Itens incluídos na hospedagem">
        {proofs.map(({ Icon, title, text }) => (
          <div className="hero-proof" key={title}>
            <Icon aria-hidden="true" />
            <p><strong>{title}</strong><span>{text}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
