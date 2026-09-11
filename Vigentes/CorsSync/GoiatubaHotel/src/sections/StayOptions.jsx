import Icon from '../components/Icon.jsx'
import room from '../assets/hotel/room-triple.jpg'
import workspace from '../assets/hotel/room-workspace.jpg'
import familyRoom from '../assets/hotel/room-family-bright.jpg'

const reasons = [
  { icon: 'briefcase', label: 'Trabalho', title: 'Praticidade para seguir a agenda', text: 'Uma base tranquila em Goianésia para descansar entre um compromisso e outro.', image: workspace },
  { icon: 'sun', label: 'Lazer', title: 'Conforto para aproveitar a passagem', text: 'Atendimento acolhedor para quem visita a cidade e quer uma estadia sem complicação.', image: room },
  { icon: 'users', label: 'Família ou grupo', title: 'Opções para diferentes viagens', text: 'Consulte as configurações de quartos disponíveis para a sua hospedagem.', image: familyRoom },
]

function StayOptions() {
  return (
    <section className="section stay" id="acomodacoes">
      <div className="container">
        <div className="section-heading section-heading--split" data-reveal>
          <div>
            <p className="eyebrow"><span /> Sua parada em Goianésia</p>
            <h2>A estadia certa para o ritmo da sua viagem.</h2>
          </div>
          <p>Quartos preparados para receber quem viaja sozinho, em casal, com a família ou a equipe — sempre com a tradição de quem acolhe há décadas.</p>
        </div>
        <div className="stay__grid">
          {reasons.map((item, index) => (
            <article className={`stay-card stay-card--${index + 1}`} key={item.label} data-reveal style={{ '--delay': `${index * 90}ms` }}>
              <img src={item.image} alt="" loading="lazy" />
              <div className="stay-card__shade" />
              <div className="stay-card__content">
                <span className="stay-card__tag"><Icon name={item.icon} size={18} /> {item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="stay__note" data-reveal>
          <span><Icon name="bed" /> Quartos com diferentes configurações</span>
          <a href="https://wa.me/556233533888?text=Ol%C3%A1%2C%20quero%20saber%20quais%20quartos%20est%C3%A3o%20dispon%C3%ADveis." target="_blank" rel="noreferrer">
            Encontre uma opção para você <Icon name="arrow" size={19} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default StayOptions
