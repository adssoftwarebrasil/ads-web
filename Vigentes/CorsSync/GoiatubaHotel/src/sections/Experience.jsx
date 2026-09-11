import Icon from '../components/Icon.jsx'
import breakfast from '../assets/hotel/breakfast-wide.jpg'
import room from '../assets/hotel/room-family.jpg'

const comforts = [
  { icon: 'coffee', title: 'Café da manhã', text: 'Para começar o dia com calma antes de seguir viagem ou compromisso.' },
  { icon: 'snow', title: 'Climatização', text: 'Consulte as opções de quartos com ar-condicionado.' },
  { icon: 'fridge', title: 'Opções com frigobar', text: 'Mais comodidade durante a estadia, conforme a categoria escolhida.' },
  { icon: 'clock', title: 'Atendimento contínuo', text: 'Nossa equipe recebe hóspedes 24 horas por dia.' },
]

function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="container experience__grid">
        <div className="experience__visual" data-reveal>
          <div className="experience__main-image"><img src={breakfast} alt="Mesa de café da manhã servida no Goiatuba Hotel" loading="lazy" /></div>
          <div className="experience__small-image"><img src={room} alt="Quarto com camas preparadas para receber hóspedes" loading="lazy" /></div>
          <span className="experience__line" aria-hidden="true" />
        </div>
        <div className="experience__content" data-reveal>
          <p className="eyebrow"><span /> O essencial, bem cuidado</p>
          <h2>Noites tranquilas. Manhãs que começam bem.</h2>
          <p className="experience__intro">Cada detalhe ajuda a deixar a passagem pela cidade mais leve — da chegada a qualquer hora ao café antes de começar o dia.</p>
          <div className="comfort-list">
            {comforts.map((item) => (
              <div className="comfort-item" key={item.title}>
                <span><Icon name={item.icon} /></span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
