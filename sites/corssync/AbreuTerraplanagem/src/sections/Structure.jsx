import { ArrowUpRight, Clock3, Wrench } from "lucide-react";
import Reveal from "../components/Reveal";
import maintenanceImage from "../assets/images/manutencao-trator.webp";
import readyImage from "../assets/images/revisao-d61.webp";
import { whatsappUrl } from "../data/siteData";

function Structure() {
  return (
    <section className="structure" id="estrutura">
      <div className="container structure__layout">
        <Reveal className="structure__media">
          <div className="structure__image-main">
            <img src={maintenanceImage} alt="Trator de esteira em manutenção na oficina" loading="lazy" />
          </div>
          <div className="structure__image-small">
            <img src={readyImage} alt="Trator de esteira revisado na oficina" loading="lazy" />
          </div>
          <span className="structure__mark">Suporte que acompanha</span>
        </Reveal>

        <Reveal className="structure__content" delay={100}>
          <p className="eyebrow eyebrow--yellow">Nosso principal diferencial</p>
          <h2>Máquina forte também precisa de resposta rápida.</h2>
          <p className="structure__lead">
            A Abreu Terraplenagem conta com manutenção rápida e especializada para apoiar a continuidade dos trabalhos, com atendimento feito com agilidade e excelência.
          </p>
          <div className="structure__points">
            <article>
              <Wrench size={26} aria-hidden="true" />
              <span>
                <strong>Manutenção especializada</strong>
                <small>Cuidado técnico dedicado aos equipamentos.</small>
              </span>
            </article>
            <article>
              <Clock3 size={26} aria-hidden="true" />
              <span>
                <strong>Agilidade no atendimento</strong>
                <small>Comunicação direta para cada demanda.</small>
              </span>
            </article>
          </div>
          <a className="button button--outline-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consulte nossa equipe
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Structure;
