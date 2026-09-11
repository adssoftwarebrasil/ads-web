import { useEffect, useState } from "react";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { projects } from "../data/siteData";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <section className="section projects" id="projetos">
      <div className="container">
        <Reveal>
          <SectionIntro
            light
            eyebrow="Projetos realizados"
            title="Portas que transformam a fachada e acompanham a rotina."
            description="Uma seleção de instalações residenciais, comerciais e industriais realizadas pela Portas de Aço Brasil Pará."
          />
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal
              className={`project-card ${project.className}`}
              delay={(index % 3) * 70}
              key={project.src}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar foto ${index + 1}: ${project.alt}`}
              >
                <img src={project.src} alt={project.alt} loading="lazy" />
                <span className="project-card__index">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-card__action">Ampliar</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada do projeto">
          <button
            autoFocus
            className="lightbox__close"
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Fechar galeria"
          >
            <Icon name="close" />
          </button>
          <button
            className="lightbox__nav lightbox__nav--previous"
            type="button"
            onClick={showPrevious}
            aria-label="Foto anterior"
          >
            <Icon name="previous" />
          </button>
          <figure>
            <img src={projects[activeIndex].src} alt={projects[activeIndex].alt} />
            <figcaption>
              {projects[activeIndex].alt}
              <span>{activeIndex + 1} / {projects.length}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            onClick={showNext}
            aria-label="Próxima foto"
          >
            <Icon name="next" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
