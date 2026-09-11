import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { contact } from "../data/contact";

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__slats" aria-hidden="true" />
      <div className="container">
        <Reveal className="contact__panel">
          <div>
            <p className="eyebrow eyebrow--yellow">Seu próximo projeto</p>
            <h2>Vamos conversar sobre a solução ideal para o seu espaço?</h2>
          </div>
          <div className="contact__action">
            <p>
              Fale com a Portas de Aço Brasil Pará pelo canal oficial e apresente
              sua necessidade.
            </p>
            <div className="contact__buttons">
              <a
                className="button button--primary"
                href={contact.instagramHref}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="instagram" size={20} />
                Chamar no Instagram
              </a>
              <a
                className="button button--whatsapp"
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" size={20} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className="contact__meta">
            <span>Atendimento em Santarém e cidades vizinhas</span>
            <a href={contact.phoneHref}>Celular: {contact.phoneDisplay}</a>
            <a href={contact.instagramHref} target="_blank" rel="noreferrer">
              {contact.instagramHandle}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
