import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Factory,
  House,
  Sprout,
} from "lucide-react";
import { whatsappUrl } from "../data/company.js";

const profiles = [
  {
    id: "condominios",
    label: "Condomínios",
    icon: Building2,
    title: "Um condomínio preparado para o que vem.",
    description:
      "Da energia das áreas comuns à recarga na garagem, planejamos soluções que respeitam a estrutura e a rotina do seu condomínio.",
    features: [
      "Estudo do consumo e da infraestrutura existente",
      "Energia solar para as necessidades do condomínio",
      "Pontos de recarga planejados para o empreendimento",
    ],
    audience: "Para síndicos, administradoras e moradores",
    cta: "Conversar sobre meu condomínio",
  },
  {
    id: "empresas",
    label: "Empresas",
    icon: Factory,
    title: "Sua energia pode trabalhar pelo seu negócio.",
    description:
      "Transforme o consumo de energia e amplie as possibilidades do seu espaço com geração solar e infraestrutura de recarga.",
    features: [
      "Projeto alinhado ao perfil de consumo da empresa",
      "Estações de recarga em espaços comerciais",
      "Integração entre geração e mobilidade elétrica",
    ],
    audience: "Para empresas, comércios e empreendimentos",
    cta: "Conversar sobre minha empresa",
  },
  {
    id: "residencias",
    label: "Residências",
    icon: House,
    title: "Mais autonomia começa dentro de casa.",
    description:
      "Um projeto que considera sua rotina, o espaço disponível e o que você espera da sua energia, hoje e nos próximos anos.",
    features: [
      "Dimensionamento de acordo com o consumo da casa",
      "Instalação de sistemas solares fotovoltaicos",
      "Carregador veicular com avaliação da rede elétrica",
    ],
    audience: "Para quem quer transformar a própria casa",
    cta: "Conversar sobre minha residência",
  },
  {
    id: "rural",
    label: "Rural e usinas",
    icon: Sprout,
    title: "Grandes possibilidades para a sua energia.",
    description:
      "Soluções para propriedades rurais e implantação de usinas solares, com planejamento técnico e estudo da viabilidade de cada projeto.",
    features: [
      "Análise da demanda e das características do local",
      "Projetos de geração solar para o campo",
      "Planejamento e implantação de usinas fotovoltaicas",
    ],
    audience: "Para produtores rurais e investidores",
    cta: "Conversar sobre meu projeto",
  },
];

export default function Audience() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef([]);
  const profile = profiles[selected];
  const Icon = profile.icon;

  function handleKeyDown(event, index) {
    let next;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % profiles.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index - 1 + profiles.length) % profiles.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = profiles.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setSelected(next);
      buttons.current[next]?.focus();
    }
  }

  return (
    <section
      className="audience-section"
      id="para-voce"
      aria-labelledby="audience-title"
    >
      <div className="container section audience-grid">
        <div className="audience-intro">
          <p className="eyebrow">CADA ESPAÇO, UM POTENCIAL.</p>
          <h2 id="audience-title">
            Qual é o seu
            <br />
            <span className="text-muted">próximo passo?</span>
          </h2>
          <p>
            Escolha seu perfil e descubra como a Premium pode fazer parte da sua
            transformação.
          </p>
          <div
            className="profile-tabs"
            role="tablist"
            aria-label="Tipo de imóvel"
          >
            {profiles.map((item, index) => {
              const TabIcon = item.icon;
              return (
                <button
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-controls="profile-panel"
                  aria-selected={index === selected}
                  tabIndex={index === selected ? 0 : -1}
                  onClick={() => setSelected(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  ref={(node) => {
                    buttons.current[index] = node;
                  }}
                  key={item.id}
                >
                  <TabIcon size={21} strokeWidth={1.5} />
                  <span>{item.label}</span>
                  <ArrowUpRight size={19} />
                </button>
              );
            })}
          </div>
        </div>
        <div
          className="profile-panel"
          id="profile-panel"
          role="tabpanel"
          aria-labelledby={`tab-${profile.id}`}
          tabIndex={0}
        >
          <div className="profile-panel-top">
            <span>UMA SOLUÇÃO PARA VOCÊ</span>
            <span>0{selected + 1} / 04</span>
          </div>
          <div className="profile-symbol">
            <Icon size={66} strokeWidth={1.1} />
            <span />
            <span />
          </div>
          <div className="profile-content" key={profile.id}>
            <p className="profile-audience">{profile.audience}</p>
            <h3>{profile.title}</h3>
            <p>{profile.description}</p>
            <ul>
              {profile.features.map((feature) => (
                <li key={feature}>
                  <Check size={18} />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              className="button button-dark"
              href={whatsappUrl(
                `Olá! Gostaria de conversar sobre as soluções da Premium para ${profile.label.toLowerCase()}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.cta}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
