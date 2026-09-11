import { Check, MoveRight } from "lucide-react";
import consultingRoom from "../assets/consultorio-integrativo.jpeg";
import Reveal from "../components/Reveal";
import { whatsappUrl } from "../data/content";

const strengths = [
  "Especialidades médicas e odontológicas",
  "Estrutura ampla e de alto padrão",
  "Cuidado atento em todas as etapas",
];

function IntegratedCare() {
  return (
    <section className="care-section section" id="cuidado-integrado" aria-labelledby="care-title">
      <div className="container">
        <div className="care-intro">
          <Reveal className="care-heading">
            <p className="eyebrow">Renova por inteiro</p>
            <h2 id="care-title">
              Um só endereço para <em>cuidar de você</em>
            </h2>
          </Reveal>

          <Reveal className="care-message" delay={100}>
            <p>
              A Renova integra diferentes especialidades para tornar sua jornada de cuidado mais
              completa, em um espaço sofisticado e acolhedor em Campo Novo do Parecis.
            </p>
            <ul className="check-list">
              {strengths.map((strength) => (
                <li key={strength}>
                  <Check size={16} aria-hidden="true" />
                  {strength}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="care-editorial">
          <Reveal className="care-image-wrap">
            <img
              src={consultingRoom}
              alt="Consultório da Renova Clínica Integrada com mobiliário em madeira e iluminação acolhedora"
              loading="lazy"
            />
            <div className="image-stamp" aria-hidden="true">
              <span>Renova</span>
              <small>cuidado integrado</small>
            </div>
          </Reveal>
          <Reveal className="care-quote" delay={100}>
            <span className="quote-number">01</span>
            <p>
              Da prevenção aos tratamentos especializados, cada cuidado começa com escuta,
              avaliação e um plano individual.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com a Renova
              <MoveRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

export default IntegratedCare;
