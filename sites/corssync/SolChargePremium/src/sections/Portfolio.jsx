import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";
import front from "../assets/recarga-portfolio-frente.webp";
import detail from "../assets/recarga-portfolio-detalhe.webp";

const photos = [
  {
    src: front,
    title: "Um novo uso para o seu estacionamento.",
    caption: "Ponto de recarga veicular",
    alt: "Veículo elétrico branco em vaga de recarga, ao lado de dois carregadores de parede",
    width: 1876,
    height: 1244,
  },
  {
    src: detail,
    title: "Conveniência em cada conexão.",
    caption: "Mobilidade elétrica no dia a dia",
    alt: "Vista traseira de veículo branco conectado ao carregador em uma vaga sinalizada de verde",
    width: 1496,
    height: 1350,
  },
];

export default function Portfolio() {
  const [activePhoto, setActivePhoto] = useState(null);
  const dialogRef = useRef(null);
  const isOpen = activePhoto !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        dialog.close();
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isOpen]);

  function changePhoto(direction) {
    setActivePhoto(
      (current) => (current + direction + photos.length) % photos.length,
    );
  }

  return (
    <section
      className="section container portfolio-section"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">CONHEÇA NOSSO PORTFÓLIO</p>
          <h2 id="portfolio-title">
            O futuro já tem
            <br />
            <span className="text-muted">um lugar para estacionar.</span>
          </h2>
        </div>
        <a
          className="button button-outline portfolio-download"
          href="/portfolio-premium-energia-solar.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver portfólio completo <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="portfolio-grid">
        {photos.map((photo, index) => (
          <figure className="portfolio-item" key={photo.src}>
            <button
              className="portfolio-photo"
              onClick={() => setActivePhoto(index)}
              aria-label={`Ampliar imagem: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
              />
              <span className="photo-open">
                <ArrowUpRight size={23} />
              </span>
              <span className="portfolio-photo-label">MOBILIDADE ELÉTRICA</span>
            </button>
            <figcaption>
              <span>{photo.caption}</span>
              <h3>{photo.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="portfolio-footnote">
        <p>Imagens do portfólio institucional da Premium Energia Solar.</p>
        <a
          className="text-link"
          href="/portfolio-premium-energia-solar.pdf"
          download
        >
          Baixar apresentação <ArrowDownToLine size={17} />
        </a>
      </div>
      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        onCancel={() => setActivePhoto(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActivePhoto(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") changePhoto(-1);
          if (event.key === "ArrowRight") changePhoto(1);
        }}
        aria-label="Galeria do portfólio Premium"
      >
        {isOpen && (
          <div className="gallery-inner">
            <button
              className="gallery-close icon-button"
              onClick={() => setActivePhoto(null)}
              aria-label="Fechar imagem"
            >
              <X />
            </button>
            <div className="gallery-photo-stage" data-photo={activePhoto}>
              <img
                src={photos[activePhoto].src}
                alt={photos[activePhoto].alt}
              />
            </div>
            <div className="gallery-controls">
              <button
                className="icon-button"
                onClick={() => changePhoto(-1)}
                aria-label="Imagem anterior"
              >
                <ArrowLeft />
              </button>
              <p aria-live="polite">
                {photos[activePhoto].caption}{" "}
                <span>
                  {activePhoto + 1} / {photos.length}
                </span>
              </p>
              <button
                className="icon-button"
                onClick={() => changePhoto(1)}
                aria-label="Próxima imagem"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
