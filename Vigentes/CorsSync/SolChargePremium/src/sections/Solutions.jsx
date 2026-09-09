import {
  ArrowDownRight,
  ArrowUpRight,
  BatteryCharging,
  Sun,
} from "lucide-react";
import solarImage from "../assets/cobertura-fotovoltaica.webp";
import chargerImage from "../assets/carregador-eletrico.webp";
import { whatsappUrl } from "../data/company.js";

const solutions = [
  {
    number: "01",
    icon: Sun,
    title: "Energia solar",
    subtitle: "O sol trabalha a seu favor.",
    description:
      "Transforme a luz do sol em energia para sua casa, empresa, condomínio ou propriedade rural, com um sistema pensado para o seu consumo.",
    tags: [
      "Sistemas fotovoltaicos",
      "Usinas solares",
      "Monitoramento e manutenção",
    ],
    image: solarImage,
    alt: "Representação de painéis fotovoltaicos instalados em uma cobertura de estacionamento",
    cta: "Quero gerar minha energia",
    message: "Olá! Tenho interesse em um projeto de energia solar da Premium.",
  },
  {
    number: "02",
    icon: BatteryCharging,
    title: "Mobilidade elétrica",
    subtitle: "Seu próximo destino começa aqui.",
    description:
      "Leve a conveniência da recarga para o seu espaço. Infraestrutura e carregadores para veículos elétricos, do projeto à instalação.",
    tags: [
      "Carregadores veiculares",
      "Estações de recarga",
      "Eletropostos integrados",
    ],
    image: chargerImage,
    alt: "Imagem ilustrativa de um veículo conectado a um carregador elétrico verde",
    cta: "Quero uma solução de recarga",
    message:
      "Olá! Tenho interesse em instalar carregadores para veículos elétricos com a Premium.",
  },
];

export default function Solutions() {
  return (
    <section
      className="section container solutions"
      id="solucoes"
      aria-labelledby="solutions-title"
    >
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">DUAS SOLUÇÕES. UM NOVO JEITO DE AVANÇAR.</p>
          <h2 id="solutions-title">
            Mais possibilidades.
            <br />
            <span className="text-muted">A mesma energia.</span>
          </h2>
        </div>
        <p className="section-intro">
          Geração própria e mobilidade elétrica se encontram em projetos que
          conectam economia, praticidade e valorização do seu espaço.{" "}
          <ArrowDownRight
            className="heading-arrow"
            size={32}
            strokeWidth={1.3}
          />
        </p>
      </div>
      <div className="solutions-grid">
        {solutions.map(({ icon: Icon, ...solution }) => (
          <article className="solution-card" key={solution.number}>
            <div className="solution-image-wrap">
              <img
                src={solution.image}
                alt={solution.alt}
                width="1121"
                height="850"
                loading="lazy"
              />
              <span className="solution-number">
                {solution.number} / SOLUÇÕES PREMIUM
              </span>
              <span className="solution-image-icon">
                <Icon size={30} strokeWidth={1.5} />
              </span>
              <span className="solution-image-caption">Imagem ilustrativa</span>
            </div>
            <div className="solution-body">
              <h3>{solution.title}</h3>
              <p className="solution-subtitle">{solution.subtitle}</p>
              <p>{solution.description}</p>
              <ul className="solution-tags">
                {solution.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                className="text-link"
                href={whatsappUrl(solution.message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {solution.cta}
                <ArrowUpRight size={20} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
