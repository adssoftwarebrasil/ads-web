import Icon from "../components/Icon";
import { primaryWhatsappLink } from "../data/siteData";

function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="container contact-cta__inner reveal">
        <div className="contact-cta__icon" aria-hidden="true">
          <Icon name="wrench" size={34} />
        </div>
        <div>
          <span>Seu equipamento precisa de atenção?</span>
          <h2>Conte o que está acontecendo. A Kadima orienta o próximo passo.</h2>
        </div>
        <a
          className="button button--navy"
          href={primaryWhatsappLink}
          rel="noreferrer"
          target="_blank"
        >
          Conversar no WhatsApp
          <Icon name="arrowRight" size={20} />
        </a>
      </div>
    </section>
  );
}

export default ContactCta;

