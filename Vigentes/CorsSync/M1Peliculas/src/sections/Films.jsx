import { useRef, useState } from "react";
import { ArrowUpRight, Check, Layers3, Shield, Sun } from "lucide-react";
import jeepImage from "../assets/jeep-compass.jpeg";
import WhatsAppLink from "../components/WhatsAppLink";

const films = [
  {
    id: "ceramica",
    name: "Cerâmica",
    category: "CONFORTO EM PRIMEIRO LUGAR",
    icon: Sun,
    title: "MAIS CONFORTO.\nEM CADA TRAJETO.",
    text: "Para quem busca uma experiência mais confortável ao dirigir, com a tecnologia da película cerâmica. Encontre a opção que combina com o seu carro e com a sua rotina.",
    points: [
      "Opções para o seu conforto térmico",
      "Diferentes tonalidades para conhecer",
      "Orientação na escolha da película",
    ],
    tag: "TECNOLOGIA CERÂMICA",
  },
  {
    id: "carbono",
    name: "Carbono",
    category: "UM NOVO OLHAR PARA O SEU CARRO",
    icon: Layers3,
    title: "SEU ESTILO.\nEM CADA DETALHE.",
    text: "A película de carbono é uma das opções da M1 para quem valoriza o visual do carro. Conheça as linhas disponíveis e escolha o acabamento com a ajuda de um especialista.",
    points: [
      "Acabamento que valoriza o veículo",
      "Escolha de tonalidade com orientação",
      "Instalação com atenção aos detalhes",
    ],
    tag: "PELÍCULA DE CARBONO",
  },
  {
    id: "profissional",
    name: "Profissional",
    category: "CUIDADO PARA O DIA A DIA",
    icon: Shield,
    title: "UMA BOA ESCOLHA.\nPARA SUA ROTINA.",
    text: "Conheça nossa linha de películas profissionais. A gente entende o que você procura e apresenta as opções disponíveis para o seu veículo, com atendimento próximo do início ao fim.",
    points: [
      "Opções para diferentes necessidades",
      "Atendimento para o seu modelo de carro",
      "O cuidado M1 na aplicação",
    ],
    tag: "LINHA PROFISSIONAL",
  },
];

export default function Films() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef([]);
  const film = films[selected];
  const selectWithKeyboard = (event, index) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % films.length;
    else if (event.key === "ArrowLeft")
      next = (index + films.length - 1) % films.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = films.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      className="films section-light section-space"
      id="peliculas"
      aria-labelledby="films-title"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span /> PELÍCULAS PARA O SEU CARRO
            </p>
            <h2 id="films-title">
              A PELÍCULA CERTA.
              <br />
              <span className="muted-heading">DO SEU JEITO.</span>
            </h2>
          </div>
          <p>
            Conforto, proteção solar e um visual que combina com você. Conheça
            as opções e escolha com quem entende.
          </p>
        </div>
        <div
          className="film-tabs"
          role="tablist"
          aria-label="Tipos de película"
        >
          {films.map((item, index) => (
            <button
              type="button"
              key={item.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              id={`tab-${item.id}`}
              aria-controls={`panel-${item.id}`}
              aria-selected={index === selected}
              tabIndex={index === selected ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => selectWithKeyboard(event, index)}
              className={index === selected ? "active" : ""}
            >
              <item.icon size={23} aria-hidden="true" />
              <span>{item.name}</span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div
          key={film.id}
          className="film-panel"
          role="tabpanel"
          id={`panel-${film.id}`}
          aria-labelledby={`tab-${film.id}`}
          tabIndex={0}
        >
          <div className="film-image">
            <img
              src={jeepImage}
              alt="Detalhe das películas instaladas nos vidros de um Jeep Compass na M1"
              width="720"
              height="1280"
              loading="lazy"
            />
            <span className="film-image-label">
              <span /> {film.tag}
            </span>
            <span className="film-image-number" aria-hidden="true">
              0{selected + 1}
            </span>
          </div>
          <div className="film-details">
            <p className="small-label">{film.category}</p>
            <h3>
              {film.title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h3>
            <p>{film.text}</p>
            <ul className="check-list">
              {film.points.map((point) => (
                <li key={point}>
                  <Check size={17} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <WhatsAppLink
              className="button-dark"
              message={`Olá! Gostaria de conhecer as opções de película ${film.name.toLowerCase()} para o meu carro.`}
            >
              Quero conhecer essa opção
            </WhatsAppLink>
          </div>
        </div>
        <div className="film-footnote">
          <span>
            TRABALHAMOS COM <strong>3M</strong> E <strong>ACROSS</strong>
          </span>
          <p>
            Linhas, tonalidades e características variam conforme a película.
            Consulte nossa equipe.
          </p>
        </div>
      </div>
    </section>
  );
}
