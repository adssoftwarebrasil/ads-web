import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import bmwImage from "../assets/bmw-na-loja.jpeg";
import jeepImage from "../assets/jeep-compass.jpeg";
import foxImage from "../assets/fox-na-loja.jpeg";
import receptionImage from "../assets/recepcao.png";
import facadeImage from "../assets/fachada.jpeg";
import { business } from "../data/business";

const photos = [
  {
    src: bmwImage,
    title: "Cuidado que aparece",
    description: "BMW na área de instalação da M1 Películas",
    className: "gallery-featured",
  },
  {
    src: jeepImage,
    title: "Atenção ao acabamento",
    description: "Vidros com película em um Jeep Compass",
  },
  {
    src: receptionImage,
    title: "Sinta-se em casa",
    description: "Recepção e amostras de películas na loja M1",
  },
  {
    src: foxImage,
    title: "Cada carro, o mesmo cuidado",
    description: "Volkswagen Fox na oficina da M1 Películas",
  },
  {
    src: facadeImage,
    title: "Seu destino na Pedra Branca",
    description: "Fachada da M1 Películas na Avenida das Universidades",
  },
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(0);
  const dialogRef = useRef(null);
  const showPhoto = (index) => {
    setActivePhoto(index);
    dialogRef.current.showModal();
  };
  const nextPhoto = (direction) =>
    setActivePhoto(
      (index) => (index + direction + photos.length) % photos.length,
    );

  useEffect(() => {
    const dialog = dialogRef.current;
    const observer = new MutationObserver(() => {
      document.body.classList.toggle("dialog-open", dialog.open);
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    return () => {
      observer.disconnect();
      document.body.classList.remove("dialog-open");
    };
  }, []);

  return (
    <section
      className="gallery section-light section-space"
      id="a-m1"
      aria-labelledby="gallery-title"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span /> POR DENTRO DA M1
            </p>
            <h2 id="gallery-title">
              QUEM GOSTA DE CARRO
              <br />
              RECONHECE O <span className="red-text">CUIDADO.</span>
            </h2>
          </div>
          <div className="gallery-intro">
            <p>
              Mais de 20 anos no ramo e mais de 10 anos atendendo
              concessionárias na Grande Florianópolis. Essa experiência está em
              cada carro que passa por aqui.
            </p>
            <a
              className="text-link"
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acompanhe @m1.peliculas{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              className={`gallery-photo ${photo.className || ""}`}
              key={photo.src}
              type="button"
              aria-label={`Ampliar foto: ${photo.description}`}
              onClick={() => showPhoto(index)}
            >
              <img
                src={photo.src}
                alt={photo.description}
                loading="lazy"
                width={index === 2 ? 960 : 720}
                height="1280"
              />
              <span className="gallery-photo-caption">
                {photo.title}
                <Expand size={17} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
        <div className="gallery-bottom">
          <span className="small-label">
            CARROS REAIS. NOSSA LOJA. NOSSO CUIDADO.
          </span>
          <span>
            <span className="red-square" /> M1 PELÍCULAS / PEDRA BRANCA
          </span>
        </div>
      </div>
      <dialog
        className="photo-dialog"
        ref={dialogRef}
        aria-label="Galeria de fotos da M1 Películas"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            nextPhoto(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            nextPhoto(-1);
          }
        }}
      >
        <div className="dialog-inner">
          <button
            className="dialog-close icon-button"
            type="button"
            aria-label="Fechar foto"
            onClick={() => dialogRef.current.close()}
          >
            <X />
          </button>
          <img
            src={photos[activePhoto].src}
            alt={photos[activePhoto].description}
          />
          <div className="dialog-bottom">
            <div>
              <span>{String(activePhoto + 1).padStart(2, "0")} / 05</span>
              <p>{photos[activePhoto].title}</p>
            </div>
            <div className="dialog-controls">
              <button
                className="icon-button"
                type="button"
                aria-label="Foto anterior"
                onClick={() => nextPhoto(-1)}
              >
                <ArrowLeft />
              </button>
              <button
                className="icon-button"
                type="button"
                aria-label="Próxima foto"
                onClick={() => nextPhoto(1)}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
