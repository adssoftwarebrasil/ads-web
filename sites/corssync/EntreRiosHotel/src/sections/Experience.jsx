import {
  Coffee,
  CarFront,
  Clock3,
  WashingMachine,
  Tv,
  PawPrint,
  ArrowUpRight,
} from "lucide-react";
import { photos, whatsappUrl } from "../data/hotel";

const comforts = [
  {
    icon: Clock3,
    title: "Sempre por perto",
    text: "Recepção e atendimento 24 horas para receber você.",
  },
  {
    icon: CarFront,
    title: "Chegue com tranquilidade",
    text: "Estacionamento no hotel para a sua comodidade.",
  },
  {
    icon: Tv,
    title: "Seu momento de relaxar",
    text: "Smart TV de 50” em todos os quartos, com Netflix, Google Play e outros aplicativos.",
  },
  {
    icon: WashingMachine,
    title: "Praticidade na estadia",
    text: "Serviço de lavanderia. Consulte nossa equipe sobre condições e disponibilidade.",
  },
];

export default function Experience() {
  return (
    <section
      id="comodidades"
      className="experience"
      aria-labelledby="experience-title"
    >
      <div className="container breakfast-section">
        <div className="breakfast-images">
          <img
            className="breakfast-main"
            src={photos.breakfastCounter}
            width="680"
            height="510"
            alt="Café da manhã com café fresco e bolos no Entre Rios Hotel"
            loading="lazy"
          />
          <img
            className="breakfast-detail"
            src={photos.breakfast}
            width="287"
            height="510"
            alt="Frutas e bolos no buffet de café da manhã"
            loading="lazy"
          />
          <span className="breakfast-seal">
            <Coffee size={26} strokeWidth={1.3} aria-hidden="true" />
            <span>
              FEITO NA HORA
              <br />
              COM CARINHO
            </span>
          </span>
        </div>
        <div className="breakfast-copy">
          <p className="eyebrow">OS PEQUENOS PRAZERES DA ESTADIA</p>
          <h2 id="experience-title">
            O dia começa melhor
            <br />
            <em>com gostinho de casa.</em>
          </h2>
          <p>
            O aroma do café, um pedaço de bolo, uma conversa sem pressa. Nosso
            café da manhã é preparado na hora, com o cuidado que faz você se
            sentir acolhido.
          </p>
          <span className="breakfast-signature">
            Bom dia. E uma ótima estadia.
          </span>
        </div>
      </div>
      <div className="container comfort-grid">
        {comforts.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={28} strokeWidth={1.25} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="pet-banner">
        <div className="container pet-inner">
          <span className="pet-icon">
            <PawPrint size={31} strokeWidth={1.3} aria-hidden="true" />
          </span>
          <div>
            <h3>A melhor companhia também é bem-vinda.</h3>
            <p>Seu pet faz parte da viagem. Aqui, ele também tem lugar.</p>
          </div>
          <a
            href={whatsappUrl(
              "Olá! Vou viajar com meu pet e gostaria de saber as condições de hospedagem no Entre Rios Hotel.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vou levar meu pet <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
