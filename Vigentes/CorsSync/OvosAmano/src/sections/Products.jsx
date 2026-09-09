import { useMemo, useState } from "react";
import Icon from "../components/Icon";

const eggColors = {
  branco: {
    label: "Ovos brancos",
    description: "Clássicos, frescos e selecionados para o dia a dia ou grandes volumes.",
  },
  vermelho: {
    label: "Ovos vermelhos",
    description: "Selecionados com o mesmo rigor, em diferentes tamanhos e embalagens.",
  },
};

const sizes = ["Médio", "Grande", "Extra", "Jumbo"];
const packages = [
  { quantity: "12", label: "ovos", note: "cartela embalada" },
  { quantity: "20", label: "ovos", note: "cartela embalada" },
  { quantity: "30", label: "ovos", note: "cartela embalada" },
  { quantity: "30", label: "dúzias", note: "caixa para atacado" },
];

export default function Products() {
  const [color, setColor] = useState("branco");
  const [size, setSize] = useState("Grande");
  const selected = useMemo(() => eggColors[color], [color]);

  return (
    <section className="products section" id="produtos">
      <div className="container">
        <div className="products__top" data-reveal>
          <div>
            <p className="eyebrow eyebrow--dark">Para cada rotina e negócio</p>
            <h2>Escolha o ovo.<br />A gente cuida do resto.</h2>
          </div>
          <p>
            Variedade para a compra da família, a produção da cozinha ou o
            abastecimento de grandes operações.
          </p>
        </div>

        <div className="product-selector" data-reveal>
          <div className="product-selector__controls">
            <div>
              <span className="control-label">01 · Cor</span>
              <div className="segmented-control" aria-label="Escolha a cor dos ovos">
                {Object.entries(eggColors).map(([value, item]) => (
                  <button
                    type="button"
                    key={value}
                    aria-pressed={color === value}
                    className={color === value ? "is-active" : ""}
                    onClick={() => setColor(value)}
                  >
                    <span className={`egg-swatch egg-swatch--${value}`} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="control-label">02 · Tamanho</span>
              <div className="size-control" aria-label="Escolha o tamanho dos ovos">
                {sizes.map((item) => (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={size === item}
                    className={size === item ? "is-active" : ""}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-selector__summary" aria-live="polite">
              <span>Selecionado</span>
              <strong>{selected.label} · tipo {size.toLowerCase()}</strong>
              <p>{selected.description}</p>
            </div>
          </div>

          <div className={`egg-tray egg-tray--${color}`} aria-hidden="true">
            <span className="egg-tray__label">Amano</span>
            <div className="egg-tray__grid">
              {Array.from({ length: 12 }, (_, index) => (
                <span key={index} style={{ "--egg-index": index }} />
              ))}
            </div>
            <span className="egg-tray__size">{size}</span>
          </div>
        </div>

        <div className="package-grid" data-reveal>
          <div className="package-grid__intro">
            <p className="eyebrow eyebrow--orange">Embalagens</p>
            <h3>Do balcão ao estoque.</h3>
            <p>Opções prontas para varejo e fornecimento em volume.</p>
          </div>
          {packages.map((item) => (
            <article className="package-card" key={`${item.quantity}-${item.label}`}>
              <div>
                <strong>{item.quantity}</strong>
                <span>{item.label}</span>
              </div>
              <p>{item.note}</p>
              <Icon name="arrow" size={20} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
