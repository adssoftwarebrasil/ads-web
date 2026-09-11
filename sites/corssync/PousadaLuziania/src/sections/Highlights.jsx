import { Clock3, Heart, MapPinned } from "lucide-react";
import Reveal from "../components/Reveal";

const highlights = [
  {
    icon: Heart,
    number: "01",
    title: "Acolhimento com história",
    text: "Há mais de uma década sendo a extensão da casa de quem passa por Luziânia.",
  },
  {
    icon: MapPinned,
    number: "02",
    title: "No coração da cidade",
    text: "Hospedagem no centro de Luziânia, com endereço fácil de encontrar.",
  },
  {
    icon: Clock3,
    number: "03",
    title: "Atendimento 24 horas",
    text: "Recepção disponível a qualquer hora para acompanhar a sua chegada.",
  },
];

function Highlights() {
  return (
    <section className="highlights" id="pousada" aria-label="Diferenciais da Pousada Luziânia">
      <div className="container highlights-grid">
        {highlights.map(({ icon: Icon, number, title, text }) => (
          <Reveal className="highlight-item" key={title}>
            <div className="highlight-top">
              <span>{number}</span>
              <Icon aria-hidden="true" />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
