import { ArrowUpRight, Coffee } from "lucide-react";
import { hotelImages, whatsappLink } from "../data/content";

function Breakfast() {
  return (
    <section className="section breakfast-section">
      <div className="container breakfast-grid">
        <div className="breakfast-visual reveal" data-reveal>
          <img
            className="breakfast-visual__main"
            src={hotelImages.breakfastBuffet}
            alt="Buffet do café da manhã do Paris Apart Hotel"
            loading="lazy"
          />
          <img
            className="breakfast-visual__detail"
            src={hotelImages.breakfastCakes}
            alt="Bolos e waffles servidos no café da manhã"
            loading="lazy"
          />
          <span className="breakfast-visual__seal"><Coffee /> incluso</span>
        </div>

        <div className="breakfast-copy reveal" data-reveal>
          <p className="section-eyebrow">Bom dia do jeito Paris</p>
          <h2 className="section-title">Comece o dia com sabor e sem pressa.</h2>
          <p>
            O café da manhã está incluído na hospedagem, com uma seleção preparada para você começar bem antes de um compromisso ou de um passeio por Barreiras.
          </p>
          <ul className="editorial-list">
            <li><span>01</span> Variedade de pães, bolos e frutas</li>
            <li><span>02</span> Ambiente claro e confortável</li>
            <li><span>03</span> Praticidade já incluída na diária</li>
          </ul>
          <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">
            Planejar minha estadia <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Breakfast;
