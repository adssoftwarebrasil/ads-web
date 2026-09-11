import Icon from '../components/Icon.jsx'
import facade from '../assets/hotel/facade-night.jpg'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__decor hero__decor--one" aria-hidden="true" />
      <div className="hero__decor hero__decor--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <p className="eyebrow"><span /> Desde 1973 em Goianésia</p>
          <h1>Uma boa estadia faz a viagem <em>fluir melhor.</em></h1>
          <p className="hero__lead">
            Para quem chega a trabalho, a passeio ou para visitar a região: uma hospedagem acolhedora, de fácil acesso e com atendimento a qualquer hora.
          </p>
          <div className="hero__actions">
            <a
              className="button button--primary button--large"
              href="https://wa.me/556233533888?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20para%20uma%20hospedagem."
              target="_blank"
              rel="noreferrer"
            >
              Consultar disponibilidade <Icon name="arrow" size={20} />
            </a>
            <a className="text-link" href="#acomodacoes">Conhecer o hotel <Icon name="chevron" size={18} /></a>
          </div>
          <div className="hero__microcopy">
            <span><Icon name="clock" size={18} /> Recepção 24h</span>
            <span><Icon name="pin" size={18} /> Bairro Carrilho</span>
          </div>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__image-wrap">
            <img src={facade} alt="Fachada iluminada do Goiatuba Hotel ao anoitecer" fetchPriority="high" />
            <div className="hero__image-caption">
              <span className="hero__caption-dot" />
              <span><strong>Portas abertas, dia e noite</strong>Rua 28, nº 330</span>
            </div>
          </div>
          <div className="hero__stamp" aria-label="Mais de cinco décadas de história">
            <span>mais de</span>
            <strong>50</strong>
            <span>anos de história</span>
          </div>
        </div>
      </div>
      <a className="hero__scroll" href="#destaques" aria-label="Ir para a próxima seção">
        <span>Descubra</span><i aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
