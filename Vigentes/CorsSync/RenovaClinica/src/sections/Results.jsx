import { ArrowUpRight } from "lucide-react";
import hairEvaluation from "../assets/avaliacao-capilar.jpg";
import hairResult from "../assets/resultado-cabelo.jpg";
import lensesResult from "../assets/resultado-lentes.jpg";
import lipFillingCloseResult from "../assets/resultado-preenchimento-labial-close.jpg";
import lipFillingFaceResult from "../assets/resultado-preenchimento-labial-face.jpg";
import gluteFillingFrontResult from "../assets/resultado-preenchimento-gluteos-frontal.jpg";
import gluteFillingSideResult from "../assets/resultado-preenchimento-gluteos-lateral.jpg";
import tirzepatideProtocolResult from "../assets/resultado-protocolo-tirzepatida.jpg";
import rhinoplastyResult from "../assets/resultado-rinomodelacao.jpg";
import smileResult from "../assets/resultado-sorriso.jpg";
import tirzepatideFemaleResult from "../assets/resultado-tirzepatida-feminino.jpg";
import tirzepatideMaleResult from "../assets/resultado-tirzepatida-masculino.jpg";
import serumTherapy from "../assets/soroterapia-led-capilar.jpg";
import allergyTest from "../assets/teste-alergico.jpg";
import Reveal from "../components/Reveal";
import { whatsappUrl } from "../data/content";

const cases = [
  {
    image: rhinoplastyResult,
    category: "Rinomodelação",
    badge: "Antes / depois",
    alt: "Comparativo de perfil antes e depois de rinomodelação",
  },
  {
    image: gluteFillingSideResult,
    category: "Preenchimento de glúteos",
    badge: "Dermatologia",
    alt: "Comparativo lateral antes e depois de preenchimento de glúteos",
  },
  {
    image: gluteFillingFrontResult,
    category: "Preenchimento de glúteos",
    badge: "Dermatologia",
    alt: "Comparativo posterior antes e depois de preenchimento de glúteos",
  },
  {
    image: lipFillingCloseResult,
    category: "Preenchimento labial",
    badge: "Antes / depois",
    alt: "Comparativo aproximado dos lábios antes e depois de preenchimento labial",
  },
  {
    image: lipFillingFaceResult,
    category: "Preenchimento labial",
    badge: "Antes / depois",
    alt: "Comparativo facial antes e depois de preenchimento labial",
  },
  {
    image: serumTherapy,
    category: "Soroterapia + LED capilar",
    badge: "Tratamento",
    alt: "Paciente durante sessão de soroterapia combinada com LED capilar",
  },
  {
    image: tirzepatideFemaleResult,
    category: "Tratamento com tirzepatida",
    badge: "Emagrecimento",
    alt: "Comparativo corporal durante acompanhamento médico com tirzepatida",
  },
  {
    image: tirzepatideMaleResult,
    category: "Tirzepatida",
    badge: "Acompanhamento médico",
    alt: "Comparativo masculino durante acompanhamento médico com tirzepatida",
  },
  {
    image: allergyTest,
    category: "Teste alérgico",
    badge: "Alergia",
    alt: "Profissional realizando teste alérgico nas costas de uma paciente",
  },
  {
    image: hairEvaluation,
    category: "Avaliação capilar",
    badge: "Diagnóstico",
    alt: "Profissional realizando avaliação capilar com imagem ampliada dos fios",
  },
  {
    image: tirzepatideProtocolResult,
    category: "Protocolo de tirzepatida",
    badge: "Emagrecimento",
    alt: "Comparativo feminino durante protocolo médico de emagrecimento com tirzepatida",
  },
  {
    image: smileResult,
    category: "Estética do sorriso",
    badge: "Antes / depois",
    alt: "Comparativo de resultado de estética do sorriso fornecido pela clínica",
  },
  {
    image: hairResult,
    category: "Cuidado capilar",
    badge: "Antes / depois",
    alt: "Comparativo de acompanhamento capilar fornecido pela clínica",
  },
  {
    image: lensesResult,
    category: "Reabilitação estética",
    badge: "Antes / depois",
    alt: "Comparativo de resultado odontológico fornecido pela clínica",
  },
];

function Results() {
  return (
    <section className="results-section section" id="resultados" aria-labelledby="results-title">
      <div className="container">
        <div className="results-heading">
          <Reveal>
            <p className="eyebrow">Cuidado individual</p>
            <h2 id="results-title">
              Planos que respeitam <em>cada história</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Cada pessoa chega com necessidades, objetivos e características únicas. Por isso,
              toda indicação na Renova começa por uma avaliação profissional.
            </p>
          </Reveal>
        </div>

        <div className="results-grid">
          {cases.map((item, index) => (
            <Reveal key={item.image} className="result-card" delay={index * 70}>
              <div className="result-image-wrap">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="result-label">{item.badge}</span>
              </div>
              <div className="result-card-footer">
                <h3>{item.category}</h3>
                <span aria-hidden="true">0{index + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="results-footnote">
          <p>
            Imagens de casos e atendimentos reais fornecidas pela clínica. Os resultados são
            individuais e podem variar conforme cada caso, indicação e resposta ao tratamento.
            Todo procedimento depende de avaliação profissional.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero conversar sobre meu caso
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Results;
