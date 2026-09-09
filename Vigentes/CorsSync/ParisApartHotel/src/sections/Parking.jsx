import { ArrowUpRight, CarFront, Zap } from "lucide-react";
import { hotelImages, whatsappLink } from "../data/content";

function Parking() {
  return (
    <section
      className="parking-section"
      style={{ "--parking-image": `url(${hotelImages.parking})` }}
    >
      <div className="parking-section__overlay" />
      <div className="container parking-section__inner">
        <div className="parking-card reveal" data-reveal>
          <p className="section-eyebrow section-eyebrow--light">Chegue com tranquilidade</p>
          <h2>Estacione, recarregue e aproveite sua estadia.</h2>
          <p>
            Estacionamento privativo incluso e recarga rápida para carros elétricos: mais praticidade desde a chegada.
          </p>
          <div className="parking-card__benefits">
            <span><CarFront /> Estacionamento incluso</span>
            <span><Zap /> Recarga rápida</span>
          </div>
          <a className="button button--white" href={whatsappLink} target="_blank" rel="noreferrer">
            Falar com a recepção <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Parking;
