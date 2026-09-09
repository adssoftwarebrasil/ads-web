import { Clock3, DoorOpen, HeartHandshake } from "lucide-react";
import { hotelImages } from "../data/content";

const facts = [
  { value: "31", label: "apartamentos completos", Icon: DoorOpen },
  { value: "24h", label: "recepção à sua disposição", Icon: Clock3 },
  { value: "10", label: "anos de hospitalidade", Icon: HeartHandshake },
];

function Story() {
  return (
    <section id="hotel" className="section story-section">
      <div className="container story-grid">
        <div className="story-copy reveal" data-reveal>
          <p className="section-eyebrow">Uma história feita para receber</p>
          <h2 className="section-title">Um grande sonho que há 10 anos acolhe Barreiras.</h2>
          <p className="story-copy__lead">
            Fundado em 2016 por Valtenir Vieira Nunes, o Paris Apart Hotel nasceu com um propósito claro: oferecer hospitalidade, conforto e qualidade.
          </p>
          <p>
            Hoje, recebe hóspedes a negócios ou a turismo com ambientes funcionais, atendimento a qualquer hora e uma experiência prática do início ao fim.
          </p>
          <div className="facts-grid">
            {facts.map(({ value, label, Icon }) => (
              <div className="fact" key={label}>
                <Icon aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="story-visual reveal" data-reveal>
          <img src={hotelImages.lounge} alt="Lounge acolhedor do Paris Apart Hotel" loading="lazy" />
          <div className="story-visual__note">
            <span>PARIS</span>
            <p>Hospitalidade que se percebe nos detalhes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
