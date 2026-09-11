import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Armchair,
  BedDouble,
  Ruler,
  Sofa,
} from "lucide-react";
import sofa from "../assets/images/sofa-organico.webp";
import { products } from "../data/catalog.js";

export default function Hero({ onCategorySelect, onProductOpen }) {
  return (
    <>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="eyebrow-line" /> FEITO PARA A SUA CASA
            </span>
            <h1 id="hero-title">
              Conforto que
              <br />
              combina com
              <br />
              <em>o seu jeito.</em>
            </h1>
            <p>
              Estofados sob medida e reformas que renovam o seu espaço. Para
              viver, receber e se sentir em casa.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#catalogo">
                Explorar o catálogo <ArrowUpRight size={19} />
              </a>
              <a className="text-link" href="#reformas">
                Quero reformar <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="tiny-diamond" /> Fabricação sob medida. Cuidado
              em cada detalhe.
            </div>
          </div>
          <div className="hero-visual">
            <span className="hero-watermark" aria-hidden="true">
              acolher.
            </span>
            <div className="hero-seal">
              <Ruler size={22} strokeWidth={1.2} />
              <span>
                Seu espaço.
                <br />
                <strong>Suas medidas.</strong>
              </span>
            </div>
            <img
              src={sofa}
              className="hero-sofa"
              width="1280"
              height="1024"
              fetchPriority="high"
              alt="Sofá orgânico bege com curvas suaves e almofadas Wilson Estofados"
            />
            <div className="hero-image-caption">
              <div>
                <span>FORMAS QUE ACOLHEM</span>
                <p>Sofá orgânico</p>
              </div>
              <button
                className="round-link"
                aria-label="Conhecer o sofá orgânico"
                onClick={() => onProductOpen(products[0])}
              >
                <ArrowUpRight size={24} />
              </button>
            </div>
            <span className="hero-spark" aria-hidden="true">
              ✳
            </span>
          </div>
        </div>
      </section>
      <div className="category-rail">
        <div className="container category-rail-inner">
          <span className="rail-intro">
            O aconchego tem
            <br />
            <strong>muitas formas.</strong>
          </span>
          <button onClick={() => onCategorySelect("Sofás")}>
            <Sofa strokeWidth={1.2} />
            <span>Sofás</span>
            <ArrowUpRight size={16} />
          </button>
          <button onClick={() => onCategorySelect("Poltronas")}>
            <Armchair strokeWidth={1.2} />
            <span>Poltronas</span>
            <ArrowUpRight size={16} />
          </button>
          <button onClick={() => onCategorySelect("Cabeceiras")}>
            <BedDouble strokeWidth={1.2} />
            <span>Cabeceiras</span>
            <ArrowUpRight size={16} />
          </button>
          <a href="#sob-medida">
            <Ruler strokeWidth={1.2} />
            <span>Sob medida</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
