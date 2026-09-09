import {
  BadgeCheck,
  BrickWall,
  Droplets,
  PaintRoller,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const stages = [
  {
    number: "01",
    icon: BrickWall,
    title: "Base da obra",
    text: "Materiais essenciais para começar com firmeza e segurança.",
    items: "Cimento · argamassa · ferramentas",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Proteção",
    text: "Soluções para cuidar da construção contra água e umidade.",
    items: "Vedação · impermeabilização · cobertura",
  },
  {
    number: "03",
    icon: PaintRoller,
    title: "Acabamento",
    text: "Produtos para dar forma, cor e personalidade aos ambientes.",
    items: "Pisos · tintas · texturas",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Últimos detalhes",
    text: "Itens que completam os espaços e facilitam o dia a dia.",
    items: "Louças · metais · utilidades",
  },
];

function ProjectJourney() {
  return (
    <section className="section journey" id="sua-obra">
      <div className="container">
        <Reveal>
          <div className="journey__heading">
            <SectionHeading
              eyebrow="Do começo ao acabamento"
              title="Cada etapa merece o material certo."
              text="Conte com a TJ Mix para reunir as soluções do seu projeto em um só lugar."
            />
            <div className="journey__seal">
              <BadgeCheck aria-hidden="true" />
              <span>
                <small>Seleção</small>
                TJ Mix
              </span>
            </div>
          </div>
        </Reveal>

        <div className="journey__grid">
          {stages.map(({ icon: Icon, ...stage }, index) => (
            <Reveal key={stage.number} delay={index * 70}>
              <article className="journey-card">
                <span className="journey-card__number">{stage.number}</span>
                <span className="journey-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                <small>{stage.items}</small>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectJourney;
