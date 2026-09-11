import { ArrowUpRight, Sparkles } from "lucide-react";
import lunchLaunch from "../assets/lancamento-marmitas-termicas.jpg";
import totalplast from "../assets/marmitas-totalplast.png";
import chickenBox from "../assets/frangueira-termica.jpg";
import lids from "../assets/tampas-copos-descartaveis.png";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { contact } from "../data/siteData";

const highlights = [
  {
    title: "Marmitas térmicas",
    tag: "Novidades",
    description: "Modelos com divisórias para diferentes composições de refeição.",
    image: lunchLaunch,
    alt: "Linha de marmitas térmicas Totalplast com três e quatro divisórias",
  },
  {
    title: "Marmitas redondas",
    tag: "Vários tamanhos",
    description: "Opções apresentadas em 500 ml, 750 ml e 1.100 ml.",
    image: totalplast,
    alt: "Marmitas redondas Totalplast em três tamanhos",
  },
  {
    title: "Frangueira térmica",
    tag: "Para alimentos",
    description: "Embalagem leve e prática para frango assado e alimentos prontos.",
    image: chickenBox,
    alt: "Frangueira térmica Totalplast",
  },
  {
    title: "Tampas para copos",
    tag: "Praticidade",
    description: "Soluções para complementar copos descartáveis.",
    image: lids,
    alt: "Tampas descartáveis para copos transparentes",
  },
];

function Highlights() {
  return (
    <section className="highlights section" id="destaques">
      <div className="container">
        <div className="highlights__head">
          <Reveal>
            <SectionHeading
              eyebrow="Seleção em destaque"
              title="Produtos que ajudam sua operação a fluir."
              description="Algumas opções das linhas disponíveis. Consulte nossa equipe para confirmar modelos e medidas."
              inverse
            />
          </Reveal>
          <Sparkles className="highlights__spark" aria-hidden="true" />
        </div>

        <div className="highlights__rail">
          {highlights.map((item, index) => (
            <Reveal className="highlight-card" delay={index * 80} key={item.title}>
              <div className="highlight-card__image">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span>{item.tag}</span>
              </div>
              <div className="highlight-card__content">
                <p>0{index + 1}</p>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar ${item.title}`}>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="highlights__hint">Deslize para ver mais →</p>
      </div>
    </section>
  );
}

export default Highlights;
