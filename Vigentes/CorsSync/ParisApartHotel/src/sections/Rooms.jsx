import { ArrowUpRight, Check } from "lucide-react";
import { roomTypes, whatsappLink } from "../data/content";

const roomFeatures = ["Ar-condicionado split", "Smart TV 32\"", "Frigobar", "Mesa de trabalho", "Isolamento acústico"];

function Rooms() {
  return (
    <section id="acomodacoes" className="section rooms-section">
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <div>
            <p className="section-eyebrow">Seu espaço em Barreiras</p>
            <h2 className="section-title">Acomodações pensadas para diferentes viagens.</h2>
          </div>
          <p>
            Do individual ao família, todos os apartamentos reúnem os itens essenciais para descansar, trabalhar e seguir o dia com conforto.
          </p>
        </div>

        <div className="rooms-grid">
          {roomTypes.map((room, index) => (
            <article className="room-card reveal" data-reveal key={room.name}>
              <figure>
                <img src={room.image} alt={room.alt} loading="lazy" />
                <span className="room-card__number">0{index + 1}</span>
              </figure>
              <div className="room-card__body">
                <p className="room-card__subtitle">{room.subtitle}</p>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Consultar esta opção <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="room-features reveal" data-reveal aria-label="Itens disponíveis nos apartamentos">
          {roomFeatures.map((feature) => (
            <span key={feature}><Check size={16} aria-hidden="true" /> {feature}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
