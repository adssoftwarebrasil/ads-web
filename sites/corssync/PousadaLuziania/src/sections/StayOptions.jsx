import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { createWhatsAppLink } from "../data/siteData";
import casal from "../assets/images/suite-casal-detalhe.webp";
import apartamento from "../assets/images/apartamento-sala.webp";
import grupo from "../assets/images/quarto-grupo.webp";

const stays = [
  {
    number: "01",
    title: "Quartos para descansar",
    text: "Ambientes em diferentes configurações para viagens a trabalho, descanso ou passagem por Luziânia.",
    image: casal,
    alt: "Cama de casal preparada com enxoval",
  },
  {
    number: "02",
    title: "Apartamentos mobiliados",
    text: "Mais autonomia para estadias temporárias, com espaços que aproximam a rotina do conforto de casa.",
    image: apartamento,
    alt: "Apartamento mobiliado com sala e mezanino",
  },
  {
    number: "03",
    title: "Diferentes configurações",
    text: "Opções com camas individuais e composições variadas. Consulte qual acomodação combina com a sua necessidade.",
    image: grupo,
    alt: "Quarto com beliches e camas preparadas",
  },
];

function StayOptions() {
  return (
    <section className="section stays" id="acomodacoes">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Seu jeito de ficar"
            title={<>Espaços para uma pausa <em>de verdade.</em></>}
            text="Do quarto aconchegante ao apartamento mobiliado, encontre a configuração que faz sentido para sua estadia."
          />
        </Reveal>

        <div className="stays-list">
          {stays.map((stay) => (
            <Reveal className="stay-card" key={stay.number}>
              <div className="stay-image-wrap">
                <img src={stay.image} alt={stay.alt} loading="lazy" />
              </div>
              <div className="stay-content">
                <span>{stay.number}</span>
                <h3>{stay.title}</h3>
                <p>{stay.text}</p>
                <a
                  href={createWhatsAppLink(
                    `Olá! Vi no site da Pousada Luziânia a opção “${stay.title}” e gostaria de consultar disponibilidade e mais informações.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar esta opção <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="stays-disclaimer">
          A composição e as comodidades variam entre as acomodações. Consulte a disponibilidade para a data desejada.
        </p>
      </div>
    </section>
  );
}

export default StayOptions;
