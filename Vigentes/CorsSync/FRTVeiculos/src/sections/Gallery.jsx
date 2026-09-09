import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { gallery, whatsappUrl } from "../data/siteData";

function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const visibleImages = expanded ? gallery : gallery.slice(0, 8);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % gallery.length);
    };

    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const previousImage = () => setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length);
  const nextImage = () => setActiveIndex((index) => (index + 1) % gallery.length);

  return (
    <section className="gallery-section section" id="galeria">
      <div className="container">
        <div className="section-intro-row gallery-intro">
          <SectionHeading
            eyebrow="Por dentro da FRT"
            title="Veículos de verdade. Uma loja pronta para receber você."
            description="Conheça um pouco do nosso espaço, da seleção de veículos e do dia a dia da loja no Centro de Trindade."
          />
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar uma visita <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="gallery-grid">
          {visibleImages.map((image, index) => (
            <Reveal key={image.src} className={`gallery-item gallery-item--${(index % 8) + 1}`} delay={(index % 4) * 50}>
              <button type="button" onClick={() => setActiveIndex(index)} aria-label={`Ampliar imagem: ${image.alt}`}>
                <img src={image.src} alt={image.alt} width="1600" height="1200" loading="lazy" />
                <span className="gallery-item__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="gallery-item__view">
                  <Plus size={18} aria-hidden="true" /> Ver foto
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {!expanded && (
          <button className="button button--outline gallery-more" type="button" onClick={() => setExpanded(true)}>
            <Plus size={18} aria-hidden="true" />
            Ver mais fotos
          </button>
        )}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria ampliada">
          <button className="lightbox__backdrop" type="button" onClick={() => setActiveIndex(null)} aria-label="Fechar galeria" />
          <button className="lightbox__close" type="button" onClick={() => setActiveIndex(null)} aria-label="Fechar">
            <X size={24} aria-hidden="true" />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={previousImage} aria-label="Imagem anterior">
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
          <figure>
            <img src={gallery[activeIndex].src} alt={gallery[activeIndex].alt} />
            <figcaption>
              <span>{gallery[activeIndex].alt}</span>
              <strong>{String(activeIndex + 1).padStart(2, "0")} / {gallery.length}</strong>
            </figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" type="button" onClick={nextImage} aria-label="Próxima imagem">
            <ChevronRight size={26} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
