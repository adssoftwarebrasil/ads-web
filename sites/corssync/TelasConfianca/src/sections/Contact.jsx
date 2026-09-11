import { ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import { contact } from '../data'

export function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="container contact-section__grid">
        <div className="contact-cta">
          <p className="eyebrow eyebrow--light"><span /> Orçamento rápido pelo WhatsApp</p>
          <h2>Precisa de Telas, Alambrados ou Arames?</h2>
          <p>Solicite um orçamento agora mesmo e conte com quem é referência em cercamentos há mais de 20 anos em Maringá.</p>
          <a className="button button--white" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} aria-hidden="true" /> Solicitar orçamento <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="contact-cta__address" href={contact.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" /> <span><strong>{contact.address}</strong><small>{contact.postalCode}</small></span>
          </a>
        </div>

        <div className="map-card">
          <iframe
            src="https://www.google.com/maps?q=Rua%20Castro%20Alves%2C%201527%2C%20Maring%C3%A1%2C%20PR&output=embed"
            title="Mapa da Telas e Arames Confiança em Maringá"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={contact.mapsUrl} target="_blank" rel="noreferrer">Abrir rota no Google Maps <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

