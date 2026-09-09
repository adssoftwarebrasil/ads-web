import { BadgeCheck, FileCheck2, MessagesSquare, ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { trustPoints } from "../data/siteData";

const icons = {
  fileCheck: FileCheck2,
  shieldCheck: ShieldCheck,
  badgeCheck: BadgeCheck,
  messages: MessagesSquare,
};

function Trust() {
  return (
    <section className="trust section" id="frt">
      <div className="container">
        <div className="trust-heading-row">
          <SectionHeading
            eyebrow="Confiança em cada detalhe"
            title="Uma boa escolha vai além da aparência."
            description="A FRT combina seleção, informação e atendimento próximo para tornar sua decisão mais simples."
          />
          <div className="trust-signature" aria-label="FRT Veículos, há três anos no mercado">
            <strong>FRT</strong>
            <span>Há 3 anos<br />movendo histórias</span>
          </div>
        </div>

        <div className="trust-grid">
          {trustPoints.map((point, index) => {
            const Icon = icons[point.icon];
            return (
              <Reveal key={point.title} delay={index * 70}>
                <article className="trust-card">
                  <div className="trust-card__icon">
                    <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span>0{index + 1}</span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Trust;
