import { ArrowDown, ArrowUpRight, Flame, MapPin } from 'lucide-react';
import { clientImages } from '../data/clientImages';
import WhatsAppLink from '../components/WhatsAppLink';

export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <Flame size={17} aria-hidden="true" /> PODE CHEGAR. A CASA É SUA.
            </p>
            <h1 id="hero-title">
              FOME DE UM
              <br />
              LANCHE{' '}
              <span>
                DE
                <br className="hero__mobile-break" /> RESPEITO?
              </span>
            </h1>
            <p className="hero__description">
              Aqui o capricho vai do primeiro ao último pedaço. Hambúrgueres, molhos caseiros e
              aquela geleia que faz toda a diferença.
            </p>
            <div className="hero__actions">
              <WhatsAppLink />
              <a className="button button--outline" href="#sabores">
                Conhecer os sabores <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="hero__location">
              <MapPin size={17} aria-hidden="true" />
              <span>
                No Triunfo. Do seu jeito. <strong>Desde 2024.</strong>
              </span>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-wrap">
              <img
                className="hero__image"
                src={clientImages.burger.src}
                alt={clientImages.burger.alt}
                width={clientImages.burger.width}
                height={clientImages.burger.height}
                fetchPriority="high"
              />
              <span className="photo-credit">Da nossa casa, de verdade.</span>
            </div>
            <div className="flavor-seal">
              <span>SABOR QUE</span>
              <strong>MARCA.</strong>
              <span>VONTADE QUE VOLTA.</span>
            </div>
            <div className="hero__note">
              <Flame size={28} aria-hidden="true" />
              <div>
                <strong>O TOQUE É CASEIRO.</strong>
                <span>O sabor você não esquece.</span>
              </div>
              <ArrowUpRight size={25} aria-hidden="true" />
            </div>
            <span className="hero__annotation" aria-hidden="true">
              a fome encontrou seu lugar.
            </span>
          </div>
        </div>
      </section>
      <div className="flavor-strip" aria-hidden="true">
        <div className="flavor-strip__inner">
          {['HAMBÚRGUER DE RESPEITO', 'MOLHOS CASEIROS', 'GELEIA DA CASA', 'MUITO SABOR'].map(
            (text) => (
              <span key={text}>
                {text}
                <span className="asterisk">✳</span>
              </span>
            ),
          )}
        </div>
      </div>
    </>
  );
}
