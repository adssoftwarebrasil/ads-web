import { ArrowUpRight, HeartHandshake } from "lucide-react";
import filmImage from "../assets/filmes-pvc.jpg";
import bagsImage from "../assets/sacolas-papel.png";
import { contact } from "../data/siteData";
import Reveal from "../components/Reveal";

function Story() {
  return (
    <section className="story section" id="historia">
      <div className="container story__grid">
        <Reveal className="story__visual">
          <div className="story__image story__image--main">
            <img src={filmImage} alt="Linha de filmes PVC disponível em diversas medidas" loading="lazy" />
          </div>
          <div className="story__image story__image--floating">
            <img src={bagsImage} alt="Sacolas de papel em diversos tamanhos" loading="lazy" />
          </div>
          <div className="story__year">
            <span>Desde</span>
            <strong>1997</strong>
          </div>
        </Reveal>

        <Reveal className="story__content" delay={120}>
          <span className="eyebrow">A história por trás do balcão</span>
          <h2>Uma empresa familiar feita de atendimento e qualidade.</h2>
          <p>
            Fundada em 1997, a Rebouças Embalagens nasceu em Feira de Santana com o compromisso de oferecer produtos de
            qualidade e um atendimento próximo.
          </p>
          <p>
            Hoje, reunimos soluções para quem precisa embalar, servir, organizar e entregar — tanto no varejo quanto no
            atacado.
          </p>
          <div className="story__value">
            <HeartHandshake aria-hidden="true" />
            <span>
              <strong>Atendimento que orienta</strong>
              Conte para a nossa equipe o que você precisa.
            </span>
          </div>
          <a className="text-link text-link--blue" href={contact.whatsapp} target="_blank" rel="noreferrer">
            Conversar com a Rebouças
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Story;
