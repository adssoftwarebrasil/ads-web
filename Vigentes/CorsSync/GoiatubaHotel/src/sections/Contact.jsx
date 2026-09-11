import Icon from '../components/Icon.jsx'
import facade from '../assets/hotel/facade-side.jpg'

function Contact() {
  return (
    <section className="section contact" id="localizacao">
      <div className="container">
        <div className="contact__shell">
          <div className="contact__content" data-reveal>
            <p className="eyebrow eyebrow--light"><span /> Sua próxima estadia</p>
            <h2>Chegou a hora de fazer as malas.</h2>
            <p>Fale diretamente com a nossa equipe, consulte as opções disponíveis e planeje sua chegada a Goianésia.</p>
            <div className="contact__actions">
              <a className="button button--cream button--large" href="https://wa.me/556233533888?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20para%20uma%20hospedagem." target="_blank" rel="noreferrer">
                Reservar pelo WhatsApp <Icon name="arrow" size={20} />
              </a>
              <a className="contact__phone" href="tel:+556233533888"><Icon name="phone" /> <span><small>Prefere ligar?</small>(62) 3353-3888</span></a>
            </div>
          </div>
          <div className="contact__location" data-reveal>
            <img src={facade} alt="Lateral da fachada do Goiatuba Hotel" loading="lazy" />
            <div className="contact__card">
              <span className="contact__pin"><Icon name="pin" /></span>
              <div>
                <small>Estamos em</small>
                <h3>Rua 28, 330</h3>
                <p>Bairro Carrilho<br />Goianésia — Goiás</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Rua+28%2C+330%2C+Carrilho%2C+Goian%C3%A9sia%2C+GO" target="_blank" rel="noreferrer">Traçar rota <Icon name="external" size={17} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
