import { ArrowUpRight } from "lucide-react";
import sofa from "../assets/images/sofa-canto.webp";
import { whatsappUrl } from "../data/site.js";

const steps = [
  {
    title: "Seu espaço é o ponto de partida",
    text: "Conte como é o ambiente e quais medidas você tem em mente.",
  },
  {
    title: "O seu estilo faz parte da escolha",
    text: "Compartilhe referências e converse sobre cores, tecidos e acabamentos.",
  },
  {
    title: "Os detalhes, a gente combina",
    text: "Fale diretamente com a Wilson para definir as possibilidades do seu estofado.",
  },
];

export default function CustomMade() {
  return (
    <section
      className="custom-section section-space"
      id="sob-medida"
      aria-labelledby="custom-title"
    >
      <div className="container custom-inner">
        <div className="custom-visual">
          <span className="eyebrow">DA SUA IDEIA PARA A SUA CASA</span>
          <img
            src={sofa}
            width="1254"
            height="1254"
            alt="Sofá de canto bege com almofadas, chaise e apoios de madeira"
            loading="lazy"
          />
          <div className="measurement-line" aria-hidden="true">
            <span />
            Na medida dos seus momentos
            <span />
          </div>
        </div>
        <div className="custom-content">
          <span className="eyebrow">FABRICAÇÃO SOB MEDIDA</span>
          <h2 id="custom-title">
            A sua casa é única.
            <br />
            <em>Seu estofado também.</em>
          </h2>
          <p>
            Um sofá pode dizer muito sobre você. Vamos pensar em um que faça
            sentido para o seu espaço e para a sua rotina.
          </p>
          <ol className="custom-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            className="text-link"
            href={whatsappUrl(
              "Olá, Wilson Estofados! Gostaria de conversar sobre a fabricação de um estofado sob medida.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos pensar no seu estofado? <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
