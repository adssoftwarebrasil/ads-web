import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';
import WhatsAppLink from '../components/WhatsAppLink';
import { clientImages } from '../data/clientImages';

export default function Signature() {
  return (
    <section className="signature" id="nosso-toque" aria-labelledby="signature-title">
      <div className="checker" aria-hidden="true" />
      <div className="container signature__grid">
        <Reveal className="signature__visual">
          <figure className="signature-art">
            <a
              href={clientImages.jamArtwork.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir a arte da geleia da Sr Burgone em tamanho completo"
            >
              <img
                src={clientImages.jamArtwork.src}
                alt={clientImages.jamArtwork.alt}
                width={clientImages.jamArtwork.width}
                height={clientImages.jamArtwork.height}
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>
              GELEIA DA CASA <span>Arte da Sr Burgone · clique para ampliar</span>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal className="signature__copy">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" /> NÃO É SÓ UM DETALHE.
          </p>
          <h2 id="signature-title">
            TEM UM TOQUE
            <br />
            QUE É <span>SÓ NOSSO.</span>
          </h2>
          <p>
            Um bom lanche fica na memória. E os nossos molhos caseiros e a nossa geleia têm muito a
            ver com isso.
          </p>
          <p>
            É essa combinação de sabores, feita com o carinho da casa, que transforma cada mordida
            em vontade de voltar.
          </p>
          <div className="signature__tags">
            <span>
              <Heart size={16} aria-hidden="true" /> Molhos caseiros
            </span>
            <span>
              <Sparkles size={16} aria-hidden="true" /> Geleia da casa
            </span>
          </div>
          <WhatsAppLink
            className="text-link text-link--light"
            icon={false}
            message="Olá, Sr Burgone! Quero saber mais sobre os molhos caseiros e a geleia."
          >
            Quero provar esse toque <ArrowUpRight size={19} aria-hidden="true" />
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}
