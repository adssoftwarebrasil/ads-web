import {
  ArrowDownRight,
  Boxes,
  CircuitBoard,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { expertiseMedia } from "../data/siteData";

const capabilities = [
  {
    icon: CircuitBoard,
    title: "Integração",
    text: "Equipamentos pensados como um conjunto, da circulação ao aquecimento.",
  },
  {
    icon: Gauge,
    title: "Funcionamento",
    text: "Atenção à vazão, filtragem e operação dos sistemas instalados.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado",
    text: "Manutenção para preservar a estrutura e a rotina de uso da piscina.",
  },
  {
    icon: Boxes,
    title: "Produtos",
    text: "Itens para limpeza, tratamento e manutenção do dia a dia.",
  },
];

export function Expertise() {
  return (
    <section className="section expertise" id="estrutura">
      <div className="expertise__watermark" aria-hidden="true">
        OFICINA
      </div>
      <div className="container expertise__grid">
        <div className="expertise__intro" data-reveal>
          <SectionHeading
            eyebrow="Por trás da água"
            title="Uma boa piscina começa no que você não vê."
            description="Tubulações, bombas, filtros e equipamentos precisam conversar entre si. É aí que três décadas de prática fazem diferença."
            light
          />

          <div className="expertise__quote">
            <ArrowDownRight size={28} aria-hidden="true" />
            <p>
              Cuidamos do conjunto para que a experiência na água seja simples,
              confortável e tranquila.
            </p>
          </div>
        </div>

        <div className="expertise__media" data-reveal>
          <figure className="expertise__media-main">
            <img
              src={expertiseMedia.filtration}
              alt="Sistema completo de filtragem e circulação"
            />
          </figure>
          <figure className="expertise__media-small">
            <img
              src={expertiseMedia.pool}
              alt="Piscina residencial limpa e pronta para uso"
            />
          </figure>
          <div className="expertise__stamp">
            <strong>30</strong>
            <span>anos de experiência</span>
          </div>
        </div>
      </div>

      <div className="container expertise__capabilities" data-reveal>
        {capabilities.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
