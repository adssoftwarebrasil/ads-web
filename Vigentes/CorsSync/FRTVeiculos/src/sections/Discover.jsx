import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { vehicleProfiles, whatsappUrl } from "../data/siteData";

function Discover() {
  return (
    <section className="discover section" id="veiculos">
      <div className="container">
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="Encontre seu perfil"
            title="Uma garagem feita para diferentes caminhos."
            description="Do uso diário aos planos maiores, a equipe ajuda você a encontrar um veículo que combine com sua rotina e seu momento."
          />
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar estoque <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="vehicle-grid">
          {vehicleProfiles.map((vehicle, index) => (
            <Reveal key={vehicle.title} delay={index * 80}>
              <article className="vehicle-card">
                <img src={vehicle.image} alt={vehicle.alt} width="1600" height="1200" loading="lazy" />
                <div className="vehicle-card__overlay" aria-hidden="true" />
                <div className="vehicle-card__number">0{index + 1}</div>
                <div className="vehicle-card__content">
                  <p>{vehicle.eyebrow}</p>
                  <h3>{vehicle.title}</h3>
                  <span>{vehicle.description}</span>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar ${vehicle.title}`}>
                    Consultar disponibilidade <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="inventory-note" delay={120}>
          <span className="inventory-note__pulse" aria-hidden="true" />
          <p>
            <strong>Estoque em movimento.</strong> Fale com a equipe para receber as opções disponíveis agora.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero receber opções <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Discover;
