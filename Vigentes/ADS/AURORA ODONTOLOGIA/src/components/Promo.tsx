import useInView from '../hooks/useInView';
import BeforeAfterCarousel from './BeforeAfterCarousel';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP = 'https://wa.me/5566996074925';

export default function Promo() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="promo" ref={ref}>
      <div className={`promo__inner${inView ? ' animate-in' : ''}`}>
        <div className="promo__text">
          <span className="badge badge--gold">Oportunidade Especial</span>
          <h2 className="promo__title">Prótese Dentária Fixa</h2>
          <p className="promo__desc">
            Recupere seu sorriso com segurança e naturalidade.
            <br />
            Diga adeus à dentadura de vez!
          </p>

          <div className="promo__price-box">
            <p className="promo__price-label">A partir de</p>
            <div className="promo__price-row">
              <span className="promo__installments">18x de</span>
              <span className="promo__value">
                R$&nbsp;697<sup>00</sup>
              </span>
            </div>
            <p className="promo__price-obs">no cartão de crédito · Boleto sujeito à análise</p>
          </div>

          <div className="promo__urgency">
            <span className="urgency-dot" />
            Apenas <strong>10 vagas</strong> disponíveis!
          </div>

          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa btn-lg">
            <WhatsAppIcon size={20} />
            Agendar Avaliação Gratuita
          </a>
        </div>

        <div className="promo__media">
          <div className="promo__img-wrap">
            <BeforeAfterCarousel />
            <div className="promo__img-badge">
              Avaliação
              <br />
              <strong>Gratuita</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
