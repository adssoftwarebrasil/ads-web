import { ArrowUpRight, Camera, Mail, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { whatsappLink } from "../data/content";

function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <div className="container contact-card reveal" data-reveal>
        <div className="contact-card__main">
          <p className="section-eyebrow section-eyebrow--light">Sua estadia começa aqui</p>
          <h2>Vamos encontrar o apartamento ideal para a sua viagem?</h2>
          <p>
            Fale diretamente com a recepção 24 horas e consulte disponibilidade para as datas que você precisa.
          </p>
          <a className="button button--red" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Consultar pelo WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-card__details">
          <a href="tel:+557799340180"><Phone /> <span><small>Telefone e WhatsApp</small>(77) 9934-0180</span></a>
          <a href="mailto:parishotel.ba@gmail.com"><Mail /> <span><small>Reservas e atendimento</small>parishotel.ba@gmail.com</span></a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Paris+Apart+Hotel+Barreiras+BA"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin /> <span><small>Localização</small>Barreiras, Bahia</span>
          </a>
          <div className="contact-socials" aria-label="Redes sociais">
            <a href="https://www.instagram.com/parishotel_barreiras/" target="_blank" rel="noreferrer" aria-label="Instagram do Paris Apart Hotel"><Camera /></a>
            <a href="https://www.facebook.com/profile.php?id=100067776667975" target="_blank" rel="noreferrer" aria-label="Facebook do Paris Apart Hotel"><Users /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
