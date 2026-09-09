import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { negotiationOptions, whatsappUrl } from "../data/siteData";
import storefrontPhoto from "../assets/media/storefront-pickups.webp";

function Negotiation() {
  return (
    <section className="negotiation section section--dark" id="negociacao">
      <div className="negotiation-glow" aria-hidden="true" />
      <div className="container negotiation-layout">
        <Reveal className="negotiation-visual">
          <img
            src={storefrontPhoto}
            alt="Picapes e veículos disponíveis na FRT Veículos"
            width="1600"
            height="1200"
            loading="lazy"
          />
          <div className="negotiation-visual__tag">
            <span>Do primeiro contato</span>
            <strong>até as chaves na mão.</strong>
          </div>
        </Reveal>

        <div className="negotiation-content">
          <SectionHeading
            eyebrow="Negociação do seu jeito"
            title="Escolha a melhor forma de seguir em frente."
            description="Cada compra tem uma história diferente. Por isso, a conversa começa entendendo o que você precisa."
            theme="dark"
          />

          <div className="negotiation-list">
            {negotiationOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 70}>
                <article className="negotiation-item">
                  <span>{option.number}</span>
                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Simular uma negociação <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Negotiation;
