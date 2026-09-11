import { useEffect, useState } from "react";
import { Expand, X } from "lucide-react";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";
import excavatorTransport from "../assets/images/escavadeira-transporte.webp";
import sunsetOperation from "../assets/images/operacao-por-do-sol.webp";
import transportExcavator from "../assets/images/transporte-escavadeira.webp";
import transportTractor from "../assets/images/transporte-trator.webp";
import operationTractor from "../assets/images/trator-em-operacao.webp";
import excavatorWorkshop from "../assets/images/escavadeira-oficina.webp";

const gallery = [
  { src: sunsetOperation, alt: "Trator de esteira trabalhando ao pôr do sol", className: "gallery__wide" },
  { src: transportTractor, alt: "Trator de esteira sendo transportado para uma obra", className: "gallery__tall" },
  { src: operationTractor, alt: "Trator de esteira em operação com poeira e luz do sol", className: "" },
  { src: excavatorWorkshop, alt: "Escavadeira hidráulica Komatsu em manutenção", className: "" },
  { src: excavatorTransport, alt: "Escavadeira hidráulica sendo transportada", className: "gallery__tall" },
  { src: transportExcavator, alt: "Conjunto de escavadeira em preparação para transporte", className: "gallery__wide" },
];

function FieldGallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeImage]);

  return (
    <section className="section field" aria-labelledby="field-title">
      <div className="container">
        <Reveal>
          <SectionIntro
            eyebrow="Frota em campo"
            title="Terra, aço e trabalho de verdade."
            text="Registros reais dos equipamentos da Abreu em operação, preparação e transporte."
            titleId="field-title"
          />
        </Reveal>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <Reveal key={image.src} className={image.className} delay={(index % 3) * 70}>
              <button type="button" className="gallery-card" onClick={() => setActiveImage(image)}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="gallery-card__action">
                  <Expand size={18} aria-hidden="true" />
                  Ampliar
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada da frota">
          <button className="lightbox__backdrop" type="button" onClick={() => setActiveImage(null)} aria-label="Fechar imagem" />
          <figure>
            <img src={activeImage.src} alt={activeImage.alt} />
            <figcaption>{activeImage.alt}</figcaption>
          </figure>
          <button className="lightbox__close" type="button" onClick={() => setActiveImage(null)} aria-label="Fechar imagem">
            <X size={25} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

export default FieldGallery;
