import { ArrowUpRight, Tv, BedDouble } from "lucide-react";
import { rooms, whatsappUrl } from "../data/hotel";

export default function Accommodations() {
  return (
    <section
      id="acomodacoes"
      className="section accommodations"
      aria-labelledby="rooms-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ACOMODAÇÕES</p>
            <h2 id="rooms-title">
              Seu descanso tem
              <br />
              <em>lugar reservado.</em>
            </h2>
          </div>
          <p>
            Para cada viagem, uma boa companhia.
            <br />
            Para cada hóspede, o nosso cuidado de sempre.
          </p>
        </div>
        <div className="room-grid">
          {rooms.map((room, index) => (
            <article className="room-card" key={room.title}>
              <a
                className="room-image"
                href={whatsappUrl(room.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar ${room.label.toLowerCase()} pelo WhatsApp`}
              >
                <img
                  src={room.image}
                  width={index === 0 ? 382 : index === 1 ? 680 : 681}
                  height={index === 0 ? 510 : index === 1 ? 510 : 816}
                  alt={room.alt}
                  loading="lazy"
                />
                <span className="room-label">{room.label}</span>
                <span className="room-image-arrow">
                  <ArrowUpRight size={22} aria-hidden="true" />
                </span>
              </a>
              <div className="room-body">
                <span className="room-number">0{index + 1}</span>
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <div className="room-features">
                  <span>
                    <BedDouble size={15} aria-hidden="true" />
                    {room.features[0]}
                  </span>
                  <span>
                    <Tv size={15} aria-hidden="true" />
                    {room.features[1]}
                  </span>
                </div>
                <a
                  className="text-link"
                  href={whatsappUrl(room.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar acomodação{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="room-footnote">
          As fotos mostram nossas acomodações. Consulte a configuração de camas
          e a disponibilidade para a sua viagem.
        </p>
      </div>
    </section>
  );
}
