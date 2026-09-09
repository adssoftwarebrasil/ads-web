import {
  ArrowUpRight,
  Compass,
  FileCheck2,
  Settings2,
  ChartNoAxesCombined,
} from "lucide-react";

const steps = [
  {
    title: "Entender",
    icon: Compass,
    description:
      "Conhecemos seu consumo, seu espaço e o que você espera do projeto.",
  },
  {
    title: "Planejar",
    icon: FileCheck2,
    description:
      "Desenvolvemos o estudo de viabilidade e a solução técnica para a sua realidade.",
  },
  {
    title: "Implementar",
    icon: Settings2,
    description:
      "Executamos a instalação dos sistemas e da infraestrutura prevista no projeto.",
  },
  {
    title: "Acompanhar",
    icon: ChartNoAxesCombined,
    description:
      "Oferecemos monitoramento, manutenção e suporte para a sua energia.",
  },
];

export default function About() {
  return (
    <section
      className="about-section"
      id="a-premium"
      aria-labelledby="about-title"
    >
      <div className="container section">
        <div className="about-top">
          <div>
            <p className="eyebrow light">MUITO ALÉM DA INSTALAÇÃO</p>
            <h2 id="about-title">
              A sua energia merece
              <br />
              um olhar <span>Premium.</span>
            </h2>
            <a className="text-link light-link" href="#contato">
              Conheça de perto o nosso atendimento <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="about-copy">
            <p className="since-label">
              <span className="status-dot" /> EM BRASÍLIA, DESDE 2020
            </p>
            <p>
              A Premium Energia Solar & Electric Car Solutions une geração
              fotovoltaica e mobilidade elétrica em projetos personalizados para
              cada cliente.
            </p>
            <p>
              Do primeiro estudo ao acompanhamento dos sistemas, nosso
              compromisso é entender o seu cenário e oferecer soluções com
              conhecimento técnico, proximidade e responsabilidade.
            </p>
          </div>
        </div>
        <div className="process-heading">
          <span>DO PRIMEIRO CONTATO À SUA NOVA ENERGIA</span>
          <span>Um parceiro em cada etapa.</span>
        </div>
        <ol className="process-grid">
          {steps.map(({ icon: Icon, ...step }, index) => (
            <li key={step.title}>
              <div className="step-top">
                <span>0{index + 1}</span>
                <Icon size={26} strokeWidth={1.3} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
