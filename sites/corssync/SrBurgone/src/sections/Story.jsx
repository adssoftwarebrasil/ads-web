import { ArrowUpRight } from 'lucide-react';
import { clientImages } from '../data/clientImages';
import Reveal from '../components/Reveal';
import { business } from '../data/site';

export default function Story() {
  return (
    <section className="story section-space" id="historia" aria-labelledby="story-title">
      <div className="container story__grid">
        <Reveal className="story__copy">
          <p className="eyebrow">RAIZ NO TRIUNFO. SABOR QUE SE ESPALHA.</p>
          <h2 id="story-title">
            COMEÇOU COM CORAGEM.
            <br />
            <span className="text-red">CRESCEU NO BOCA A BOCA.</span>
          </h2>
          <p>
            Em 5 de setembro de 2024, a Sr Burgone abriu as portas em uma rua onde nem todo mundo
            acreditava que daria certo. A gente acreditou.
          </p>
          <p>
            A insistência, a qualidade dos lanches e a variedade dos molhos foram conquistando
            espaço. E cada cliente que indicou a casa ajudou essa história a ir mais longe.
          </p>
          <p className="story__closing">
            A nossa melhor receita? Capricho no lanche e gente de verdade do outro lado.
          </p>
          <a
            className="text-link"
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acompanhe a nossa história <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="story__visual">
          <figure className="story-photo">
            <img
              src={clientImages.atmosphere.src}
              alt={clientImages.atmosphere.alt}
              width={clientImages.atmosphere.width}
              height={clientImages.atmosphere.height}
              loading="lazy"
              decoding="async"
            />
            <figcaption>A CASA É SUA. A HISTÓRIA É NOSSA.</figcaption>
          </figure>
          <div className="story-stamp" aria-hidden="true">
            DO TRIUNFO
            <br />
            <span>COM</span>
            <br />♥ SABOR
          </div>
        </Reveal>
      </div>
    </section>
  );
}
