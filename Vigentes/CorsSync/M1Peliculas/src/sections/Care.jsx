import { ArrowUpRight, Crosshair, ShieldCheck, Zap } from "lucide-react";
import machineImage from "../assets/corte-computadorizado.jpeg";
import { whatsappUrl } from "../data/business";

const careItems = [
  {
    icon: Crosshair,
    title: "Corte computadorizado",
    text: "Recortes padronizados pela máquina, com precisão para a aplicação nos vidros do seu carro.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado de verdade",
    text: "Atenção à instalação e à proteção do veículo durante todo o serviço.",
  },
  {
    icon: Zap,
    title: "Atenção aos elétricos",
    text: "O cuidado adicional que os carros elétricos pedem, com atenção às particularidades de cada veículo.",
  },
];

export default function Care() {
  return (
    <section
      className="care section-space"
      id="cuidado"
      aria-labelledby="care-title"
    >
      <div className="container care-grid">
        <div className="care-visual">
          <div className="care-photo">
            <img
              src={machineImage}
              alt="Máquina de corte computadorizado de películas na M1"
              loading="lazy"
              width="720"
              height="1280"
            />
          </div>
          <div className="care-image-note">
            <Crosshair size={27} aria-hidden="true" />
            <div>
              <strong>A PRECISÃO FAZ A DIFERENÇA.</strong>
              <span>Tecnologia a serviço do cuidado.</span>
            </div>
          </div>
          <span className="care-side-label" aria-hidden="true">
            M1 PELÍCULAS / ATENÇÃO EM CADA ETAPA
          </span>
        </div>
        <div className="care-content">
          <p className="eyebrow">
            <span /> TECNOLOGIA + EXPERIÊNCIA
          </p>
          <h2 id="care-title">
            O CORTE É PRECISO.
            <br />O CUIDADO É <em>PESSOAL.</em>
          </h2>
          <p className="care-intro">
            Uma boa película merece uma instalação à altura. Aqui, experiência e
            tecnologia se encontram para cuidar do seu carro.
          </p>
          <div className="care-list">
            {careItems.map(({ icon: Icon, title, text }, index) => (
              <div className="care-item" key={title}>
                <Icon size={23} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="care-step">0{index + 1}</span>
              </div>
            ))}
          </div>
          <a
            className="text-link"
            href={whatsappUrl(
              "Olá! Quero saber mais sobre a instalação com corte computadorizado no meu carro.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Converse com quem entende{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
