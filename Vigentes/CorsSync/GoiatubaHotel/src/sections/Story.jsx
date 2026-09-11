import Icon from '../components/Icon.jsx'
import hotelVideo from '../assets/hotel/hotel-tour.mp4'
import videoPoster from '../assets/hotel/courtyard.jpg'

function Story() {
  return (
    <section className="story" id="historia">
      <div className="story__pattern" aria-hidden="true" />
      <div className="container story__grid">
        <div className="story__content" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> Uma história que atravessa gerações</p>
          <span className="story__year">1973</span>
          <h2>Há mais de cinco décadas, Goianésia recebe você por aqui.</h2>
          <p>Desde 3 de setembro de 1973, o Goiatuba Hotel faz parte da história da cidade. Ao longo dos anos, recebemos pessoas de diferentes lugares do Brasil, em viagens de trabalho, visitas à região e momentos de lazer.</p>
          <p>A experiência acumulada nesse caminho está presente no que mais importa: acolher cada hóspede com atenção e tornar sua estadia mais tranquila.</p>
          <a className="button button--cream" href="#localizacao">Venha nos encontrar <Icon name="arrow" size={19} /></a>
        </div>
        <div className="story__media" data-reveal>
          <video autoPlay muted loop playsInline preload="metadata" poster={videoPoster} aria-label="Um passeio pelo Goiatuba Hotel">
            <source src={hotelVideo} type="video/mp4" />
          </video>
          <div className="story__media-label"><Icon name="play" size={20} /><span>Um pouco do nosso espaço</span></div>
        </div>
      </div>
    </section>
  )
}

export default Story
