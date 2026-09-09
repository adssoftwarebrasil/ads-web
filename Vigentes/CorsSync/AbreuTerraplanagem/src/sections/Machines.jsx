import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";
import excavatorImage from "../assets/images/escavadeira-pc200.webp";
import fieldImage from "../assets/images/trator-campo.webp";
import tractorVideoPoster from "../assets/images/video-trator-locacao.webp";
import tractorVideo from "../assets/videos/trator-esteira-locacao.mp4";
import { whatsappUrl } from "../data/siteData";

const machines = [
  {
    number: "01",
    title: "Tratores de esteira",
    text: "Potência e tração para demandas de terraplenagem, limpeza de áreas e preparo de solo.",
    tags: ["Terraplenagem", "Limpeza de áreas", "Preparo de solo"],
    video: tractorVideo,
    poster: tractorVideoPoster,
    alt: "Trator de esteira Komatsu D61 da frota Abreu Terraplenagem",
  },
  {
    number: "02",
    title: "Escavadeiras hidráulicas",
    text: "Versatilidade para obras que exigem alcance, precisão e movimentação eficiente de materiais.",
    tags: ["Escavação", "Movimentação de terra", "Apoio à obra"],
    image: excavatorImage,
    alt: "Escavadeira hidráulica Komatsu PC200 da Abreu Terraplenagem",
  },
];

function Machines() {
  return (
    <section className="section machines" id="maquinas">
      <div className="container">
        <div className="machines__heading">
          <SectionIntro
            eyebrow="Equipamentos para grandes demandas"
            title="A máquina certa para fazer o terreno responder."
            text="Consulte disponibilidade e condições de locação de acordo com o local e a necessidade da sua obra."
          />
          <img src={fieldImage} alt="Trator de esteira da Abreu Terraplenagem em área rural" loading="lazy" />
        </div>

        <div className="machine-list">
          {machines.map((machine, index) => (
            <Reveal key={machine.title} delay={index * 80}>
              <article className={`machine-card ${index % 2 ? "machine-card--reverse" : ""}`}>
                <div className={`machine-card__image ${machine.video ? "machine-card__image--video" : ""}`}>
                  {machine.video ? (
                    <video controls preload="metadata" poster={machine.poster} playsInline aria-label={machine.alt}>
                      <source src={machine.video} type="video/mp4" />
                      Seu navegador não suporta vídeo em HTML5.
                    </video>
                  ) : (
                    <img src={machine.image} alt={machine.alt} loading="lazy" />
                  )}
                  <span>{machine.number}</span>
                </div>
                <div className="machine-card__content">
                  <p className="machine-card__label">Locação</p>
                  <h3>{machine.title}</h3>
                  <p>{machine.text}</p>
                  <ul>
                    {machine.tags.map((tag) => (
                      <li key={tag}>
                        <CheckCircle2 size={17} aria-hidden="true" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Falar sobre este equipamento
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Machines;
