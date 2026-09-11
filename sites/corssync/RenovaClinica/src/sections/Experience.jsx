import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import architecture from "../assets/arquitetura-interna.jpeg";
import dentalRoom from "../assets/consultorio-odontologia.jpeg";
import medicalRoom from "../assets/consultorio-medicina.jpeg";
import garden from "../assets/jardim-interno.jpeg";
import receptionWide from "../assets/recepcao-ampla.jpeg";
import reception from "../assets/recepcao-entrada.jpeg";
import Reveal from "../components/Reveal";

const spaces = [
  {
    src: receptionWide,
    alt: "Recepção ampla da Renova Clínica Integrada com jardim interno",
    label: "Recepção",
    className: "gallery-wide",
  },
  {
    src: reception,
    alt: "Entrada e sala de espera da Renova Clínica Integrada",
    label: "Acolhimento",
  },
  {
    src: garden,
    alt: "Área de espera ao lado do jardim interno da clínica",
    label: "Bem-estar",
    className: "gallery-tall",
  },
  {
    src: dentalRoom,
    alt: "Consultório odontológico equipado da Renova Clínica Integrada",
    label: "Odontologia",
  },
  {
    src: medicalRoom,
    alt: "Consultório médico da Renova Clínica Integrada",
    label: "Medicina",
  },
  {
    src: architecture,
    alt: "Vista superior da arquitetura interna e área de recepção",
    label: "Arquitetura",
    className: "gallery-wide",
  },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + spaces.length) % spaces.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % spaces.length);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    document.body.classList.add("lightbox-is-open");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("lightbox-is-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="experience-section section" id="estrutura" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading-row">
          <Reveal>
            <p className="eyebrow eyebrow-light">A experiência Renova</p>
            <h2 id="experience-title">
              Alto padrão que você <em>percebe ao chegar</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-intro">
              Ambientes amplos, consultórios preparados e uma atmosfera elegante para transformar
              o cuidado em uma experiência tranquila.
            </p>
          </Reveal>
        </div>

        <div className="spaces-gallery">
          {spaces.map((space, index) => (
            <Reveal
              key={space.src}
              className={`space-card ${space.className ?? ""}`}
              delay={(index % 3) * 70}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar imagem: ${space.label}`}
              >
                <img src={space.src} alt={space.alt} loading="lazy" />
                <span className="space-overlay">
                  <span>{space.label}</span>
                  <Expand size={18} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${spaces[activeIndex].label}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Fechar imagem"
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
          <button
            className="lightbox-arrow lightbox-previous"
            type="button"
            onClick={showPrevious}
            aria-label="Imagem anterior"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <figure>
            <img src={spaces[activeIndex].src} alt={spaces[activeIndex].alt} />
            <figcaption>
              <span>{spaces[activeIndex].label}</span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} / {String(spaces.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            onClick={showNext}
            aria-label="Próxima imagem"
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Experience;
