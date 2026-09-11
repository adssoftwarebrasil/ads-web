import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { contact, galleryItems } from "../data/siteData";

const aboutImage = galleryItems.find(
  (item) => item.title === "Piscina interna",
).src;

export function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="container experience__grid">
        <div className="experience__media" data-reveal>
          <img
            src={aboutImage}
            alt="Piscina interna iluminada e pronta para uso"
            loading="lazy"
          />
          <div className="experience__metric">
            <strong>30</strong>
            <span>anos dedicados a piscinas</span>
          </div>
        </div>

        <div className="experience__content" data-reveal>
          <span className="eyebrow">Oficina das Piscinas</span>
          <h2>Três décadas transformando cuidado técnico em tranquilidade.</h2>
          <p>
            A Oficina das Piscinas é especializada em soluções para a água, os
            equipamentos e o conforto da sua piscina. Uma experiência
            construída no trabalho diário e na atenção a cada instalação.
          </p>

          <div className="experience__list">
            <div>
              <CheckCircle2 size={21} aria-hidden="true" />
              <span>Limpeza e manutenção</span>
            </div>
            <div>
              <CheckCircle2 size={21} aria-hidden="true" />
              <span>Aquecimento e tratamento</span>
            </div>
            <div>
              <CheckCircle2 size={21} aria-hidden="true" />
              <span>Equipamentos e produtos</span>
            </div>
          </div>

          <a
            className="button button--dark button--large"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Falar com a equipe
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
